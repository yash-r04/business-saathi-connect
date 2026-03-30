import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket } from "lucide-react";

const steps = [
  { id: "profile", label: "Complete your business profile" },
  { id: "contact", label: "Add your first contact" },
  { id: "pipeline", label: "Set up your sales pipeline" },
  { id: "automation", label: "Create a follow-up automation" },
];

const OnboardingChecklist = () => {
  const [completed, setCompleted] = useState<string[]>([]);
  const progress = Math.round((completed.length / steps.length) * 100);

  const toggle = (id: string) =>
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  if (completed.length === steps.length) return null;

  return (
    <Card className="border-border shadow-[var(--card-shadow)] mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Rocket className="h-5 w-5 text-accent" />
          Get Started
        </CardTitle>
        <div className="flex items-center gap-3 pt-1">
          <Progress value={progress} className="h-2 flex-1" />
          <span className="text-xs font-medium text-muted-foreground">
            {completed.length}/{steps.length}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {steps.map((step) => {
          const done = completed.includes(step.id);
          return (
            <button
              key={step.id}
              onClick={() => toggle(step.id)}
              className={`flex w-full items-center gap-3 rounded-lg p-3 min-h-[48px] text-left transition-colors ${
                done
                  ? "bg-primary/5 text-muted-foreground line-through"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              <Checkbox checked={done} className="pointer-events-none" />
              <span className="text-sm">{step.label}</span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OnboardingChecklist;
