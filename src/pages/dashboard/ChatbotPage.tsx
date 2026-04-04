import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatbotPage = () => {
  const location = useLocation();
  const initialQuery = location.state?.query || "";

  const [messages, setMessages] = useState([
    { text: "Hi 👋 I'm your AI business assistant!", sender: "bot" },
  ]);

  const [input, setInput] = useState(initialQuery);

  const getBotResponse = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("payment")) {
      return "You have 3 pending payments 💸";
    }
    if (t.includes("clients")) {
      return "Top client: Meena Devi (₹2.1L)";
    }
    if (t.includes("invoice")) {
      return "I can help you create an invoice 🧾";
    }

    return "Try asking about payments, clients, or invoices 🤖";
  };

  // 🔥 auto-trigger when coming from AI bar
  useEffect(() => {
    if (initialQuery) {
      const userMsg = { text: initialQuery, sender: "user" };
      const botMsg = { text: getBotResponse(initialQuery), sender: "bot" };

      setMessages((prev) => [...prev, userMsg, botMsg]);
    }
  }, [initialQuery]);

  const handleSend = () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    const botMsg = { text: getBotResponse(input), sender: "bot" };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="flex h-full flex-col">

      {/* CHAT */}
      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs rounded-lg p-2 text-sm ${
              msg.sender === "user"
                ? "ml-auto bg-primary text-white"
                : "bg-secondary"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2 border-t p-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
};

export default ChatbotPage;