namespace Backend.Services.Interfaces;

public interface IHubSpotService
{
    Task<string> CreateOrUpdateContactAsync(string email, string firstName, string lastName, string? company, string? service = null, string? message = null);
}
