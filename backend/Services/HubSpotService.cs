namespace Backend.Services;

using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Backend.Services.Interfaces;

public class HubSpotService : IHubSpotService
{
    private readonly HttpClient _http;
    private readonly string? _apiKey;

    public HubSpotService(IConfiguration configuration, HttpClient httpClient)
    {
        _apiKey = configuration["HubSpotApiKey"];
        _http = httpClient;
        _http.BaseAddress = new Uri("https://api.hubapi.com/");
        _http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);
    }

    public async Task<string> CreateOrUpdateContactAsync(string email, string firstName, string lastName, string? company, string? service = null, string? message = null)
    {
        var searchPayload = new
        {
            filterGroups = new[]
            {
                new
                {
                    filters = new[]
                    {
                        new { propertyName = "email", @operator = "EQ", value = email }
                    }
                }
            },
            properties = new[] { "email" },
            limit = 1
        };

        var searchResponse = await PostJson("crm/v3/objects/contacts/search", searchPayload);
        var searchResult = JsonSerializer.Deserialize<HubSpotSearchResult>(searchResponse);

        var props = BuildContactProperties(email, firstName, lastName, company);

        string contactId;
        if (searchResult?.Total > 0)
        {
            contactId = searchResult.Results[0].Id;
            await PatchJson($"crm/v3/objects/contacts/{contactId}", new { properties = props });
        }
        else
        {
            var createResponse = await PostJson("crm/v3/objects/contacts", new { properties = props });
            var created = JsonSerializer.Deserialize<HubSpotObject>(createResponse);
            contactId = created?.Id ?? throw new Exception("Failed to create HubSpot contact");
        }

        // Create a note on the contact timeline
        if (!string.IsNullOrWhiteSpace(service) || !string.IsNullOrWhiteSpace(message))
        {
            var noteBody = $"Service: {service ?? "N/A"}\n\n{message ?? ""}";
            var notePayload = new
            {
                properties = new Dictionary<string, string>
                {
                    ["hs_note_body"] = noteBody,
                    ["hs_timestamp"] = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds().ToString()
                },
                associations = new[]
                {
                    new
                    {
                        to = new { id = contactId },
                        types = new[]
                        {
                            new { associationCategory = "HUBSPOT_DEFINED", associationTypeId = 202 }
                        }
                    }
                }
            };
            await PostJson("crm/v3/objects/notes", notePayload);
        }

        return contactId;
    }

    private static Dictionary<string, string> BuildContactProperties(string email, string firstName, string lastName, string? company)
    {
        var props = new Dictionary<string, string>
        {
            ["email"] = email,
            ["firstname"] = firstName,
            ["lastname"] = lastName
        };
        if (!string.IsNullOrWhiteSpace(company))
            props["company"] = company;
        return props;
    }

    private async Task<string> PostJson(string url, object? payload)
    {
        var json = JsonSerializer.Serialize(payload);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await _http.PostAsync(url, content);
        var body = await response.Content.ReadAsStringAsync();
        if (!response.IsSuccessStatusCode)
            throw new Exception($"HubSpot API error ({response.StatusCode}): {body}");
        return body;
    }

    private async Task PatchJson(string url, object payload)
    {
        var json = JsonSerializer.Serialize(payload);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await _http.PatchAsync(url, content);
        if (!response.IsSuccessStatusCode)
        {
            var body = await response.Content.ReadAsStringAsync();
            throw new Exception($"HubSpot API error ({response.StatusCode}): {body}");
        }
    }

    private async Task PutJson(string url, object? payload)
    {
        var json = payload != null ? JsonSerializer.Serialize(payload) : "{}";
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await _http.PutAsync(url, content);
        if (!response.IsSuccessStatusCode)
        {
            var body = await response.Content.ReadAsStringAsync();
            throw new Exception($"HubSpot API error ({response.StatusCode}): {body}");
        }
    }
}

file class HubSpotSearchResult
{
    [JsonPropertyName("total")]
    public int Total { get; set; }

    [JsonPropertyName("results")]
    public List<HubSpotObject> Results { get; set; } = [];
}

file class HubSpotObject
{
    [JsonPropertyName("id")]
    public string Id { get; set; } = "";
}
