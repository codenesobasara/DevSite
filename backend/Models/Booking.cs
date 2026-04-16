namespace Backend.Models;

public class Booking
{
    public Guid Id { get; set; }
    public Guid SessionId { get; set; }
    public string? CalendarEventId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Session Session { get; set; } = null!;
}
