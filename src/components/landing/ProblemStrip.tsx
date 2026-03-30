import { Clock, MessageSquare, EyeOff } from "lucide-react";

const problems = [
  { icon: Clock, title: "Missed follow-ups", description: "Customers slip through the cracks when you're busy running the shop." },
  { icon: MessageSquare, title: "WhatsApp chaos", description: "Important orders buried in 200+ unread messages. Sound familiar?" },
  { icon: EyeOff, title: "No visibility on sales", description: "You don't know what's closing this week until it doesn't." },
];

const ProblemStrip = () => (
  <section className="border-b border-border bg-secondary py-16 md:py-20">
    <div className="container">
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
        Running a business shouldn't feel this hard
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {problems.map((p) => (
          <div key={p.title} className="fade-in flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
              <p.icon className="h-7 w-7 text-destructive" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemStrip;
