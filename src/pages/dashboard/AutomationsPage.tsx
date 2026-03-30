import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Zap, Clock, MessageSquare, Phone } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const automations = [
  {
    id: 1,
    name: "New lead welcome message",
    description: "Send a WhatsApp greeting when a new contact is added",
    trigger: "Contact added",
    action: "WhatsApp",
    icon: MessageSquare,
    active: true,
  },
  {
    id: 2,
    name: "Follow-up reminder (3 days)",
    description: "Remind to follow up if no contact in 3 days",
    trigger: "No activity for 3 days",
    action: "Notification",
    icon: Clock,
    active: true,
  },
  {
    id: 3,
    name: "Payment overdue alert",
    description: "Alert when a deal is in Payment Follow-up for 7+ days",
    trigger: "Stage duration > 7 days",
    action: "SMS + Notification",
    icon: Zap,
    active: false,
  },
  {
    id: 4,
    name: "Call reminder after quotation",
    description: "Schedule a call 2 days after sending a quotation",
    trigger: "Quotation sent",
    action: "Call reminder",
    icon: Phone,
    active: true,
  },
];

const AutomationsPage = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Automations</h1>
      <Button className="min-h-[48px] gap-2">
        <Plus className="h-5 w-5" />
        <span className="hidden sm:inline">New Automation</span>
      </Button>
    </div>

    <div className="space-y-3">
      {automations.map((auto) => (
        <Card key={auto.id} className="border-border shadow-[var(--card-shadow)]">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <auto.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm">{auto.name}</p>
              <p className="text-xs text-muted-foreground truncate">{auto.description}</p>
              <div className="mt-1 flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px]">{auto.trigger}</Badge>
                <span className="text-[10px] text-muted-foreground">→</span>
                <Badge variant="outline" className="text-[10px]">{auto.action}</Badge>
              </div>
            </div>
            <Switch defaultChecked={auto.active} className="shrink-0" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AutomationsPage;
