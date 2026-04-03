import { Routes, Route } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Phone, MessageSquare, ArrowRight, Clock } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import OnboardingChecklist from "@/components/dashboard/OnboardingChecklist";
import MobileBottomNav from "@/components/dashboard/MobileBottomNav";
import ContactsPage from "@/pages/dashboard/ContactsPage";
import PipelinePage from "@/pages/dashboard/PipelinePage";
import AutomationsPage from "@/pages/dashboard/AutomationsPage";
import MessagesPage from "@/pages/dashboard/MessagesPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import InvoicesPage from "@/pages/dashboard/Invoices";
import CampaignsPage from "@/pages/dashboard/CampaignsPage";
import CampaignHistoryPage from "@/pages/dashboard/CampaignHistoryPage";
import { formatINR } from "@/lib/format";

const followUps = [
  { name: "Anita Sharma", task: "Send quotation for bulk order", time: "10:00 AM", type: "call" as const },
  { name: "Rajesh Kumar", task: "Follow up on payment", time: "11:30 AM", type: "whatsapp" as const },
  { name: "Meena Textiles", task: "Share new catalogue", time: "2:00 PM", type: "whatsapp" as const },
  { name: "Suresh Metals", task: "Confirm delivery date", time: "4:00 PM", type: "call" as const },
];

const pipelineStages = [
  { name: "New Lead", count: 12, color: "bg-blue-100 text-blue-700" },
  { name: "Contacted", count: 8, color: "bg-accent/20 text-accent-foreground" },
  { name: "Proposal Sent", count: 5, color: "bg-primary/10 text-primary" },
  { name: "Payment Follow-up", count: 4, color: "bg-destructive/10 text-destructive", overdue: 2 },
  { name: "Won", count: 3, color: "bg-emerald-100 text-emerald-700" },
];

const activities = [
  { text: `Quotation sent to Anita Sharma — ${formatINR(48000)}`, time: "2 hours ago" },
  { text: "New lead: Patel Hardware, Ahmedabad", time: "3 hours ago" },
  { text: `Payment received from Krishna Stores — ${formatINR(24500)}`, time: "5 hours ago" },
  { text: "Reminder set for Meena Textiles follow-up", time: "Yesterday" },
];

const DashboardHome = () => (
  <>
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Good morning! ☀️</h1>
        <p className="text-sm text-muted-foreground">Here's what needs your attention today.</p>
      </div>
      <Button className="min-h-[48px] gap-2 shadow-md">
        <UserPlus className="h-5 w-5" />
        <span className="hidden sm:inline">Add Contact</span>
      </Button>
    </div>

    <OnboardingChecklist />

    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2 border-border shadow-[var(--card-shadow)]">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-5 w-5 text-accent" />
            Today's Follow-ups
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {followUps.map((f) => (
            <div key={f.name} className="flex items-center gap-3 rounded-lg bg-secondary p-3 min-h-[56px]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                {f.type === "call" ? (
                  <Phone className="h-4 w-4 text-primary" />
                ) : (
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{f.name}</p>
                <p className="text-xs text-muted-foreground truncate">{f.task}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{f.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border shadow-[var(--card-shadow)]">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-base">
            Pipeline
            <Button variant="ghost" size="sm" className="gap-1 text-xs text-primary">
              View all <ArrowRight className="h-3 w-3" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pipelineStages.map((stage) => (
            <div
              key={stage.name}
              className={`flex items-center justify-between rounded-lg p-3 min-h-[48px] ${
                stage.overdue ? "bg-destructive/5 border border-destructive/20" : "bg-secondary"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{stage.name}</span>
                {stage.overdue && (
                  <span className="text-[10px] font-semibold text-destructive">{stage.overdue} overdue</span>
                )}
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${stage.color}`}>{stage.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>

    <Card className="mt-6 border-border shadow-[var(--card-shadow)]">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <div className="flex-1">
                <p className="text-foreground">{a.text}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </>
);

const Dashboard = () => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <DashboardTopbar />
        <main className="flex-1 overflow-auto bg-background p-4 pb-20 md:p-6 md:pb-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="invoices" element={<InvoicesPage />} />
            <Route path="pipeline" element={<PipelinePage />} />
            <Route path="automations" element={<AutomationsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="campaign-history" element={<CampaignHistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
    <MobileBottomNav />
  </SidebarProvider>
);

export default Dashboard;
