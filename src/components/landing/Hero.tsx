import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative overflow-hidden bg-primary py-20 md:py-32">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(185 62% 60% / 0.3) 0%, transparent 60%)" }} />
    </div>
    <div className="container relative">
      <div className="mx-auto max-w-3xl text-center fade-in-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90">
          🌐 Works in Hindi, Tamil, Telugu, Kannada & more
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl">
          Your Business, <br className="hidden md:block" />
          <span className="text-accent">Simplified.</span>
        </h1>
        <p className="mb-10 text-lg text-primary-foreground/80 md:text-xl">
          The CRM & automation tool built for Indian small businesses.
          <br className="hidden sm:block" />
          <span className="italic">Run your business in your language.</span>
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/dashboard">
            <Button variant="hero" size="lg" className="min-h-[52px] min-w-[180px] text-base">
              Start Free
            </Button>
          </Link>
          <Button variant="hero-outline" size="lg" className="min-h-[52px] min-w-[180px] border-primary-foreground/30 text-base text-primary-foreground hover:bg-primary-foreground/10">
            See Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
