import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardAction, CardTitle, CardFooter, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Minus, Send, Loader2 } from "lucide-react";
import { ChatService } from "@/Services/ChatService";
import { useDrawer } from "@/Context/DrawerContext";

const STORAGE_KEYS = {
  sessionId: "devco_chat_sessionId",
  messages: "devco_chat_messages",
  hasUserReplied: "devco_chat_hasUserReplied",
  hasDismissed: "devco_chat_hasDismissed",
  hasInitFired: "devco_chat_hasInitFired",
  nudgeCount: "devco_chat_nudgeCount",
  pageTriggersFired: "devco_chat_pageTriggersFired",
};

function loadFromStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

export default function ChatWidget() {
  const { isOpen: isModalOpen } = useDrawer();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(() => loadFromStorage(STORAGE_KEYS.messages, []));
  const [sessionId, setSessionId] = useState(() => loadFromStorage(STORAGE_KEYS.sessionId, null));
  const [hasUserReplied, setHasUserReplied] = useState(() => loadFromStorage(STORAGE_KEYS.hasUserReplied, false));
  const [hasInitFired, setHasInitFired] = useState(() => loadFromStorage(STORAGE_KEYS.hasInitFired, false));
  const [hasDismissed, setHasDismissed] = useState(() => loadFromStorage(STORAGE_KEYS.hasDismissed, false));
  const [nudgeCount, setNudgeCount] = useState(() => loadFromStorage(STORAGE_KEYS.nudgeCount, 0));
  const [pageTriggersFired, setPageTriggersFired] = useState(() => loadFromStorage(STORAGE_KEYS.pageTriggersFired, []));
  const messagesEndRef = useRef(null);
  const nudgeTimerRef = useRef(null);
  const location = useLocation();

  // Persist state to localStorage
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.sessionId, JSON.stringify(sessionId)); }, [sessionId]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(messages)); }, [messages]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.hasUserReplied, JSON.stringify(hasUserReplied)); }, [hasUserReplied]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.hasDismissed, JSON.stringify(hasDismissed)); }, [hasDismissed]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.hasInitFired, JSON.stringify(hasInitFired)); }, [hasInitFired]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.nudgeCount, JSON.stringify(nudgeCount)); }, [nudgeCount]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.pageTriggersFired, JSON.stringify(pageTriggersFired)); }, [pageTriggersFired]);

  // Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Helper to send a trigger and handle the response
  const sendTrigger = useCallback(async (trigger) => {
    if (hasDismissed || isModalOpen) return;
    try {
      const data = await ChatService(trigger, sessionId);
      setSessionId(data.sessionId);
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      if (!hasDismissed) setIsOpen(true);
    } catch {
      // Backend unavailable — silently skip trigger
    }
  }, [hasDismissed, isModalOpen, sessionId]);

  // Handle dismiss — respect the close
  const handleDismiss = () => {
    setIsOpen(false);
    if (!hasUserReplied) {
      setHasDismissed(true);
    }
  };

  // Initial trigger after 8 seconds — only if never fired before
  useEffect(() => {
    if (hasInitFired || hasDismissed) return;

    const timer = setTimeout(async () => {
      await sendTrigger("__INIT__");
      setHasInitFired(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasDismissed, hasInitFired, sendTrigger]);

  // Page-aware triggers — only fire if no conversation started and not dismissed
  useEffect(() => {
    if (!hasInitFired || hasUserReplied || hasDismissed) return;

    const pageTriggers = {
      "/services": "__PAGE_SERVICES__",
      "/case-study": "__PAGE_CASESTUDIES__",
    };

    const trigger = pageTriggers[location.pathname];
    if (!trigger) return;
    if (pageTriggersFired.includes(trigger)) return;

    const timer = setTimeout(async () => {
      await sendTrigger(trigger);
      setPageTriggersFired(prev => [...prev, trigger]);
    }, 6000);

    return () => clearTimeout(timer);
  }, [location.pathname, hasInitFired, hasUserReplied, hasDismissed, pageTriggersFired, sendTrigger]);

  // Nudge timer — first nudge after 30s, second after 3 min, then stop
  useEffect(() => {
    if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current);
    if (!hasInitFired || hasUserReplied || hasDismissed) return;
    if (messages.length === 0) return;
    if (nudgeCount >= 2) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "assistant") return;

    const delay = nudgeCount === 0 ? 30000 : 180000;

    nudgeTimerRef.current = setTimeout(async () => {
      await sendTrigger("__NUDGE__");
      setNudgeCount(prev => prev + 1);
    }, delay);

    return () => {
      if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current);
    };
  }, [messages, hasUserReplied, nudgeCount, hasDismissed, hasInitFired, sendTrigger]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");
    setHasUserReplied(true);
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const data = await ChatService(userMessage, sessionId);
      setSessionId(data.sessionId);
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatPanel = (
    <Card className="h-full xl:h-[500px] flex flex-col border border-border shadow-2xl rounded-xl overflow-hidden bg-[#1a1a1a]">
      <CardHeader className="border-b border-white/10 pb-4 shrink-0">
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
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 text-zinc-400 p-3 rounded-2xl rounded-tl-none text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <CardFooter className="border-t border-white/10 p-4 shrink-0">
        <form onSubmit={handleSend} className="flex w-full gap-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white/5 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button type="submit" size="icon" disabled={!message.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger button */}
      <Button
        className="h-12 px-5 rounded-full shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform gap-2"
        onClick={() => { if (isOpen) handleDismiss(); else setIsOpen(true); }}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Got questions? Let's chat</span>
          </>
        )}
      </Button>

      {/* Mobile: fixed full-screen panel */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex flex-col bg-[#111111]/95 p-4 pt-6">
          <div className="flex-1 min-h-0">
            {chatPanel}
          </div>
        </div>
      )}

      {/* Desktop: popover */}
      {isOpen && (
        <div className="hidden xl:block absolute bottom-16 right-0 w-[380px]">
          {chatPanel}
        </div>
      )}
    </div>
  );
}
