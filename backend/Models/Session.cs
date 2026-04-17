namespace Backend.Models;

public class Session
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    public string? LeadName { get; set; }
    public string? LeadEmail { get; set; }
    public string? LeadCompany { get; set; }
    public string State { get; set; } = "greeting";
    public string AgentName { get; set; } = "Lily";

    public List<Message> Messages { get; set; } = [];
    public List<Booking> Bookings { get; set; } = [];
}
