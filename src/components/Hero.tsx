import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const offsetY = useParallax();

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
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
      <div className="absolute inset-0 bg-gradient-to-b from-petrol-dark/90 via-petrol/80 to-background" />
      
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
        {/* Logo */}
        {/* <motion.div 
          className="flex justify-center mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={naviLogo} alt="Navi BI Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-float" />
        </motion.div> */}

        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Inteligência de Negócios</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-foreground">Revelamos o Caminho para a</span>
          <br />
          <span className="text-gradient-gold">Prosperidade através dos Dados</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 md:mb-12 font-inter font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A plataforma Navi BI revela a inteligência por trás dos dados.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black-soft font-semibold px-8 py-6 text-lg rounded-xl shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-glow group"
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Demonstração
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
            <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            >
            Solicitar Acesso Exclusivo
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
            { value: "+15", label: "Empresas Transformadas" },
            { value: "+15 Anos", label: "De Expêriencia em BI" },
            { value: "+ 150", label: "Dashboards Entregues" },
            { value: "+400 horas", label: "Economizadas em Relatórios Manuais" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl flex flex-col justify-center h-full bg-petrol-dark/50">
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
