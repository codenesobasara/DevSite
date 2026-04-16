namespace Backend.Models;

using System.Text.Json.Serialization;

public class ChatResponse
{
    [JsonPropertyName("message")]
    public string Message { get; set; } = "";

    [JsonPropertyName("currentState")]
    public string CurrentState { get; set; } = "intro";

    [JsonPropertyName("nextState")]
    public string NextState { get; set; } = "intro";

    [JsonPropertyName("extractedData")]
    public ExtractedData ExtractedData { get; set; } = new();
}

public class ExtractedData
{
    [JsonPropertyName("name")]
    public string? Name { get; set; }

    [JsonPropertyName("email")]
    public string? Email { get; set; }

    [JsonPropertyName("company")]
    public string? Company { get; set; }

    [JsonPropertyName("needs")]
    public string? Needs { get; set; }

    [JsonPropertyName("service_match")]
    public string? ServiceMatch { get; set; }

    [JsonPropertyName("preferred_day")]
    public string? PreferredDay { get; set; }

    [JsonPropertyName("preferred_time")]
    public string? PreferredTime { get; set; }

    [JsonPropertyName("meeting_format")]
    public string? MeetingFormat { get; set; }
}
