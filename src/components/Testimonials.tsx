import React from 'react';
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import client logos
import logoAvaGrowth from "@/assets/logo-avagrowth.png";
import logoBrianezzi from "@/assets/logo-brianezzi.png";
import logoDualcon from "@/assets/logo-dualcon.png";
import logoInserti from "@/assets/logo-inserti.png";
import logoJllNetwork from "@/assets/logo-jllnetwork.png";
import logoNeobits from "@/assets/logo-neobits.png";
import logoNual from "@/assets/logo-nual.png";
import logoSlTech from "@/assets/logo-sltech.png";
import fotoVinicius from "@/assets/vinicius.webp";
import fotoRodolfo from "@/assets/rodolfo.avif";
import fotoBrianezzi from "@/assets/brianezzi.jpeg";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface ClientLogo {
  name: string;
  logo?: string; // Path to logo image
}

const testimonials: Testimonial[] = [
 {
    name: "Rodolfo",
    role: "CEO",
    company: "DualCon",
    content: "A Consultoria e Mentoria ExA é fantástica. O Maycon Pires, que conduz a Mentoria, o cara é fera. Em poucas mentorias já percebemos a diferença. Time mais engajado, mais focado e o mais importante MAIS ESTRATÉGICO e se tornando cada vez mais ÁGIL. Não perco nenhuma mentoria, mesmo aquelas nas sextas-feiras no final do dia. :) Maycon, de coração, o nosso MUITO OBRIGADO.",
    rating: 5,
    image: fotoRodolfo,
  },
  {
    name: "Vinicius",
    role: "CEO",
    company: "SITS Tecnologia",
    content: "A mentoria Executive ExA me abriu os olhos para vários vícios de trabalho que não eram produtivos e me acorrentavam ao chão, impedindo o meu crescimento. Percebi que meu time não estava 100% alinhado comigo e com a empresa, e a mentoria me deu ferramentas para melhorar e transformar meu time em uma equipe mais produtiva e parceira.",
    rating: 5,
    image: fotoVinicius,
  },
  {
    name: "André Brianezi",
    role: "CEO e CTO",
    company: "Brianezi",
    content: "Propiciou um crescimento estruturado na empresa. É o melhor ponto de partida para quem quer crescer.",
    rating: 5,
    image: fotoBrianezzi,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Client logos configuration
  const clientLogos: ClientLogo[] = [
    { name: "Ava Growth", logo: logoAvaGrowth },
    { name: "Brianezzi", logo: logoBrianezzi },
    { name: "Dualcon", logo: logoDualcon },
    { name: "Inserti", logo: logoInserti },
    { name: "JLL Network", logo: logoJllNetwork },
    { name: "Neobits", logo: logoNeobits },
    { name: "Nual", logo: logoNual },
    { name: "SL Tech", logo: logoSlTech },
  ];
  
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
      className="py-20 md:py-32 bg-gradient-to-b from-background via-slate-dark/10 to-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden Glow - top right */}
        <div className="absolute top-20 right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-gold/8 via-gold/4 to-transparent blur-[100px]" />
        
        {/* Petrol Glow - bottom left */}
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-slate-premium/15 via-slate-dark/8 to-transparent blur-[120px]" />
        
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

        {/* Testimonials Grid - Text Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group w-full"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
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
                  {/* Avatar - Image or Initial */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-slate-premium/20 flex items-center justify-center border border-gold/20 overflow-hidden">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gold font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
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

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mx-auto mt-8 md:mt-12">
          {/* Video Card 1 - Rodolfo Wittman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group w-full"
          >
            <div className="relative h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
              {/* Video Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tnoI481TB3Q"
                  title="Depoimento Rodolfo Wittman - CEO DualCon"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
              
              {/* Author Info */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-slate-premium/20 flex items-center justify-center border border-gold/20 overflow-hidden">
                    <img 
                      src={fotoRodolfo} 
                      alt="Rodolfo Wittman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      Rodolfo Wittman
                    </h4>
                    <p className="text-[#C4D7E0] text-sm">
                      CEO • DualCon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Card 2 - Marc Resende */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group w-full"
          >
            <div className="relative h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
              {/* Video Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UJCAk1FxFW0"
                  title="Depoimento - Marc Resende - MSP Tecnologia"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
              
              {/* Author Info */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-slate-premium/20 flex items-center justify-center border border-gold/20">
                    <span className="text-gold font-bold text-lg">M</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      Marc Resende
                    </h4>
                    <p className="text-[#C4D7E0] text-sm">
                      Executivo • MSP Tecnologia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
            Empresas que foram Turbinadas
          </h3>
          <p className="text-[#C4D7E0]/80 text-base md:text-lg">
            Organizações que alcançaram resultados extraordinários
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative overflow-hidden py-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Carousel Container */}
            <div className="flex animate-scroll-infinite">
              {/* First set of logos */}
              <div className="flex items-center gap-12 md:gap-16 px-8">
                {clientLogos.map((client, i) => (
                  <div
                    key={`logo-1-${i}`}
                    className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-gradient-to-br from-slate-dark/50 to-slate-premium/30 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 flex items-center justify-center group hover:scale-105 px-4"
                  >
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center w-full">
                        <div className="text-gold/60 group-hover:text-gold/80 transition-colors text-xs md:text-sm font-semibold leading-tight">
                          {client.name}
                        </div>
                        <div className="text-[10px] text-white/40 mt-1">
                          Cliente Premium
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 md:gap-16 px-8">
                {clientLogos.map((client, i) => (
                  <div
                    key={`logo-2-${i}`}
                    className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-gradient-to-br from-slate-dark/50 to-slate-premium/30 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 flex items-center justify-center group hover:scale-105 px-4"
                  >
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center w-full">
                        <div className="text-gold/60 group-hover:text-gold/80 transition-colors text-xs md:text-sm font-semibold leading-tight">
                          {client.name}
                        </div>
                        <div className="text-[10px] text-white/40 mt-1">
                          Cliente Premium
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-[#C4D7E0]/80 text-base md:text-lg mt-8 font-medium">
            Consultoria empresarial premium para organizações de alto desempenho
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
