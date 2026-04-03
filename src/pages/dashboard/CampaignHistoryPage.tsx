import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const campaignStats = [
  { label: "Campaigns Sent", value: "12", trend: "4 this month", trendUp: true },
  { label: "Total Reach", value: "284", trend: "12% avg open rate", trendUp: true },
  { label: "Revenue Attributed", value: "₹68K", trend: "from campaigns", trendUp: true },
];

const pastCampaigns = [
  {
    name: "Diwali Sale — Cotton 20% Off",
    meta: "WhatsApp · Oct 28 · All contacts",
    reached: 47,
    replyRate: "14%",
    variant: "green" as const,
  },
  {
    name: "New Silk Collection Launch",
    meta: "Instagram + WhatsApp · Oct 15 · All contacts",
    reached: 47,
    replyRate: "9%",
    variant: "amber" as const,
  },
  {
    name: "Win-Back: Inactive Customers",
    meta: "WhatsApp · Oct 5 · 18 inactive",
    reached: 18,
    replyRate: "22%",
    variant: "green" as const,
  },
  {
    name: "Navratri Ethnic Fabric Special",
    meta: "WhatsApp · Sep 20 · High value customers",
    reached: 11,
    replyRate: "18%",
    variant: "blue" as const,
  },
  {
    name: "Summer Collection Launch",
    meta: "Instagram · Sep 5 · All contacts",
    reached: 47,
    replyRate: "11%",
    variant: "amber" as const,
  },
  {
    name: "Flash Sale — 48 Hours",
    meta: "WhatsApp · Aug 25 · Recent buyers",
    reached: 31,
    replyRate: "24%",
    variant: "green" as const,
  },
];

const badgeVariants = {
  green: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
};

const CampaignHistoryPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Campaign History</h1>
        <p className="text-sm text-muted-foreground">Track performance of your marketing campaigns</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {campaignStats.map((stat, idx) => (
          <Card key={idx} className="border-border shadow-[var(--card-shadow)]">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className={`text-xs font-medium ${stat.trendUp ? "text-emerald-600" : "text-destructive"}`}>
                  {stat.trendUp && "↑ "}
                  {stat.trend}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border shadow-[var(--card-shadow)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Past Campaigns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pastCampaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.meta}</p>
                </div>

                <div className="flex flex-col items-end gap-2 sm:gap-3">
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">{campaign.reached}</p>
                    <p className="text-xs text-muted-foreground font-mono">reached</p>
                  </div>

                  <Badge className={badgeVariants[campaign.variant]}>
                    {campaign.replyRate} replied
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignHistoryPage;
