import { UserPlus, Bell, TrendingUp } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "1", title: "Add your customers", description: "Import from phone contacts or add manually — takes 2 minutes." },
  { icon: Bell, step: "2", title: "Set reminders & automations", description: "Schedule follow-ups, auto-send WhatsApp messages." },
  { icon: TrendingUp, step: "3", title: "Close more deals", description: "Track progress, send quotes, and grow your revenue." },
];

const HowItWorks = () => (
  <section className="border-t border-border bg-secondary py-16 md:py-24">
    <div className="container">
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
        How it works
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="fade-in relative flex flex-col items-center text-center">
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
            )}
            <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <s.icon className="h-7 w-7" />
            </div>
            <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Step {s.step}</span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
