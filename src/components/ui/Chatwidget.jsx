import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardAction, CardTitle, CardFooter, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { X, MessageCircle, Minus, Send } from "lucide-react";
import { ChatService } from "@/Services/ChatService";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [hasUserReplied, setHasUserReplied] = useState(false);
  const [hasInitFired, setHasInitFired] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [nudgeCount, setNudgeCount] = useState(0);
  const [pageTriggersFired, setPageTriggersFired] = useState([]);
  const messagesEndRef = useRef(null);
  const nudgeTimerRef = useRef(null);
  const location = useLocation();

  // Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Helper to send a trigger and handle the response
  const sendTrigger = async (trigger) => {
    if (hasDismissed) return;
    const data = await ChatService(trigger, sessionId);
    setSessionId(data.sessionId);
    setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    if (!hasDismissed) setIsOpen(true);
  };

  // Handle dismiss — respect the close
  const handleDismiss = () => {
    setIsOpen(false);
    if (!hasUserReplied) {
      setHasDismissed(true);
    }
  };

  // Initial trigger after 8 seconds
  useEffect(() => {
    if (hasInitFired || hasDismissed) return;

    const timer = setTimeout(async () => {
      await sendTrigger("__INIT__");
      setHasInitFired(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

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
  }, [location.pathname, hasInitFired, hasUserReplied, hasDismissed, pageTriggersFired]);

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
  }, [messages, hasUserReplied, nudgeCount, hasDismissed]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    setHasUserReplied(true);
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    const data = await ChatService(userMessage, sessionId);
    setSessionId(data.sessionId);
    setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={(open) => { if (!open) handleDismiss(); else setIsOpen(true); }}>
        <PopoverTrigger asChild>
          <Button
            className="h-12 px-5 rounded-full shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform gap-2"
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
        </PopoverTrigger>

        <PopoverContent
          align="end"
          sideOffset={16}
          onInteractOutside={(e) => e.preventDefault()}
          className="w-[380px] p-0 border-none bg-transparent shadow-none"
        >
          <Card className="h-[500px] flex flex-col border border-border shadow-2xl rounded-xl overflow-hidden bg-[#1a1a1a]">
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
        </PopoverContent>
      </Popover>
    </div>
  );
}
