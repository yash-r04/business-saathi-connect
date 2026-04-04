import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Kanban,
  Zap,
  MessageSquare,
  Settings,
  FileText,
  Sparkles,
  TrendingUp,
  Award,
  Mails,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  //{ title: "Contacts", url: "/dashboard/contacts", icon: Users },
  { title: "Inbox", url: "/dashboard/inbox", icon: Mails },
  { title: "Invoices", url: "/dashboard/invoices", icon: FileText },
  { title: "Pipeline", url: "/dashboard/pipeline", icon: Kanban },
  { title: "Automations", url: "/dashboard/automations", icon: Zap },
  //{ title: "Messages", url: "/dashboard/messages", icon: MessageSquare },
  { title: "AI Campaigns", url: "/dashboard/campaigns", icon: Sparkles },
  //{ title: "History", url: "/dashboard/campaign-history", icon: TrendingUp },
  { title: "Government Schemes", url: "/dashboard/government-schemes", icon: Award },
  //{ title: "Settings", url: "/dashboard/settings", icon: Settings },
];

const DashboardSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="flex h-16 items-center px-4">
          {!collapsed && (
            <Link to="/" className="text-lg font-bold text-sidebar-primary">
              Vyapar CRM
            </Link>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors min-h-[48px] ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        }`}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
