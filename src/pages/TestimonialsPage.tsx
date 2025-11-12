import React from 'react';
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Footer from "@/components/Footer";

// Import client photos
import fotoVinicius from "@/assets/vinicius.webp";
import fotoRodolfo from "@/assets/rodolfo.avif";
import fotoEvandro from "@/assets/evandro.avif";

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
    name: "Rodolfo Wittman",
    role: "CEO",
    company: "DualCon",
    content: "A Consultoria e Mentoria ExA é fantástica. O Maycon Pires, que conduz a Mentoria, o cara é fera. Em poucas mentorias já percebemos a diferença. Time mais engajado, mais focado e o mais importante MAIS ESTRATÉGICO e se tornando cada vez mais ÁGIL. Não perco nenhuma mentoria, mesmo aquelas nas sextas-feiras no final do dia. :) Maycon, de coração, o nosso MUITO OBRIGADO.",
    rating: 5,
    image: fotoRodolfo,
  },
  {
    name: "Vinicius Silva",
    role: "CEO",
    company: "SITS Tecnologia",
    content: "A mentoria Executive ExA me abriu os olhos para vários vícios de trabalho que não eram produtivos e me acorrentavam ao chão, impedindo o meu crescimento. Percebi que meu time não estava 100% alinhado comigo e com a empresa, e a mentoria me deu ferramentas para melhorar e transformar meu time em uma equipe mais produtiva e parceira.",
    rating: 5,
    image: fotoVinicius,
  },
  {
    name: "Evandro Pena",
    role: "CEO",
    company: "MSP Tecnologia",
    content: "Gostaria de expressar minha profunda gratidão por sua presença em minha vida pessoal e empresarial durante o ano passado e em 2024. Sem dúvida, você se destacou como a melhor pessoa que tive o privilégio de conhecer em 2023. Sua sabedoria, generosidade e apoio inabalável foram uma luz guia em momentos de incerteza e desafio.",
    rating: 5,
    image: fotoEvandro,
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de TI",
    company: "TechCorp Brasil",
    content: "A transformação digital que conseguimos implementar com o suporte da Turbineduca foi além das nossas expectativas. A metodologia aplicada trouxe clareza estratégica e resultados mensuráveis em poucos meses. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    role: "CEO",
    company: "Innovare Solutions",
    content: "Como CEO de uma startup em crescimento, eu precisava de direcionamento estratégico. A mentoria me ajudou a estruturar processos, alinhar o time e escalar o negócio de forma sustentável. Investimento que valeu cada centavo!",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "CTO",
    company: "DataFlow Systems",
    content: "A consultoria foi fundamental para implementarmos uma cultura data-driven na empresa. Hoje tomamos decisões baseadas em dados concretos e nosso time está muito mais estratégico e produtivo.",
    rating: 5,
  },
  {
    name: "Patricia Oliveira",
    role: "Gerente de Projetos",
    company: "Agile Tech",
    content: "A metodologia ExA transformou completamente nossa forma de trabalhar. Conseguimos reduzir o tempo de entrega dos projetos em 40% e aumentar significativamente a satisfação do cliente. Simplesmente incrível!",
    rating: 5,
  },
  {
    name: "Fernando Santos",
    role: "Diretor Comercial",
    company: "Sales Pro",
    content: "As estratégias de gestão que aprendi na mentoria me ajudaram a reorganizar toda a equipe comercial. Batemos recordes de vendas nos últimos 3 meses consecutivos. O conhecimento compartilhado é ouro puro!",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "COO",
    company: "CloudSync",
    content: "Trabalhar com a Turbineduca foi uma experiência transformadora. Eles não apenas entregam consultoria técnica, mas trazem uma visão estratégica de negócio que fez toda a diferença nos nossos resultados.",
    rating: 5,
  },
  {
    name: "Marcelo Tavares",
    role: "CEO",
    company: "StartHub Ventures",
    content: "A mentoria Executive ExA me deu as ferramentas e a confiança necessária para liderar minha empresa de forma mais eficaz. O ROI foi impressionante - em 6 meses já recuperamos o investimento e muito mais!",
    rating: 5,
  },
];

const TestimonialsPage = () => {
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

  return (
    <div className="bg-gradient-to-b from-background via-slate-dark/10 to-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
              Histórias de Sucesso
            </h1>
            <p className="text-lg md:text-2xl text-[#C4D7E0] mb-4">
              Conheça as experiências de quem já transformou seus negócios
            </p>
            <p className="text-base md:text-lg text-[#C4D7E0]/80">
              Empresários e executivos que alcançaram resultados extraordinários com nossa consultoria e mentoria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section 
        className="py-12 md:py-20 relative"
        ref={ref}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-6">
              Pronto Para Transformar Seu Negócio?
            </h2>
            <p className="text-lg md:text-xl text-[#C4D7E0] mb-8">
              Junte-se a dezenas de empresas que já alcançaram resultados extraordinários
            </p>
            <a
              href="https://plataforma.turbineduca.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold/80 text-slate-premium px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
            >
              Começar Agora
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
