namespace Backend.Models;

public record ContactRequest(
    string Name,
    string Email,
    string Service,
    string Message,
    string? Company
);
