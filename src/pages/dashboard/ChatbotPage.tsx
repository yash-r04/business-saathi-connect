import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const ChatbotPage = () => {

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi 👋 I'm Vyapara AI. How can I help your business today?",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMsg: Message = {
      text: input,
      sender: "user"
    };

    setMessages((prev) => [
      ...prev,
      userMsg
    ]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {

      const res = await fetch(
        "http://localhost:5000/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
  messages: [
    ...messages,
    userMsg
  ]
})
        }
      );

      const data = await res.json();

      const botMsg: Message = {
        text: data.reply,
        sender: "bot"
      };

      setMessages((prev) => [
        ...prev,
        botMsg
      ]);

    } catch (err) {

      const errorMsg: Message = {
        text:
          "Backend connection failed 😵",
        sender: "bot"
      };

      setMessages((prev) => [
        ...prev,
        errorMsg
      ]);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">

      {/* CHAT AREA */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4">

        {messages.map((msg, i) => (

          <div
            key={i}
            className={`max-w-xs rounded-xl px-4 py-3 text-sm shadow-sm ${
              msg.sender === "user"
                ? "ml-auto bg-primary text-white"
                : "bg-secondary"
            }`}
          >
            {msg.text}
          </div>

        ))}

        {loading && (

          <div className="max-w-xs rounded-xl bg-secondary px-4 py-3 text-sm text-muted-foreground">
            Vyapara AI is thinking...
          </div>

        )}

      </div>

      {/* INPUT AREA */}
      <div className="flex gap-2 border-t p-3">

        <Input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask about invoices, payments, analytics..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <Button onClick={handleSend}>
          Send
        </Button>

      </div>
    </div>
  );
};

export default ChatbotPage;