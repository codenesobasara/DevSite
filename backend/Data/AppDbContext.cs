using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data;

public class AppDbContext:DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options){}

    public DbSet<Session> Sessions{get;set;}
    public DbSet<Message> Messages{get;set;}
    public DbSet<Booking> Bookings {get;set;}


}