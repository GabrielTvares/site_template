import React from 'react';
import { Target, Users, TrendingUp, Award, CheckCircle2, ArrowRight, Zap, Building2, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Consultoria = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const particles = React.useMemo(() =>
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
      opacity: 0.3 + Math.random() * 0.4,
      blur: `${Math.random() * 3}px`,
    })),
    [],
  );

  const benefits = [
    {
      icon: Target,
      title: "Estratégia Personalizada",
      description: "Desenvolvemos soluções customizadas que se alinham perfeitamente aos objetivos únicos do seu negócio."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Metodologias comprovadas para acelerar o crescimento sustentável da sua empresa."
    },
    {
      icon: Users,
      title: "Time de Alta Performance",
      description: "Transformamos equipes em times engajados e altamente produtivos."
    },
    {
      icon: LineChart,
      title: "Resultados Mensuráveis",
      description: "Foco em KPIs e métricas concretas para garantir o retorno do investimento."
    }
  ];

  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Análise profunda do seu negócio com plano de ação estruturado para alcançar seus objetivos de curto, médio e longo prazo.",
      features: [
        "Diagnóstico empresarial completo",
        "Planejamento estratégico",
        "Definição de OKRs e KPIs",
        "Roadmap de implementação"
      ]
    },
    {
      title: "Gestão Ágil",
      description: "Implementação de metodologias ágeis adaptadas à realidade da sua empresa para aumentar produtividade e eficiência.",
      features: [
        "Scrum e Kanban personalizados",
        "Treinamento de equipes",
        "Otimização de processos",
        "Cultura de melhoria contínua"
      ]
    },
    {
      title: "Transformação Digital",
      description: "Acelere a digitalização do seu negócio com estratégias modernas e ferramentas adequadas ao seu mercado.",
      features: [
        "Automação de processos",
        "Implementação de tecnologias",
        "Analytics e Business Intelligence",
        "Gestão da mudança organizacional"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Análise completa da situação atual da empresa, identificando oportunidades e desafios."
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Desenvolvimento de estratégia personalizada com metas claras e cronograma definido."
    },
    {
      number: "03",
      title: "Implementação",
      description: "Execução do plano com acompanhamento próximo e ajustes conforme necessário."
    },
    {
      number: "04",
      title: "Resultados",
      description: "Medição de resultados, otimização contínua e garantia de sustentabilidade das melhorias."
    }
  ];

  return (
    <div className="relative flex flex-col bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-20 right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-gold/8 via-gold/4 to-transparent blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-slate-premium/15 via-slate-dark/8 to-transparent blur-[120px]" />
        
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-full px-6 py-2 mb-6">
                <Building2 className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold text-sm">Consultoria Empresarial</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
                Transforme Seu Negócio com Consultoria de Excelência
              </h1>
              
              <p className="text-lg md:text-xl text-[#C4D7E0] mb-8">
                Estratégias customizadas, metodologias ágeis e resultados mensuráveis para impulsionar sua empresa ao próximo nível
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-gold to-gold/80 text-slate-premium px-8 py-6 text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const contatoSection = document.getElementById('contato');
                    if (contatoSection) {
                      contatoSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contato';
                    }
                  }}
                >
                  Agendar Conversa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gold text-gold px-8 py-6 text-lg hover:bg-gold/10 transition-all duration-300"
                  onClick={() => {
                    const benefitsSection = document.querySelector('#beneficios');
                    if (benefitsSection) {
                      benefitsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Saber Mais
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24 relative" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                Por Que Escolher Nossa Consultoria?
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Experiência comprovada e metodologia exclusiva para transformar desafios em oportunidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-[#C4D7E0] leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Soluções completas para cada necessidade do seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
                    <h3 className="text-2xl font-bold text-gradient-gold mb-4">{service.title}</h3>
                    <p className="text-[#C4D7E0] mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                Como Funciona
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Processo estruturado em 4 etapas para garantir resultados excepcionais
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
                    <div className="text-6xl font-bold text-gold/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#C4D7E0] leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-gold/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gold/20">
                <Zap className="w-16 h-16 text-gold mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-6">
                  Pronto Para Transformar Sua Empresa?
                </h2>
                <p className="text-lg md:text-xl text-[#C4D7E0] mb-8">
                  Agende uma conversa sem compromisso e descubra como podemos ajudar seu negócio a alcançar novos patamares
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-gold to-gold/80 text-slate-premium px-8 py-6 text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const contatoSection = document.getElementById('contato');
                    if (contatoSection) {
                      contatoSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contato';
                    }
                  }}
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Consultoria;
