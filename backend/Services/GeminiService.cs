  namespace Backend.Services;
  using Backend.Services.Interfaces;
  using Microsoft.Extensions.Configuration;
  using Mscc.GenerativeAI; 
  using Backend.Prompts;    

  public class GeminiService : IGeminiService
  {
    private readonly string? _apiKey;
    public GeminiService(IConfiguration Configuration)
    {
      _apiKey=Configuration["GeminiApiKey"];
    }      
    public async Task<string> ChatAsync(string message)
    {
        var googleAi = new GoogleAI(_apiKey);
        var model = googleAi.GenerativeModel(                                                                                                                                                             
      model: "gemini-3-flash-preview",                                                                                                                                                              
      systemInstruction: new Mscc.GenerativeAI.Types.Content(SystemPrompts.DevCo)                                                                                                                   
  );                                                                                     
        var response = await model.GenerateContent(message);
        return response.Text;
    }
  }