import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Search, MessageSquare, Phone } from "lucide-react";

const conversations = [
  { id: 1, name: "Anita Sharma", lastMessage: "Please send the updated quotation", time: "10 min ago", unread: 2, channel: "whatsapp" as const },
  { id: 2, name: "Rajesh Kumar", lastMessage: "Payment will be done by Friday", time: "1 hr ago", unread: 0, channel: "whatsapp" as const },
  { id: 3, name: "Suresh Patel", lastMessage: "Can you visit our shop tomorrow?", time: "2 hr ago", unread: 1, channel: "sms" as const },
  { id: 4, name: "Priya Menon", lastMessage: "Thanks for the catalogue!", time: "Yesterday", unread: 0, channel: "whatsapp" as const },
  { id: 5, name: "Vikram Singh", lastMessage: "Need 50 units by next week", time: "Yesterday", unread: 0, channel: "sms" as const },
];

const MessagesPage = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Messages</h1>
      <Button className="min-h-[48px] gap-2">
        <Send className="h-5 w-5" />
        <span className="hidden sm:inline">New Message</span>
      </Button>
    </div>

    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search messages..." className="h-11 pl-9 bg-secondary border-0" />
    </div>

    <div className="space-y-2">
      {conversations.map((conv) => (
        <Card
          key={conv.id}
          className={`border-border shadow-[var(--card-shadow)] cursor-pointer transition-colors hover:bg-secondary/50 ${
            conv.unread > 0 ? "border-l-4 border-l-primary" : ""
          }`}
        >
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {conv.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className={`text-sm truncate ${conv.unread > 0 ? "font-semibold text-foreground" : "font-medium text-foreground"}`}>
                  {conv.name}
                </p>
                <span className="text-[10px] text-muted-foreground shrink-0 ml-2">{conv.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMessage}</p>
              <div className="mt-1 flex items-center gap-2">
                {conv.channel === "whatsapp" ? (
                  <MessageSquare className="h-3 w-3 text-emerald-600" />
                ) : (
                  <Phone className="h-3 w-3 text-primary" />
                )}
                <span className="text-[10px] text-muted-foreground capitalize">{conv.channel}</span>
              </div>
            </div>
            {conv.unread > 0 && (
              <Badge className="shrink-0 h-5 w-5 items-center justify-center rounded-full p-0 text-[10px]">
                {conv.unread}
              </Badge>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MessagesPage;
