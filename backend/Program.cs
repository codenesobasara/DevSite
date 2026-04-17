using Backend.Models;
using Backend.Services;
using Backend.Services.Interfaces;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.RateLimiting;
var builder = WebApplication.CreateBuilder(args);

  builder.Services.AddDbContext<AppDbContext>(options =>                                                                                                                                                                                                
      options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))                                                                                                                                                                 
  );

builder.Services.AddOpenApi();
builder.Services.AddScoped<IGeminiService, GeminiService>();
builder.Services.AddHttpClient<IHubSpotService, HubSpotService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                  "http://localhost:5173", "http://localhost:5174", "http://localhost:3000",
                  "http://192.168.68.59:5173", "http://192.168.68.59:5174",
                  "http://192.168.68.62:5173", "http://192.168.68.62:5174"
              )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = 429;

    // Chat endpoint: 10 requests per minute per IP
    options.AddPolicy("chat", context =>
        RateLimitPartition.GetSlidingWindowLimiter(
            context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new SlidingWindowRateLimiterOptions
            {
                PermitLimit = 10,
                Window = TimeSpan.FromMinutes(1),
                SegmentsPerWindow = 2
            }));

    // Contact form: 3 requests per minute per IP
    options.AddPolicy("contact", context =>
        RateLimitPartition.GetFixedWindowLimiter(
            context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 3,
                Window = TimeSpan.FromMinutes(1)
            }));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
app.UseCors("AllowFrontend");
app.UseRateLimiter();

app.Use(async (context, next) =>
{
    context.Response.Headers["Content-Security-Policy"] =
        "default-src 'self'; " +
        "script-src 'self' https://app.cal.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https:; " +
        "frame-src https://cal.com https://app.cal.com; " +
        "connect-src 'self' https://api.hubapi.com https://generativelanguage.googleapis.com;";
    context.Response.Headers["X-Content-Type-Options"] = "nosniff";
    context.Response.Headers["X-Frame-Options"] = "DENY";
    context.Response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
    await next();
});

app.MapPost("/api/chat", async (ChatRequest request, IGeminiService gemini, AppDbContext db, IHubSpotService hubspot) =>
{
    try
    {
        var sessionId = request.SessionId;
        Session session;

        if (sessionId == null)
        {
            var name = Random.Shared.Next(2) == 0 ? "Lily" : "Hannah";
            session = new Session { State = "intro", AgentName = name };
            db.Sessions.Add(session);
            await db.SaveChangesAsync();
            sessionId = session.Id;
        }
        else
        {
            session = await db.Sessions.FindAsync(sessionId.Value)
                ?? throw new Exception("Session not found");
        }

        var history = await db.Messages
            .Where(m => m.SessionId == sessionId)
            .OrderBy(m => m.CreatedAt)
            .ToListAsync();

        var userMsg = new Message { SessionId = sessionId.Value, Role = "user", Content = request.Message };
        db.Messages.Add(userMsg);
        await db.SaveChangesAsync();

        var chatResponse = await gemini.ChatAsync(request.Message, history, session.AgentName);

        // Save the assistant's message text to the DB
        var assistantMsg = new Message { SessionId = sessionId.Value, Role = "assistant", Content = chatResponse.Message };
        db.Messages.Add(assistantMsg);

        // Update session with extracted data
        if (chatResponse.ExtractedData.Name != null)
            session.LeadName = chatResponse.ExtractedData.Name;
        if (chatResponse.ExtractedData.Email != null)
            session.LeadEmail = chatResponse.ExtractedData.Email;
        if (chatResponse.ExtractedData.Company != null)
            session.LeadCompany = chatResponse.ExtractedData.Company;

        session.State = chatResponse.NextState;
        session.UpdatedAt = DateTime.UtcNow;

        // Push to HubSpot when we have both name and email
        if (chatResponse.ExtractedData.Email != null && session.LeadName != null && session.LeadEmail != null)
        {
            try
            {
                var nameParts = session.LeadName.Trim().Split(' ', 2);
                var firstName = nameParts[0];
                var lastName = nameParts.Length > 1 ? nameParts[1] : "";

                var noteText = $"Source: Chat Agent ({session.AgentName})";
                if (chatResponse.ExtractedData.Needs != null)
                    noteText += $"\nNeeds: {chatResponse.ExtractedData.Needs}";
                if (chatResponse.ExtractedData.ServiceMatch != null)
                    noteText += $"\nService: {chatResponse.ExtractedData.ServiceMatch}";
                if (session.LeadCompany != null)
                    noteText += $"\nCompany: {session.LeadCompany}";

                await hubspot.CreateOrUpdateContactAsync(
                    session.LeadEmail,
                    firstName,
                    lastName,
                    session.LeadCompany,
                    "Chat Agent Lead",
                    noteText
                );
                Console.WriteLine($"[HubSpot] Pushed chat lead: {session.LeadEmail}");
            }
            catch (Exception hubEx)
            {
                Console.WriteLine($"[HubSpot] Failed to push chat lead: {hubEx.Message}");
            }
        }

        // Create booking record when conversation reaches "booked" state
        if (chatResponse.NextState == "booked")
        {
            var booking = new Booking
            {
                SessionId = sessionId.Value,
                Name = session.LeadName ?? "",
                Email = session.LeadEmail ?? "",
                Notes = $"Needs: {chatResponse.ExtractedData.Needs ?? "N/A"} | " +
                        $"Service: {chatResponse.ExtractedData.ServiceMatch ?? "N/A"} | " +
                        $"Day: {chatResponse.ExtractedData.PreferredDay ?? "N/A"} | " +
                        $"Time: {chatResponse.ExtractedData.PreferredTime ?? "N/A"} | " +
                        $"Format: {chatResponse.ExtractedData.MeetingFormat ?? "N/A"}"
            };
            db.Bookings.Add(booking);
        }

        await db.SaveChangesAsync();

        return Results.Ok(new
        {
            reply = chatResponse.Message,
            sessionId = sessionId,
            state = chatResponse.NextState
        });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"ERROR: {ex.Message}");
        Console.WriteLine($"STACK: {ex.StackTrace}");
        return Results.Problem(ex.Message);
    }
}).RequireRateLimiting("chat");

app.MapPost("/api/contact", async (ContactRequest request, IHubSpotService hubspot) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
        string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Service) ||
        string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { error = "Name, email, service, and message are required." });
    }

    try
    {
        var nameParts = request.Name.Trim().Split(' ', 2);
        var firstName = nameParts[0];
        var lastName = nameParts.Length > 1 ? nameParts[1] : "";

        await hubspot.CreateOrUpdateContactAsync(
            request.Email.Trim(),
            firstName,
            lastName,
            request.Company?.Trim(),
            request.Service,
            request.Message
        );

        return Results.Ok(new { success = true });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"[HubSpot] ERROR: {ex.Message}");
        return Results.Problem("Something went wrong submitting your request. Please try again.");
    }
}).RequireRateLimiting("contact");

app.Run();
