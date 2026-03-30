import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ramesh", business: "Ramesh Textiles, Surat", quote: "Pehle sab WhatsApp pe hota tha. Ab ek jagah se sab manage karte hain. Bahut aasan hai!" },
  { name: "Priya", business: "Priya Boutique, Chennai", quote: "My follow-ups happen automatically now. I've closed 40% more orders this quarter." },
  { name: "Vikram", business: "Sharma Electronics, Jaipur", quote: "Invoice banane mein 2 minute lagte hain. Customers ko professional lagta hai." },
];

const SocialProof = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-accent">
        Trusted by 500+ small businesses across India
      </p>
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
        Hear from business owners like you
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border bg-card shadow-[var(--card-shadow)]">
            <CardContent className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
