import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, Phone, MessageSquare, MoreHorizontal } from "lucide-react";
import { formatINR } from "@/lib/format";

const sampleContacts = [
  { id: 1, name: "Anita Sharma", business: "Sharma Textiles", phone: "+91 98765 43210", value: 125000, stage: "Proposal Sent", lastContact: "2 days ago" },
  { id: 2, name: "Rajesh Kumar", business: "Kumar Electronics", phone: "+91 87654 32109", value: 48000, stage: "Payment Follow-up", overdue: true, lastContact: "5 days ago" },
  { id: 3, name: "Priya Menon", business: "Priya Boutique", phone: "+91 76543 21098", value: 32000, stage: "Contacted", lastContact: "1 day ago" },
  { id: 4, name: "Suresh Patel", business: "Patel Hardware", phone: "+91 65432 10987", value: 95000, stage: "New Lead", lastContact: "Today" },
  { id: 5, name: "Meena Devi", business: "Meena Textiles", phone: "+91 54321 09876", value: 210000, stage: "Won", lastContact: "3 days ago" },
  { id: 6, name: "Vikram Singh", business: "Singh Motors", phone: "+91 43210 98765", value: 175000, stage: "Proposal Sent", lastContact: "1 week ago" },
];

const stageColor: Record<string, string> = {
  "New Lead": "bg-blue-100 text-blue-700",
  "Contacted": "bg-accent/20 text-accent-foreground",
  "Proposal Sent": "bg-primary/10 text-primary",
  "Payment Follow-up": "bg-destructive/10 text-destructive",
  "Won": "bg-emerald-100 text-emerald-700",
};

const ContactsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = sampleContacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.business.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Contacts</h1>
        <Button className="min-h-[48px] gap-2">
          <UserPlus className="h-5 w-5" />
          <span className="hidden sm:inline">Add Contact</span>
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name or business..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 pl-9 bg-secondary border-0"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((contact) => (
          <Card key={contact.id} className="border-border shadow-[var(--card-shadow)]">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {contact.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{contact.name}</p>
                <p className="text-xs text-muted-foreground truncate">{contact.business}</p>
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className={stageColor[contact.stage] || ""}>
                    {contact.stage}
                  </Badge>
                  <span className="text-xs font-medium text-foreground">{formatINR(contact.value)}</span>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
