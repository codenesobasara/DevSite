const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:5198"

export async function ChatService(message, sessionId) {
  try {
    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
    })

    if (!response.ok) {
      // If session is stale/missing, retry without sessionId to start fresh
      if (sessionId) {
        console.warn("Chat API error with session, retrying fresh:", response.status)
        localStorage.removeItem("slate_chat")
        const retry = await fetch(`${API_URL}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, sessionId: null }),
        })
        if (retry.ok) {
          return await retry.json()
        }
      }
      console.error("Chat API error:", response.status)
      return { reply: "Sorry, something went wrong. Try again in a moment.", sessionId: null, state: null }
    }

    return await response.json()
  } catch (err) {
    console.error("Chat API unreachable:", err.message)
    return { reply: "Sorry, something went wrong. Try again in a moment.", sessionId: null, state: null }
  }
}
