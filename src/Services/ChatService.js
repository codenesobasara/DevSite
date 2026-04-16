export  async function ChatService(message, sessionId){

   const response = await fetch("http://localhost:5198/api/chat", {                                                                                                                                                                          method: "POST",                                                                                                                                                                                                                     
    headers: { "Content-Type": "application/json" },                                                                                                                                                                                    
    body: JSON.stringify({ message, sessionId })                                                                                                                                                                                        
  });  
  const data = await response.json();
  return data
} 