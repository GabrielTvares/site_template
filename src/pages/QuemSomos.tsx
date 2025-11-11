import React from 'react';
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ValueCard } from "@/components/ValueCard";
import Footer from "@/components/Footer";
import founderPhoto from "@/assets/Navi BI - Imagens - Sobre.webp";
import heroBg from "@/assets/hero-bg.webp";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import LogoTimeServidor from "@/assets/logo-time-servidor.png";
import LogoEngajamentoRocket from '@/assets/logo-engajamento-rocket.png';
import logoInteireza from '@/assets/logo-inteireza.png';
import logoNextLevel from '@/assets/logo-next-level.png';
import logoRespeito from '@/assets/logo-respeito.png';
import logoUmProposito from '@/assets/logo-um-proposito.png';
import logoBoastResults from '@/assets/logo-boast-results.png';

const QuemSomos = () => {
  const parallaxY = useScrollParallax(0.4);
  // gera partículas apenas uma vez por montagem para evitar recalculações em cada render
  const floatingParticles30 = React.useMemo(() =>
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 6}s`,
      opacity: 0.35 + Math.random() * 0.6,
      blur: `${Math.random() * 4}px`,
    })),
    [],
  );
  const floatingParticles10 = React.useMemo(() =>
    Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 6}s`,
      opacity: 0.35 + Math.random() * 0.6,
      blur: `${Math.random() * 4}px`,
    })),
    [],
  );
  return (
    <div className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-[#012739]">
      {/* Single solid page background (#012739) - visual effects kept inside cards */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Golden floating particles - same behavior as Hero */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingParticles30.map((p, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
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
      </div>

  <div className="relative z-10">
    {/* Fundo hero-bg.jpg cobre as duas primeiras seções */}
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${parallaxY}px`,
        backgroundRepeat: 'no-repeat',
        transition: 'background-position 0.1s linear',
      }}
    >
      <div className="absolute inset-0 bg-[#012739]/80 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-petrol-dark/90 via-petrol/80 to-background" />
      {/* Seção título */}
      <section className="relative py-12 sm:py-16 md:py-20">
        {/* Golden floating particles removido para evitar erro de token inesperado */}
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in px-6 py-8 sm:py-10 md:p-10 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Sobre o Navi BI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Transformando dados complexos em decisões inteligentes
          </p>
        </div>
      </section>
      {/* Seção Quem Somos */}
      <section className="py-1 sm:py-4 md:py-10 relative">
        {/* Golden floating particles - same behavior as Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          {floatingParticles30.map((p, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
              <div className="order-2 md:order-1 space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="text-5xl md:text-6xl font-extrabold text-gradient-gold drop-shadow-lg mb-4 leading-tight">
                  Quem Somos
                </h2>
                <div className="space-y-4 text-base md:text-lg text-white leading-relaxed">
                  <p className="text-lg md:text-xl whitespace-pre-line">
                    O <span className="font-semibold text-gradient-gold text-1xl md:text-2xl">Navi BI </span> nasceu da percepção de que muitas empresas possuem dados valiosos, mas não sabem como utilizá-los para crescer. {'\n\n'}Nosso propósito é simples: Escalar Pessoas e Negócios.
                    {'\n\n'}Com expertise em análises financeiras, dashboards interativos e relatórios automatizados, ajudamos empresas a navegarem pelo oceano de informações e encontrarem o caminho para o sucesso.
                  </p>
                  </div>
              </div>
              <div className="order-1 md:order-2 animate-scale-in flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[352px] md:h-[352px] lg:w-[422px] lg:h-[422px] xl:w-[506px] xl:h-[506px] flex items-center justify-center">
                  {/* Glow atrás da foto */}
                  <div className="absolute inset-0 rounded-full bg-gold/28 blur-3xl animate-pulse opacity-70 z-0" />
                  <img
                    src={founderPhoto}
                    alt="Maycon Pires - Fundador da Navi BI"
                    className="relative rounded-full shadow-2xl w-full h-full object-cover aspect-square border-[2px] border-gold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        {/* Mission, Vision, Values */}
  <section className="py-16 md:py-10 relative">
    {/* Golden floating particles - same behavior as Hero */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {floatingParticles10.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
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
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto p-4 sm:p-8 md:p-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Nossos Pilares
          </h2>
          <p className="text-lg text-[#C4D7E0] max-w-2xl mx-auto">
            Os valores que guiam nossa jornada e definem como trabalhamos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          <ValueCard
            icon={Target}
            title="Propósito"
            description="Escalar Pessoas e Negócios."
            delay={100}
            compact={true}
          />
          <ValueCard
            icon={Heart}
            title="Missão"
            description="Organizar e gerar  dados estratégicos para gestão empresarial de alta performance."
            delay={200}
            compact={true}
          />
          <ValueCard
            icon={Eye}
            title="Visão"
            description="Criar um Ecossistema de Softwares com AI de Gestão Empresarial de Alta Performance."
            delay={300}
            compact={true}
          />
        </div>
      </div>
    </div>
  </section>

  {/* T U R B I N E */}
  <section className="py-16 md:py-24 relative">
    {/* Golden floating particles - same behavior as Hero */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {floatingParticles10.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
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
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto p-4 sm:p-8 md:p-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Valores Que nos Guiam
          </h2>
          <p className="text-lg text-[#C4D7E0] max-w-2xl mx-auto">
            Os valores que guiam nossa jornada e definem como trabalhamos
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          {/* Mobile: todos em coluna | Desktop: layout em pirâmide */}
          
          {/* Card T */}
                <div className="flex justify-center w-full">
                <ValueCard
                  icon={LogoTimeServidor}
                  title="Time Servidor"
                  description="Vivemos o valor em nosso modelo de trabalho “eu cresço quando ajudo o outro a crescer”! Para fazer o próximo crescer, focamos em trabalhar de forma servidora com nossos clientes e colaboradores! #TIMESERVIDOR"
                  delay={100}
                />
                </div>
                
                {/* Cards U e R */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 w-full items-center">
            <ValueCard
              icon={logoUmProposito}
              title="Um Propósito, Muitas Mãos"
              description="Aqui entendemos que quando todos trabalham juntos com um mesmo objetivo, os resultados são mais fortes, mais rápidos e mais significativos. #UMPROPOSITOVARIASMAOS"
              delay={100}
            />
            <ValueCard
              icon={logoRespeito}
              title="Respeito Que Valoriza -Ética"
              description="Nós entendemos que cada ser humano é único! Nós valorizamos ideias, conhecimentos, trajetórias e atitudes. Em nossa organização cada pessoa é mais do que um cargo — é uma história!O #RESPEITOQUEVALORIZA passa por ver o outro com olhos de empatia e construir vínculos que desenvolvem, e não apenas resultados que impressionam."
              delay={100}
            />
          </div>
          
          {/* Cards B, I, N e E */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4 lg:gap-6 w-full items-center">
            <ValueCard
              icon={logoBoastResults}
              title="Boost Results"
              description="“Boost Results” é uma expressão em inglês que significa literalmente “impulsionar resultados”.  Isso significa ter uma atuação pautada em estratégias que aceleram o desempenho, elevam a performance e entregam mais valor em menos tempo. Por isso, por onde nós passamos geramos #BOOSTRESULTS!"
              delay={200}
            />
            <ValueCard
              icon={logoInteireza}
              title="Inteireza na Vida"
              description="Inteireza na Vida é viver com propósito, equilíbrio e presença. Cuidamos do corpo, mente e espírito, valorizando o autoconhecimento e a harmonia entre vida pessoal e profissional. Acreditamos que resultados verdadeiros nascem de pessoas inteiras, conectadas com seu propósito e com o outro. #INTEIREZANAVIDA."
              delay={200}
            />
            <ValueCard
              icon={logoNextLevel}
              title="Next Level"
              description="Next Level é sobre mirar alto e ir além! Acreditamos no potencial ilimitado de cada pessoa e equipe para vencer limitações e alcançar novas conquistas. Com garra, fé e determinação, impulsionamos nossos clientes e times rumo ao sucesso e à excelência. Sempre Mire Alto para Alcançar seu #NEXTLEVEL!"
              delay={200}
            />
            <ValueCard
              icon={LogoEngajamentoRocket}
              title="Engajamento Rock"
              description="Engajamento Rock é união, força e propósito coletivo! Assim como uma rocha formada por pequenas partículas, acreditamos que juntos construímos grandes resultados e legados. Com sinergia, ritmo e coração, enfrentamos desafios e vencemos como um só time. Isso é #ENGAJAMENTOROCK!"
              delay={300}
            />
          </div>
        </div>
      </div>
    </div>
  </section>

        {/* CTA Section */}
  <section className="py-12 sm:py-16 md:py-20 relative">
    {/* Golden floating particles - same behavior as Hero */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gold animate-float ${i % 3 === 0 ? 'w-0.5 h-0.5 md:w-1 md:h-1' : 'w-1 h-1 md:w-1.5 md:h-1.5'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 6}s`,
            opacity: 0.35 + Math.random() * 0.6,
            filter: `blur(${Math.random() * 4}px)`,
          }}
        />
      ))}
    </div>
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold drop-shadow-gold mb-6">
            Quer descobrir como o Navi BI pode transformar seu negócio?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa a tomar decisões mais inteligentes baseadas em dados.
          </p>
            <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform border-2 border-gold bg-gold/10 text-gold font-bold"
            onClick={() => {
              const contatoSection = document.getElementById('contato');
              if (contatoSection) {
              contatoSection.scrollIntoView({ behavior: 'smooth' });
              } else {
              window.location.href = '/#contato';
              }
            }}
            >
            Solicite uma demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>
    </div>
  </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default QuemSomos;
