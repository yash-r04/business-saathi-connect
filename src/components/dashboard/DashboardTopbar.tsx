import { Search, Globe, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "HI", label: "हिन्दी", flag: "🇮🇳" },
  { code: "TA", label: "தமிழ்", flag: "🇮🇳" },
  { code: "TE", label: "తెలుగు", flag: "🇮🇳" },
  { code: "KN", label: "ಕನ್ನಡ", flag: "🇮🇳" },
];

const DashboardTopbar = () => (
  <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-4 md:px-6">
    <SidebarTrigger className="min-h-[48px] min-w-[48px]" />
    <div className="relative flex-1 max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search contacts, deals..."
        className="h-11 pl-9 bg-secondary border-0"
      />
    </div>
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="min-h-[48px] gap-2 text-sm">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">EN</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} className="min-h-[44px] gap-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]">
        <UserCircle className="h-6 w-6 text-muted-foreground" />
      </Button>
    </div>
  </header>
);

export default DashboardTopbar;
