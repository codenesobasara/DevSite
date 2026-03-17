  namespace Backend.Services.Interfaces;    

    public interface IGeminiService
  {
      Task<string> ChatAsync(string message);
  }