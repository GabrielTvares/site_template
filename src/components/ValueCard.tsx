import React from "react";
import { LucideIcon } from "lucide-react";

type IconType = LucideIcon | string;

interface ValueCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
  compact?: boolean; // Nova prop para cards menores (Pilares)
}

export const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay = 0, compact = false }) => {
  const isString = typeof icon === 'string';

  // Tamanhos aumentados em 20%: 384px -> 461px (largura), 320px -> 384px (altura) para imagens
  // SVG: 323px -> 388px (largura), 269px -> 323px (altura)
  const baseImgClass = "w-72 h-64 sm:w-[461px] sm:h-[384px] object-contain";
  const baseSvgClass = "w-64 h-60 sm:w-[388px] sm:h-[323px] text-gold";

  // Altura: 523px para TURBINE, 330px para Pilares
  const heightClass = compact ? "h-[330px]" : "h-[523px]";

  return (
    <div
      className={`w-[280px] ${heightClass} bg-gradient-to-br from-slate-dark/80 to-slate-premium/60 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gold/20 flex flex-col items-center text-center animate-fade-in hover:border-gold/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-32 h-32 flex items-center justify-center mb-2">
        {isString ? (
          <img 
            src={icon as string} 
            alt="Ícone" 
            className={baseImgClass}
            loading="lazy"
            decoding="async"
            width="128"
            height="128"
          />
        ) : (
          // @ts-ignore - icon é um componente Lucide (SVG)
          React.createElement(icon, { className: baseSvgClass })
        )}
      </div>
      <h3 className="text-xl font-bold text-gradient-gold mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed flex-1 overflow-auto">{description}</p>
    </div>
  );
};
