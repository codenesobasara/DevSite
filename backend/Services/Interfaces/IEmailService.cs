namespace Backend.Services.Interfaces;

public interface IEmailService
{
    Task SendContactNotificationAsync(string name, string email, string? company, string service, string message);
    Task SendContactAutoReplyAsync(string name, string email);
    Task SendSeoRequestNotificationAsync(string name, string email, string? company, string website, string? message);
    Task SendSeoAutoReplyAsync(string name, string email, string website);
    Task SendChatLeadNotificationAsync(string name, string email, string? company, string? needs, string? service);
}
