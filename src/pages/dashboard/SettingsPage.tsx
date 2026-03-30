import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Globe, Bell, Building2, Save } from "lucide-react";

const SettingsPage = () => (
  <div className="space-y-6">
    <h1 className="text-xl font-bold text-foreground">Settings</h1>

    {/* Business Profile */}
    <Card className="border-border shadow-[var(--card-shadow)]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Building2 className="h-5 w-5 text-primary" />
          Business Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bizName">Business Name</Label>
          <Input id="bizName" defaultValue="My Business" className="h-11 bg-secondary border-0" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bizPhone">Phone Number</Label>
          <Input id="bizPhone" defaultValue="+91 98765 43210" className="h-11 bg-secondary border-0" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bizCity">City</Label>
          <Input id="bizCity" defaultValue="Mumbai" className="h-11 bg-secondary border-0" />
        </div>
        <Button className="min-h-[48px] gap-2 w-full sm:w-auto">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </CardContent>
    </Card>

    {/* Language */}
    <Card className="border-border shadow-[var(--card-shadow)]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Globe className="h-5 w-5 text-primary" />
          Language & Region
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between min-h-[48px]">
          <div>
            <p className="text-sm font-medium text-foreground">App Language</p>
            <p className="text-xs text-muted-foreground">English (EN)</p>
          </div>
          <Button variant="outline" size="sm" className="min-h-[48px]">Change</Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between min-h-[48px]">
          <div>
            <p className="text-sm font-medium text-foreground">Currency</p>
            <p className="text-xs text-muted-foreground">₹ Indian Rupee (INR)</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-0">Default</Badge>
        </div>
      </CardContent>
    </Card>

    {/* Notifications */}
    <Card className="border-border shadow-[var(--card-shadow)]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Bell className="h-5 w-5 text-primary" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { label: "Follow-up reminders", desc: "Get notified before scheduled follow-ups", defaultOn: true },
          { label: "Payment alerts", desc: "Alert when payments are overdue", defaultOn: true },
          { label: "New lead notifications", desc: "Notify when a new lead is added", defaultOn: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between min-h-[48px]">
            <div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
            <Switch defaultChecked={item.defaultOn} />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default SettingsPage;
