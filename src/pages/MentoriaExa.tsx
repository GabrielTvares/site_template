import React from 'react';
import { Target, Users, TrendingUp, Award, CheckCircle2, ArrowRight, Zap, Brain, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import equipeBackground from "@/assets/equipe3.png";

const MentoriaExa = () => {
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
      icon: Brain,
      title: "Desenvolvimento de Liderança",
      description: "Transforme sua forma de liderar e inspire seu time a alcançar resultados extraordinários."
    },
    {
      icon: Rocket,
      title: "Crescimento Acelerado",
      description: "Metodologia exclusiva para acelerar o crescimento pessoal e profissional de executivos."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Definição clara de objetivos e estratégias práticas para alcançá-los rapidamente."
    },
    {
      icon: Shield,
      title: "Suporte Personalizado",
      description: "Acompanhamento próximo e individualizado durante toda a jornada de desenvolvimento."
    }
  ];

  const methodology = [
    {
      title: "Diagnóstico Executivo",
      description: "Avaliação profunda do seu perfil de liderança, desafios atuais e objetivos de carreira.",
      items: [
        "Análise de competências de liderança",
        "Mapeamento de pontos fortes e oportunidades",
        "Definição de metas claras e mensuráveis",
        "Plano de desenvolvimento personalizado"
      ]
    },
    {
      title: "Sessões de Mentoria",
      description: "Encontros regulares focados em desenvolvimento prático e aplicação imediata no dia a dia.",
      items: [
        "Sessões semanais ou quinzenais",
        "Discussão de cases reais do seu negócio",
        "Ferramentas práticas de gestão",
        "Apoio na tomada de decisões estratégicas"
      ]
    },
    {
      title: "Implementação Prática",
      description: "Aplicação imediata dos aprendizados com acompanhamento de resultados e ajustes.",
      items: [
        "Planos de ação concretos",
        "Acompanhamento de implementação",
        "Feedback contínuo",
        "Celebração de conquistas"
      ]
    }
  ];

  const whatsIncluded = [
    "Sessões individuais de mentoria",
    "Material de apoio exclusivo",
    "Acesso a ferramentas de gestão",
    "Grupo de networking com outros mentorados",
    "Suporte via WhatsApp entre sessões",
    "Certificado de conclusão"
  ];

  const idealFor = [
    {
      title: "CEOs e Fundadores",
      description: "Que buscam escalar suas empresas de forma sustentável"
    },
    {
      title: "Diretores e Executivos",
      description: "Que querem desenvolver habilidades de liderança estratégica"
    },
    {
      title: "Gestores de Alta Performance",
      description: "Que desejam liderar times mais engajados e produtivos"
    },
    {
      title: "Empreendedores",
      description: "Que precisam estruturar e profissionalizar seus negócios"
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
        <section 
          className="pt-52 pb-28 md:pt-64 md:pb-44 xl:pt-[35rem] xl:pb-[24.5rem] relative"
          style={{
            backgroundImage: `url(${equipeBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay escuro para melhor legibilidade */}
          <div className="absolute inset-0 bg-slate-premium/70" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-full px-6 py-2 mb-6">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold text-sm">Mentoria Executive ExA</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
                Mentoria Executive ExA: Eleve Sua Liderança ao Próximo Nível
              </h1>
              
              <p className="text-lg md:text-xl text-[#C4D7E0] mb-8">
                Programa exclusivo de desenvolvimento executivo para líderes que desejam transformar suas carreiras e seus negócios
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
                  Quero Ser Mentorado
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
                  Conhecer o Programa
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
                Benefícios da Mentoria ExA
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Desenvolvimento executivo com foco em resultados práticos e transformação real
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

        {/* Methodology Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Processo estruturado em 3 pilares para garantir sua evolução contínua
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {methodology.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-6xl font-bold text-gold/20 mb-4">0{index + 1}</div>
                    <h3 className="text-2xl font-bold text-gradient-gold mb-4">{step.title}</h3>
                    <p className="text-[#C4D7E0] mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section - Klaus Schwab */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-slate-dark/80 to-slate-premium/60 backdrop-blur-md rounded-3xl p-8 md:p-16 border-2 border-gold/30 shadow-2xl overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                
                {/* Quote marks */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 text-gold/20 text-8xl md:text-9xl font-serif leading-none">"</div>
                
                <div className="relative z-10 text-center">
                  <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed mb-8 italic font-serif">
                    No novo mundo, não é o peixe grande que come o peixe pequeno,{' '}
                    <span className="text-gradient-gold">é o peixe rápido que come o peixe lento.</span>
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                    <p className="text-gold text-lg md:text-xl font-semibold tracking-wide">
                      Klaus Schwab
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
                  </div>
                </div>
                
                {/* Quote marks closing */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-gold/20 text-8xl md:text-9xl font-serif leading-none">"</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-8 md:py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gold/20">
                <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
                  <p>
                    O novo mundo dos negócios exige que os executivos sejam ágeis, pois por maior ou menor que seja a corporação, não é o tamanho do negócio que importa. Mas, sim, a capacidade de lançar rapidamente e aperfeiçoar soluções que atendam os desejos e expectativas dinâmicas dos clientes. Sendo assim, faz-se necessário os executivos dominarem um novo conjunto de habilidades e competências que as formações não oferecem.
                  </p>
                  <p className="text-[#C4D7E0] border-l-4 border-gold pl-6 italic">
                    A mentoria Executive ExA foi desenvolvida sob medida para capacitar o executivo moderno a fazer sua empresa ser o <span className="text-gold font-semibold">peixe rápido (empresa ágil)</span> que come o <span className="text-white/70">peixe lento (empresa lenta)</span> como brilhantemente ensinou o economista Klaus Schwab.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                  O Que Está Incluído
                </h2>
                <p className="text-lg md:text-xl text-[#C4D7E0]">
                  Tudo que você precisa para sua jornada de transformação
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gold/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whatsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span className="text-white text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
                Para Quem É a Mentoria ExA?
              </h2>
              <p className="text-lg md:text-xl text-[#C4D7E0] max-w-3xl mx-auto">
                Programa desenvolvido especialmente para líderes que querem mais
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {idealFor.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-dark/70 to-slate-premium/50 backdrop-blur-md rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{profile.title}</h3>
                    <p className="text-[#C4D7E0]">{profile.description}</p>
                  </div>
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
                  Pronto Para Transformar Sua Liderança?
                </h2>
                <p className="text-lg md:text-xl text-[#C4D7E0] mb-8">
                  Agende uma conversa e descubra como a Mentoria ExA pode acelerar seu desenvolvimento executivo
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
                  Falar com Mentor
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

export default MentoriaExa;
