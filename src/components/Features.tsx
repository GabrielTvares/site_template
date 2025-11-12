import { BarChart3, TrendingUp, CircleDollarSign, Shield, Database, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: BarChart3,
      title: "Dashboards Interativos",
      description: "Visualize KPIs e métricas em tempo real com gráficos dinâmicos e personalizáveis."
    },
    {
      icon: TrendingUp,
      title: "Relatórios Inteligentes",
      description: "Entenda seus resultados como nunca antes com análise completa e do seu financeiro e impostos."
    },
    {
      icon: Database,
      title: "Integração com ERPs",
      description: "Conecte seus dados em segundos com integração nativa aos principais sistemas."
    },
    {
      icon: Clock,
      title: "Análise Ágil dos Dados",
      description: "Acompanhe suas métricas financeiras com atualizações automáticas."
    },
    {
      icon: CircleDollarSign,
      title: "Plano Orçamentário",
      description: "Controle o budget de todas as suas receitas e despesas."
    },
    {
      icon: Shield,
      title: "Perfis e Acessos Personalizados",
      description: "Cada colaborador visualiza apenas o que importa para sua área."
    }
  ];

  return (
    <section id="funcionalidades" className="py-12 sm:py-20 bg-gradient-to-b from-background to-slate-dark/20 relative overflow-hidden" ref={ref}>
      {/* Background Decoration (harmonizado com Hero) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden Glow - canto superior esquerdo */}
        <div
          className="absolute top-32 left-24 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent blur-[120px]"
        />

        {/* Slate Glow - canto inferior direito */}
        <div
          className="absolute bottom-32 right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-slate-premium/20 via-slate-dark/10 to-transparent blur-[140px]"
        />

        {/* Optional: leves partículas estáticas (coerentes com o Hero) */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-gradient-gold">Funcionalidades</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Ferramentas poderosas para transformar dados em insights acionáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:max-w-[90rem] lg:mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 bg-gradient-to-br from-slate-dark/80 to-slate-premium/60 backdrop-blur-md border border-gold/20 hover:border-gold/40"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-gold/30">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-black-soft" />
                </div>
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 text-gradient-gold">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
