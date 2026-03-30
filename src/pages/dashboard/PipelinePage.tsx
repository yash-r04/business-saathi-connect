import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { formatINR } from "@/lib/format";

interface Deal {
  name: string;
  business: string;
  value: number;
  overdue?: boolean;
  daysInStage: number;
}

interface Stage {
  title: string;
  color: string;
  borderColor: string;
  deals: Deal[];
}

const stages: Stage[] = [
  {
    title: "New Lead",
    color: "bg-blue-100 text-blue-700",
    borderColor: "border-t-blue-500",
    deals: [
      { name: "Patel Hardware", business: "Ahmedabad", value: 95000, daysInStage: 1 },
      { name: "Arora Garments", business: "Ludhiana", value: 60000, daysInStage: 3 },
    ],
  },
  {
    title: "Contacted",
    color: "bg-accent/20 text-accent-foreground",
    borderColor: "border-t-accent",
    deals: [
      { name: "Priya Boutique", business: "Chennai", value: 32000, daysInStage: 4 },
      { name: "Joshi Traders", business: "Pune", value: 44000, daysInStage: 2 },
    ],
  },
  {
    title: "Proposal Sent",
    color: "bg-primary/10 text-primary",
    borderColor: "border-t-primary",
    deals: [
      { name: "Anita Sharma", business: "Sharma Textiles", value: 125000, daysInStage: 5 },
      { name: "Vikram Singh", business: "Singh Motors", value: 175000, daysInStage: 7 },
    ],
  },
  {
    title: "Payment Follow-up",
    color: "bg-destructive/10 text-destructive",
    borderColor: "border-t-destructive",
    deals: [
      { name: "Rajesh Kumar", business: "Kumar Electronics", value: 48000, overdue: true, daysInStage: 12 },
      { name: "Gupta Supplies", business: "Delhi", value: 72000, overdue: true, daysInStage: 9 },
    ],
  },
  {
    title: "Won",
    color: "bg-emerald-100 text-emerald-700",
    borderColor: "border-t-emerald-500",
    deals: [
      { name: "Meena Textiles", business: "Jaipur", value: 210000, daysInStage: 0 },
    ],
  },
];

const PipelinePage = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Pipeline</h1>
      <Button className="min-h-[48px] gap-2">
        <Plus className="h-5 w-5" />
        <span className="hidden sm:inline">Add Deal</span>
      </Button>
    </div>

    {/* Mobile: stacked cards; Desktop: horizontal columns */}
    <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
      {stages.map((stage) => (
        <div key={stage.title} className="min-w-[260px] flex-shrink-0 md:min-w-0">
          <Card className={`border-t-4 ${stage.borderColor} border-border shadow-[var(--card-shadow)]`}>
            <CardHeader className="pb-2 px-3 pt-3">
              <CardTitle className="flex items-center justify-between text-sm">
                <span>{stage.title}</span>
                <Badge variant="secondary" className={stage.color}>
                  {stage.deals.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 px-3 pb-3">
              {stage.deals.map((deal) => (
                <div
                  key={deal.name}
                  className={`rounded-lg p-3 min-h-[48px] transition-colors cursor-pointer hover:shadow-md ${
                    deal.overdue
                      ? "bg-destructive/5 border border-destructive/20"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  <p className="text-sm font-medium text-foreground">{deal.name}</p>
                  <p className="text-xs text-muted-foreground">{deal.business}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">{formatINR(deal.value)}</span>
                    {deal.overdue && (
                      <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                        Overdue
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

export default PipelinePage;
