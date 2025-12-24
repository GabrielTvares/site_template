import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/foguete.jpeg";
import naviLogo from "@/assets/logo_navi_vetorizada_branca_bi_260x120.svg";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const offsetY = useParallax();

  return (
  <section className="relative flex items-center justify-center overflow-hidden hero-section lg:min-h-[140vh] xl:min-h-[196vh]" style={{ minHeight: '140vh' }}>
      {/* Background Image with Overlay - Otimizado para Mobile */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: offsetY * 0.5,
          // Melhora rendering em mobile
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/90 via-slate-premium/80 to-background" />
      
      {/* Animated Particles - Reduzido para mobile (performance) */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 10}s`,
              opacity: 0.25 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-foreground">A Consultoria</span>
          <br />
          <span className="text-gradient-gold">de Negócios Ágil</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 md:mb-12 font-inter font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Nosso propósito é Escalar Pessoas e Negócios
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black-soft font-semibold px-8 py-6 text-lg rounded-xl shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-glow group"
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Demonstração
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button> */}
          
            <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            >
            Conhecer
            </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { value: "+40", label: "Projetos" },
            { value: "+50", label: "Clientes" },
            { value: "+10 Anos", label: "Experiência em Liderança" },
            { value: "+5000 horas", label: "Consultoria" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl flex flex-col justify-center h-full bg-slate-dark/50">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
