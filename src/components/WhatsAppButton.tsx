import React, { useEffect, useState } from "react";

// Link fornecido com número e mensagem pré-preenchida
const WHATSAPP_LINK =
  "https://wa.me/5532984678715?text=Olá%2C%20estou%20entrando%20em%20contato%20pelo%20site%20do%20Turbineduca.%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20.%20Obrigado%21";

const WhatsAppButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensagem no WhatsApp"
      className={`fixed right-6 bottom-6 md:right-8 md:bottom-8 lg:right-10 lg:bottom-10 z-50 animate-float`}
    >
      <div
        className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center text-white transform transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40`}
        // mount animation
        style={{
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* WhatsApp SVG icon (official-ish) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .001 5.373.001 12c0 2.12.556 4.185 1.61 6.026L0 24l6.19-1.604A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12 0-3.177-1.237-6.165-3.48-8.52zM12 21.5c-1.095 0-2.169-.264-3.14-.763l-.225-.12-3.672.952.98-3.583-.127-.234A9.5 9.5 0 012.5 12C2.5 6.202 6.702 2 12 2c2.54 0 4.9.99 6.687 2.777A9.397 9.397 0 0121.5 12c0 5.298-4.202 9.5-9.5 9.5z" />
          <path d="M17.29 14.11c-.29-.15-1.716-.847-1.981-.943-.266-.098-.46-.147-.654.147s-.75.943-.92 1.14c-.17.196-.34.22-.63.074-.29-.147-1.226-.45-2.335-1.439-.863-.766-1.444-1.71-1.614-2-.17-.29-.018-.447.128-.592.13-.13.29-.34.435-.51.145-.17.193-.29.29-.48.098-.196.05-.37-.025-.52-.074-.147-.654-1.58-.897-2.165-.236-.57-.476-.494-.654-.504l-.56-.01c-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.44.01 1.44 1.026 2.83 1.17 3.03.147.196 2.02 3.08 4.9 4.32 2.09.95 2.98 1.01 3.38.87.42-.15 1.31-.53 1.49-1.04.18-.51.18-.95.13-1.04-.05-.095-.19-.147-.39-.268z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
