import { Link, useLocation } from "react-router-dom";
import { Home, Users, Kanban, MessageSquare, Settings } from "lucide-react";

const tabs = [
  { label: "Home", url: "/dashboard", icon: Home },
  { label: "Contacts", url: "/dashboard/contacts", icon: Users },
  { label: "Pipeline", url: "/dashboard/pipeline", icon: Kanban },
  { label: "Messages", url: "/dashboard/messages", icon: MessageSquare },
  { label: "Settings", url: "/dashboard/settings", icon: Settings },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-around border-t border-border bg-card md:hidden">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.url;
        return (
          <Link
            key={tab.label}
            to={tab.url}
            className={`flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
