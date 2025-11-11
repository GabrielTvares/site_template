import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, BarChart3, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation();
  const particles = React.useMemo(() =>
    Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.2 + Math.random() * 0.3,
    })),
    [],
  );

  return (
    <section id="demonstração" className="py-32 bg-gradient-to-b from-petrol-dark/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration (harmonizado com Hero/Features) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden Glow - canto superior esquerdo */}
        <div className="absolute top-32 left-24 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent blur-[120px]" />

        {/* Deep Petrol Glow - canto inferior direito */}
        <div className="absolute bottom-32 right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-petrol/20 via-petrol-dark/10 to-transparent blur-[140px]" />

        {/* Partículas estáticas douradas */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/30 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-gradient-gold">Demonstração</span>
          </h2>
          <p className="text-[#C4D7E0] text-lg max-w-2xl mx-auto">
            Veja o poder da análise financeira em ação.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Video Placeholder */}
          <motion.div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <iframe
              width="820"
              height="461"
              src="https://www.youtube.com/embed/WkEUNpvfE54"
              title="Adverity Product Explainer Video 2024"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-[#C4D7E0] mb-6">
              Agende uma demonstração personalizada e veja como podemos ajudar seu negócio
            </p>
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold-dark text-black-soft font-semibold px-10 py-6 text-lg rounded-xl shadow-gold hover:scale-105 transition-all duration-300"
            >
              Agendar Demonstração
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
