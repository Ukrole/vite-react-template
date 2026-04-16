import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FEIFEI_TRIGGER = "宝宝我是菲菲";

const SUGGESTIONS = [
  "What are your research interests?",
  "Tell me about your publications.",
  "What projects have you worked on?",
  "What awards have you received?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState<"default" | "feifei">("default");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    // Secret trigger: activate feifei mode
    if (trimmed === FEIFEI_TRIGGER && mode === "default") {
      setInput("");
      const newSessionId = crypto.randomUUID();
      setSessionId(newSessionId);
      setMode("feifei");
      setMessages([]);
      return;
    }

    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, mode, sessionId }),
      });
      const data = await res.json() as { reply?: string; error?: string };
      setMessages([...newMessages, {
        role: "assistant",
        content: data.reply ?? data.error ?? "Sorry, something went wrong.",
      }]);
    } catch {
      setMessages([...newMessages, {
        role: "assistant",
        content: mode === "feifei" ? "网络好像断了，稍后再试试？" : "Network error. Please try again.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const placeholder = mode === "feifei" ? "说吧，我在听…" : "Ask a question…";
  const welcomeText = mode === "feifei"
    ? "宝宝我在呢~有什么想说的，慢慢说。"
    : "Hi! I'm Zikang's AI assistant. Ask me anything about his research, projects, or background.";

  return (
    <div className="chatbot-section">
      <div className="chatbot-header" onClick={() => setOpen((o) => !o)}>
        <div className="chatbot-header-left">
          <span className="chatbot-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </span>
          <span className="chatbot-title">Ask about Zikang</span>
          <span className="chatbot-badge">AI</span>
        </div>
        <svg
          className={`chatbot-chevron${open ? " open" : ""}`}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {open && (
        <div className="chatbot-body">
          <div className="chatbot-messages">
            <div className="chat-bubble assistant">
              <span>{welcomeText}</span>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.role}`}>
                <span>{m.content}</span>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble assistant">
                <span className="chat-typing">
                  <span /><span /><span />
                </span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 0 && !loading && mode === "default" && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input-row">
            <input
              ref={inputRef}
              className="chatbot-input"
              type="text"
              placeholder={placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              disabled={loading}
            />
            <button
              className="chatbot-send"
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
