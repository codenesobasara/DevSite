"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardFooter,
  CardContent,
} from "./card"
import { Button } from "./button"
import { Input } from "@/components/ui/input"
import { X, MessageCircle, Minus, Send } from "lucide-react"
import { ChatService } from "@/services/ChatService"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [sessionId, setSessionId] = useState(null)
  const [hasUserReplied, setHasUserReplied] = useState(false)
  const [hasInitFired, setHasInitFired] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)
  const [nudgeCount, setNudgeCount] = useState(0)
  const [pageTriggersFired, setPageTriggersFired] = useState([])
  const messagesEndRef = useRef(null)
  const nudgeTimerRef = useRef(null)
  const sessionIdRef = useRef(null)
  const pathname = usePathname()

  // Restore session from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("slate_chat")
    if (saved) {
      try {
        const data = JSON.parse(saved)
        // Only restore if we have actual messages to show
        if (data.sessionId && data.messages?.length) {
          setSessionId(data.sessionId)
          setMessages(data.messages)
          if (data.hasUserReplied) setHasUserReplied(true)
          setHasInitFired(true)
        } else {
          // Bad/empty session — clear it
          localStorage.removeItem("slate_chat")
        }
      } catch {
        localStorage.removeItem("slate_chat")
      }
    }
  }, [])

  // Save session to localStorage whenever it changes
  useEffect(() => {
    if (sessionId) {
      localStorage.setItem(
        "slate_chat",
        JSON.stringify({ sessionId, messages, hasUserReplied })
      )
    }
  }, [sessionId, messages, hasUserReplied])

  // Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Keep ref in sync so async callbacks always get latest sessionId
  useEffect(() => {
    sessionIdRef.current = sessionId
  }, [sessionId])

  // Helper to send a trigger and handle the response
  const sendTrigger = async (trigger) => {
    if (hasDismissed) return
    const data = await ChatService(trigger, sessionIdRef.current)
    setSessionId(data.sessionId)
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ])
    if (!hasDismissed) setIsOpen(true)
  }

  // Handle dismiss — respect the close
  const handleDismiss = () => {
    setIsOpen(false)
    if (!hasUserReplied) {
      setHasDismissed(true)
    }
  }

  // Initial trigger after 8 seconds
  useEffect(() => {
    if (hasInitFired || hasDismissed) return

    const timer = setTimeout(async () => {
      await sendTrigger("__INIT__")
      setHasInitFired(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [hasDismissed])

  // Page-aware triggers
  useEffect(() => {
    if (!hasInitFired || hasUserReplied || hasDismissed) return

    const pageTriggers = {
      "/services": "__PAGE_SERVICES__",
      "/case-studies": "__PAGE_CASESTUDIES__",
    }

    const trigger = pageTriggers[pathname]
    if (!trigger) return
    if (pageTriggersFired.includes(trigger)) return

    const timer = setTimeout(async () => {
      await sendTrigger(trigger)
      setPageTriggersFired((prev) => [...prev, trigger])
    }, 6000)

    return () => clearTimeout(timer)
  }, [pathname, hasInitFired, hasUserReplied, hasDismissed, pageTriggersFired])

  // Nudge timer
  useEffect(() => {
    if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current)
    if (!hasInitFired || hasUserReplied || hasDismissed) return
    if (messages.length === 0) return
    if (nudgeCount >= 2) return

    const lastMessage = messages[messages.length - 1]
    if (lastMessage.role !== "assistant") return

    const delay = nudgeCount === 0 ? 30000 : 180000

    nudgeTimerRef.current = setTimeout(async () => {
      await sendTrigger("__NUDGE__")
      setNudgeCount((prev) => prev + 1)
    }, delay)

    return () => {
      if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current)
    }
  }, [messages, hasUserReplied, nudgeCount, hasDismissed])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const userMessage = message.trim()
    setMessage("")
    setHasUserReplied(true)
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    const data = await ChatService(userMessage, sessionId)
    setSessionId(data.sessionId)
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ])
  }

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-[80]">
          <Card className="h-full md:h-[500px] md:w-[380px] md:ml-auto flex flex-col border border-border shadow-2xl md:rounded-xl rounded-none overflow-hidden bg-[#1a1a1a]">
            <CardHeader className="border-b border-white/10 pb-4">
              <CardTitle className="text-white">Support Chat</CardTitle>
              <CardAction>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-white"
                  onClick={handleDismiss}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={
                      msg.role === "assistant"
                        ? "bg-white/5 text-zinc-300 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%]"
                        : "bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]"
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className="border-t border-white/10 p-4">
              <form onSubmit={handleSend} className="flex w-full gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/5 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary"
                />
                <Button type="submit" size="icon" disabled={!message.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Trigger button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[80]">
        <Button
          onClick={() => {
            if (isOpen) handleDismiss()
            else setIsOpen(true)
          }}
          className="h-12 w-12 md:h-12 md:w-auto md:px-5 rounded-full shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform gap-2"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <>
              <MessageCircle className="h-5 w-5" />
              <span className="hidden md:inline text-sm font-medium">
                Got questions? Let&apos;s chat
              </span>
            </>
          )}
        </Button>
      </div>
    </>
  )
}
