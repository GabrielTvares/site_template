import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Differentials from "@/components/Differentials";
import Pricing from "@/components/pricing";
// import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Differentials />
      <Pricing />
      {/* <Demo /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
