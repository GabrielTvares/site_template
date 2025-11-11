import React from 'react';
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafael Nunes",
    role: "CEO",
    company: "Extreme Soluções",
    content: "A plataforma Navi BI, foi fundamental para o aprimoramento da nossa gestão financeira na Extreme Soluções. Com o suporte da ferramenta, conseguimos organizar melhor nossos indicadores, interpretar os resultados com mais clareza e tomar decisões mais assertivas.\n\nA praticidade da plataforma, aliada à metodologia aplicada, nos permitiu transformar dados em estratégia, trazendo mais controle, eficiência e inteligência para o nosso negócio.",
    rating: 5,
  },
  {
    name: "Renê",
    role: "CEO",
    company: "Ava Growth",
    content: "Recentemente, precisei tomar uma decisão estratégica que teria um impacto significativo no custo fixo da Ava Growth. Com o apoio do Maycon Pires e das análises do sistema Navi BI, consegui transformar uma incerteza em uma decisão segura e fundamentada.\n\nOs números e projeções apresentados trouxeram clareza e confiança para dar esse passo importante no crescimento da empresa. Hoje vejo o Navi BI como uma ferramenta essencial para decisões estratégicas baseadas em dados reais.",
    rating: 5,
  },
  {
    name: "Anderson Silva",
    role: "CEO",
    company: "Kabyte",
    content: "Conectamos o NAVI BI ao nosso ERP Bom Controle e passei a ter um dashboard vivo do negócio: entradas, saídas e andamento do mês em tempo real.\n\nParei de caçar números e perde tempo em planilhas; hoje decido rápido e com confiança. É BI de verdade: simples, direto e orientado a resultado.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const particles = React.useMemo(() =>
    Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
      opacity: 0.3 + Math.random() * 0.4,
      blur: `${Math.random() * 3}px`,
    })),
    [],
  );

  return (
    <section 
      id="depoimentos" 
      className="py-20 md:py-32 bg-gradient-to-b from-background via-petrol-dark/10 to-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden Glow - top right */}
        <div className="absolute top-20 right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-gold/8 via-gold/4 to-transparent blur-[100px]" />
        
        {/* Petrol Glow - bottom left */}
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-petrol/15 via-petrol-dark/8 to-transparent blur-[120px]" />
        
        {/* Floating golden particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gold animate-float ${
              i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'
            }`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              opacity: p.opacity,
              filter: `blur(${p.blur})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-[#C4D7E0] max-w-2xl mx-auto">
            Conheça as experiências de quem já transformou seus dados em resultados concretos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-petrol-dark/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold hover:transform hover:scale-[1.02]">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-gold" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 relative z-10 whitespace-pre-line">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-petrol/20 flex items-center justify-center border border-gold/20">
                    <span className="text-gold font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#C4D7E0] text-sm">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-[#C4D7E0] text-lg mb-4">
            Junte-se a centenas de empresas que já transformaram seus dados em decisões inteligentes
          </p>
          {/* <div className="flex flex-wrap gap-6 justify-center items-center"> */}
            {/* <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">500+</p>
              <p className="text-[#C4D7E0] text-sm">Clientes Ativos</p>
            </div> */}
            {/* <div className="w-px h-12 bg-gold/20" /> */}
            {/* <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">98%</p>
              <p className="text-[#C4D7E0] text-sm">Satisfação</p>
            </div> */}
            {/* <div className="w-px h-12 bg-gold/20" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">40%</p>
              <p className="text-[#C4D7E0] text-sm">Aumento Médio em Eficiência</p>
            </div> */}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
