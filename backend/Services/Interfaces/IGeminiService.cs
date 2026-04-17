using Backend.Models;

  namespace Backend.Services.Interfaces;    

    public interface IGeminiService
  {
      Task<ChatResponse> ChatAsync(string message, List<Message> messages, string agentName);
  }