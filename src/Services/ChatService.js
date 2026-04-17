export  async function ChatService(message, sessionId){

   const baseUrl = window.location.hostname === "localhost"
     ? "http://localhost:5198"
     : "https://api.ponterastudios.com";
   const response = await fetch(`${baseUrl}/api/chat`, {                                                                                                                                                                          method: "POST",                                                                                                                                                                                                                     
    headers: { "Content-Type": "application/json" },                                                                                                                                                                                    
    body: JSON.stringify({ message, sessionId })                                                                                                                                                                                        
  });  
  const data = await response.json();
  return data
} 