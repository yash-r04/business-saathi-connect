import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AIAssistantBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleAsk = () => {
    if (!query) return;

    navigate("/dashboard/chatbot", {
      state: { query },
    });
  };

  return (
    <div className="mb-6 rounded-xl border bg-secondary/50 p-4">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your business anything... 🤖"
          className="bg-background"
        />
        <Button onClick={handleAsk}>Ask</Button>
      </div>

      {/* Suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          "Show pending payments",
          "Top clients",
          "Create invoice",
        ].map((q) => (
          <button
            key={q}
            onClick={() =>
              navigate("/dashboard/chatbot", {
                state: { query: q },
              })
            }
            className="rounded-full bg-primary/10 px-3 py-1 text-xs hover:bg-primary/20"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIAssistantBar;