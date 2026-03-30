import { Card, CardContent } from "@/components/ui/card";

const features = [
  { emoji: "🗣️", title: "Talk in your language", description: "Voice & text input in Hindi, Tamil, Telugu, Kannada and more — powered by Sarvam AI." },
  { emoji: "📋", title: "Auto follow-up with customers", description: "Set it once. WhatsApp & SMS reminders go out automatically. Never miss a deal." },
  { emoji: "📊", title: "Simple sales pipeline", description: "See every deal at a glance. Drag, drop, close. No MBA required." },
  { emoji: "🧾", title: "Quotes & invoices in one click", description: "Professional GST invoices & quotations your customers will trust. In seconds." },
];

const Features = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
        Everything you need to grow
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
        No complex setup. No training needed. Just tools that work the way you do.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title} className="border-border bg-card shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]">
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 text-3xl">{f.emoji}</div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
