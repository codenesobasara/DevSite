using Backend.Models;
using Backend.Services;
using Backend.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddScoped<IGeminiService, GeminiService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");

app.MapPost("/api/chat", async (ChatRequest request, IGeminiService gemini) =>
{
    try
    {
        var response = await gemini.ChatAsync(request.Message);
        return Results.Ok(new { reply = response });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"ERROR: {ex.Message}");
        Console.WriteLine($"STACK: {ex.StackTrace}");
        return Results.Problem(ex.Message);
    }
});

app.Run();
