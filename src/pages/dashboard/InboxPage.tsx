import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Send } from "lucide-react";
import { formatINR } from "@/lib/format";

const sampleContacts = [
  { id: 1, name: "Anita Sharma", business: "Sharma Textiles", value: 125000, stage: "Proposal Sent" },
  { id: 2, name: "Rajesh Kumar", business: "Kumar Electronics", value: 48000, stage: "Payment Follow-up" },
  { id: 3, name: "Priya Menon", business: "Priya Boutique", value: 32000, stage: "Contacted" },
  { id: 4, name: "Suresh Patel", business: "Patel Hardware", value: 95000, stage: "New Lead" },
  { id: 5, name: "Meena Devi", business: "Meena Textiles", value: 210000, stage: "Won" },
  { id: 6, name: "Vikram Singh", business: "Singh Motors", value: 175000, stage: "Proposal Sent" },
];

const conversations = [
  { name: "Anita Sharma", lastMessage: "Please send the updated quotation", time: "10 min ago", unread: 2 },
  { name: "Rajesh Kumar", lastMessage: "Payment will be done by Friday", time: "1 hr ago", unread: 0 },
  { name: "Suresh Patel", lastMessage: "Can you visit our shop tomorrow?", time: "2 hr ago", unread: 1 },
  { name: "Priya Menon", lastMessage: "Thanks for the catalogue!", time: "Yesterday", unread: 0 },
  { name: "Vikram Singh", lastMessage: "Need 50 units by next week", time: "Yesterday", unread: 0 },
];

const stageColor: Record<string, string> = {
  "New Lead": "bg-blue-100 text-blue-700",
  "Contacted": "bg-accent/20 text-accent-foreground",
  "Proposal Sent": "bg-primary/10 text-primary",
  "Payment Follow-up": "bg-destructive/10 text-destructive",
  "Won": "bg-emerald-100 text-emerald-700",
};
const mergedData = sampleContacts.map((contact) => {
  const convo = conversations.find((c) => c.name === contact.name);

  return {
    ...contact,
    lastMessage: convo?.lastMessage || "No messages yet",
    time: convo?.time || "",
    unread: convo?.unread || 0,
  };
});
const InboxPage = () => {
  const [selected, setSelected] = useState(mergedData[0]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const filtered = mergedData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-80px)] border rounded-xl overflow-hidden">
      
      {/* LEFT PANEL */}
      <div className="w-1/3 border-r bg-background">
        
        <div className="p-3">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-secondary border-0"
          />
        </div>

        <div className="space-y-1 px-2">
          {filtered.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelected(item)}
              className={`cursor-pointer border-0 shadow-none hover:bg-secondary ${
                selected.id === item.id ? "bg-secondary" : ""
              }`}
            >
              <CardContent className="p-3 flex gap-3 items-center">
                
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium truncate">
                      {item.name}
                    </p>
                    <span className="text-[10px] text-muted-foreground">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground truncate">
                    {item.lastMessage}
                  </p>

                  <Badge
                    className={`mt-1 text-[10px] ${
                      stageColor[item.stage]
                    }`}
                  >
                    {item.stage}
                  </Badge>
                </div>

                {item.unread > 0 && (
                  <Badge className="h-5 w-5 p-0 text-[10px] flex items-center justify-center">
                    {item.unread}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <p className="font-medium">{selected.name}</p>
            <p className="text-xs text-muted-foreground">
              {selected.business}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium">
              {formatINR(selected.value)}
            </p>
            <Badge className={stageColor[selected.stage]}>
              {selected.stage}
            </Badge>
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="bg-secondary p-2 rounded-lg text-sm w-fit">
            {selected.lastMessage}
          </div>
        </div>

        {/* INPUT */}
        <div className="p-3 border-t flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;