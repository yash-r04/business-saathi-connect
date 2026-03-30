import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemStrip from "@/components/landing/ProblemStrip";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <ProblemStrip />
    <div id="features">
      <Features />
    </div>
    <HowItWorks />
    <div id="testimonials">
      <SocialProof />
    </div>
    <div id="pricing">
      <Pricing />
    </div>
    <Footer />
  </div>
);

export default Index;
