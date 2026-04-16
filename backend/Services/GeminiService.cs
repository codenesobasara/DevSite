namespace Backend.Services;

using System.Text.Json;
using Backend.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Mscc.GenerativeAI;
using Backend.Prompts;
using Backend.Models;
using Mscc.GenerativeAI.Types;

public class GeminiService : IGeminiService
{
    private readonly string? _apiKey;

    public GeminiService(IConfiguration Configuration)
    {
        _apiKey = Configuration["GeminiApiKey"];
    }

    public async Task<ChatResponse> ChatAsync(string message, List<Backend.Models.Message> messages)
    {
        Console.WriteLine($"[Gemini] Starting ChatAsync with message: {message}");
        Console.WriteLine($"[Gemini] API Key present: {!string.IsNullOrEmpty(_apiKey)}, length: {_apiKey?.Length}");

        var googleAi = new GoogleAI(_apiKey);
        var model = googleAi.GenerativeModel(
            model: "gemini-2.5-flash",
            systemInstruction: new Mscc.GenerativeAI.Types.Content(SystemPrompts.Slate)
        );

        var history = new List<ContentResponse>();
        foreach (var msg in messages)
        {
            string role = msg.Role.ToLower() == "assistant" ? "model" : "user";
            history.Add(new ContentResponse(msg.Content, role));
        }

        Console.WriteLine($"[Gemini] History count: {history.Count}, sending to model...");
        var chat = model.StartChat(history);
        var response = await chat.SendMessage(message);
        Console.WriteLine($"[Gemini] Got response, Text null?: {response.Text == null}");
        var text = response.Text ?? "";

        // Extract JSON from response — Gemini may include thinking/reasoning text around it
        var cleaned = text.Trim();

        // Try to find a JSON object in the response
        var jsonStart = cleaned.IndexOf('{');
        var jsonEnd = cleaned.LastIndexOf('}');

        if (jsonStart >= 0 && jsonEnd > jsonStart)
        {
            var jsonCandidate = cleaned.Substring(jsonStart, jsonEnd - jsonStart + 1);

            // Strip markdown code fences if present inside
            if (jsonCandidate.Contains("```"))
            {
                jsonCandidate = jsonCandidate.Replace("```json", "").Replace("```", "").Trim();
            }

            try
            {
                var parsed = JsonSerializer.Deserialize<ChatResponse>(jsonCandidate);
                if (parsed != null)
                    return parsed;
            }
            catch (JsonException)
            {
                // JSON extraction failed — fall through to fallback
            }
        }

        return new ChatResponse
        {
            Message = text,
            CurrentState = "intro",
            NextState = "intro",
            ExtractedData = new ExtractedData()
        };
    }
}
