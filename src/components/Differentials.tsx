import React from 'react';
import { Check, Star, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Differentials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const particles = React.useMemo(() =>
    Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.2 + Math.random() * 0.3,
    })),
    [],
  );

  const differentials = [
    {
      icon: Star,
      title: "Mais do que números — clareza para crescer",
      description: "Com dashboards inteligentes e consultoria especializada, ajudamos sua empresa a enxergar o que realmente importa."
    },
    {
      icon: Award,
      title: "Foco no Estratégico",
      description: "Pare de fazer relatórios manuais e tenha tempo para focar em analisar e tomar decisões lucrativas."
    },
    {
      icon: Zap,
      title: "Evolução Contínua",
      description: "Receba constantemente novos dashboards e relatórios  com algoritmos de análise financeira."
    },
    {
      icon: Check,
      title: "Expertise Financeira",
      description: "Tenha acesso as análises financeiras criadas por especialistas."
    }
  ];


  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-petrol-dark/20 to-background relative overflow-hidden" ref={ref}>
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
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Por que escolher o <span className="text-gradient-gold">Navi BI?</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Diferenciais que fazem a diferença no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 sm:p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:scale-105"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-black-soft" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-block glass-effect px-8 py-4 rounded-full border border-gold/30">
            <p className="text-gold font-semibold">
              ✨ Você não precisa mais decidir no escuro — experimente o Navi BI hoje! ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
