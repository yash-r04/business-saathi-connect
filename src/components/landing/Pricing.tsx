import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect to get started",
    features: ["Up to 50 contacts", "Basic pipeline", "WhatsApp reminders", "1 user"],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "For growing businesses",
    features: ["Unlimited contacts", "Advanced automations", "GST invoices", "Team access (up to 5)", "Priority support"],
    cta: "Start Free Trial",
    featured: true,
  },
];

const Pricing = () => (
  <section className="border-t border-border bg-secondary py-16 md:py-24">
    <div className="container">
      <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
        Simple, honest pricing
      </h2>
      <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
        No hidden fees. No credit card required. Start free and upgrade when you're ready.
      </p>
      <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`border-border shadow-[var(--card-shadow)] ${plan.featured ? "ring-2 ring-primary" : ""}`}
          >
            <CardHeader className="pb-2 pt-6 px-6">
              {plan.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-4">
              <ul className="mb-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/dashboard">
                <Button variant={plan.featured ? "default" : "outline"} className="min-h-[48px] w-full">
                  {plan.cta}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
