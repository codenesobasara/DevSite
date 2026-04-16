using Backend.Models;
using Backend.Services;
using Backend.Services.Interfaces;
using Backend.Data;
 using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

  builder.Services.AddDbContext<AppDbContext>(options =>                                                                                                                                                                                                
      options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))                                                                                                                                                                 
  );

builder.Services.AddOpenApi();
builder.Services.AddScoped<IGeminiService, GeminiService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
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

app.MapPost("/api/chat", async (ChatRequest request, IGeminiService gemini, AppDbContext db) =>
{
    try
    {
        var sessionId = request.SessionId;
        Session session;

        if (sessionId == null)
        {
            session = new Session { State = "intro" };
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

        var chatResponse = await gemini.ChatAsync(request.Message, history);

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
});

app.Run();
