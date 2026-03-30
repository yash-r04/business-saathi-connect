const Footer = () => (
  <footer className="border-t border-border bg-foreground py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-bold text-background">Vyapar CRM</h3>
          <p className="text-sm text-background/60">
            The simplest CRM for Indian small businesses.
          </p>
          <p className="mt-4 text-sm text-background/60">Made in India 🇮🇳</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-background/80">Product</h4>
          <ul className="space-y-2 text-sm text-background/50">
            <li><a href="#" className="hover:text-background/80 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-background/80 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-background/80 transition-colors">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-background/80">Support</h4>
          <ul className="space-y-2 text-sm text-background/50">
            <li><a href="#" className="hover:text-background/80 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-background/80 transition-colors">WhatsApp Support</a></li>
            <li><a href="#" className="hover:text-background/80 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-background/80">Legal</h4>
          <ul className="space-y-2 text-sm text-background/50">
            <li><a href="#" className="hover:text-background/80 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-background/80 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/40">
        © 2026 Vyapar CRM. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
