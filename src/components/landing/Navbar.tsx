import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="text-xl font-bold text-primary">
        Vyapar CRM
      </Link>
      <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
      </div>
      <Link to="/dashboard">
        <Button size="sm" className="min-h-[44px]">Start Free</Button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
