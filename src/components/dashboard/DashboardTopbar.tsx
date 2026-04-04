import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Globe, UserCircle, HistoryIcon, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "kn", label: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  //{ code: "ta", label: "தமிழ்", flag: "🇮🇳" },
  //{ code: "te", label: "తెలుగు", flag: "🇮🇳" },
];

const DashboardTopbar = () => {
  const { t, i18n } = useTranslation();
const navigate = useNavigate();
  return (
    <>
      <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-4 md:px-6 relative">
        <SidebarTrigger className="min-h-[48px] min-w-[48px]" />

        {/* SEARCH */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("search")}
            className="h-11 pl-9 bg-secondary border-0"
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex items-center gap-2">
          
          {/* 🌍 LANGUAGE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="min-h-[48px] gap-2 text-sm">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{i18n.language}</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
  key={lang.code}
  onClick={() => i18n.changeLanguage(lang.code)}
  className="min-h-[44px] gap-2 cursor-pointer"
>
  <span>{lang.flag}</span>
  <span>{lang.label}</span>
</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 🕘 HISTORY */}
          <Button
  variant="link"
  size="icon"
  onClick={() => navigate("/dashboard/campaign-history")}
  className="min-h-[48px] min-w-[48px]"
>
  <HistoryIcon className="h-6 w-6 text-muted-foreground" />
</Button>

          {/* ⚙️ SETTINGS */}
          <Button
  variant="link"
  size="icon"
  onClick={() => navigate("/dashboard/settings")}
  className="min-h-[48px] min-w-[48px]"
>
  <Settings className="h-6 w-6 text-muted-foreground" />
</Button>

          {/* 👤 PROFILE */}
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="link" size="icon" className="min-h-[48px] min-w-[48px]">
      <UserCircle className="h-6 w-6 text-muted-foreground" />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
      My Profile
    </DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem className="text-red-500">
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>

      </header>

    </>
  );
};

export default DashboardTopbar;