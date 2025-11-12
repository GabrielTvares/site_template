import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoTurbineduca from "@/assets/icone_turbineduca.png";

const menu: Array<{
  label: string;
  to: string;
  onClick?: () => void;
  external?: boolean;
}> = [
  { 
    label: "INÍCIO", 
    to: "/", 
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { 
    label: "SOBRE", 
    to: "/QuemSomos",
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { 
    label: "CONSULTORIA", 
    to: "/consultoria",
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { 
    label: "MENTORIA EXA", 
    to: "/mentoria-exa",
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { 
    label: "DEPOIMENTOS", 
    to: "/depoimentos",
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { 
    label: "BLOG", 
    to: "/BLOG",
    onClick: () => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  },
  { label: "CONTATO", to: "#contato" },
  { label: "NAVI BI", to: "http://navibi.ai", external: true },
];

const isAnchor = (to: string) => to.startsWith("#");
const isExternal = (item: any) => item.external === true;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(() => {
    // Define o item ativo inicial baseado na rota
    if (window.location.pathname === "/SobreMim") return "SOBRE";
    if (window.location.pathname === "/") return "INÍCIO";
    // Adicione outras rotas se necessário
    return "INÍCIO";
  });
  useEffect(() => {
    // Sincroniza o activeItem com a rota ao mudar de página
    if (location.pathname === "/QuemSomos" || location.pathname === "/SobreMim") setActiveItem("SOBRE");
    else if (location.pathname === "/") setActiveItem("INÍCIO");
    // Adicione outras rotas se necessário
  }, [location.pathname]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // lock scroll when mobile menu is open
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);

  // focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const container = mobileMenuRef.current;
    const previouslyActive = document.activeElement as HTMLElement | null;
    if (!container) return;

    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter((el) => !el.hasAttribute('disabled'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (first) first.focus();

    const onKeyTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyTab);
    return () => {
      document.removeEventListener('keydown', onKeyTab);
      // restore focus to opener (menu button) or previously active element
      if (menuButtonRef.current) menuButtonRef.current.focus();
      else if (previouslyActive && previouslyActive.focus) previouslyActive.focus();
    };
  }, [mobileOpen]);


// HEADER FIXO--V
// const Header = () => {
  return (
  <header className="w-full fixed top-0 z-40 backdrop-blur-md bg-slate-premium/95 flex items-center justify-between px-6 md:px-8 py-3 md:py-3 shadow-lg border-b border-slate-light/20">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          onClick={(e) => {
        setActiveItem("INÍCIO");
        // Aguarda o roteamento e então rola para o topo
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
          }}
        >
          <img 
            src={logoTurbineduca} 
            alt="logo-turbineduca" 
            width={116} 
            height={82} 
            className="cursor-pointer"
            fetchPriority="high"
            decoding="async"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-4 rounded-full px-6 py-2 bg-transparent border border">
          {menu.map((item) => (
            <li key={item.label}>
              {isExternal(item) ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                    activeItem === item.label
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              ) : isAnchor(item.to) ? (
                <a
                  href={item.to}
                  onClick={e => {
                    e.preventDefault();
                    setActiveItem(item.label);
                    // Para DEMONSTRAÇÃO e CONTATO, mesma lógica do FUNCIONALIDADES
                    if (location.pathname !== "/") {
                      navigate(`/${item.to}`);
                    } else {
                      const el = document.getElementById(item.to.replace('#', ''));
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                    activeItem === item.label
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => {
                    setActiveItem(item.label);
                    if (item.onClick) item.onClick();
                  }}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                    activeItem === item.label
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://plataforma.turbineduca.com.br/login"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gradient-to-r from-gold to-gold-dark text-black-soft font-semibold text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gold/50 flex items-center gap-1.5"
        >
          EAD
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        ref={menuButtonRef}
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((s) => !s)}
        className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/60"
      >
        <span className="sr-only">{mobileOpen ? "Fechar menu" : "Abrir menu"}</span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
      </button>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div 
          ref={mobileMenuRef}
          className={`fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-gradient-to-b from-slate-dark via-slate-premium to-slate-dark shadow-2xl border-b-4 border-gold/30 transform transition-all duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col gap-1 max-w-md mx-auto">
            {menu.map((item, index) => (
              <li 
                key={item.label}
                className={`transform transition-all duration-300 delay-${index * 50}`}
                style={{ 
                  transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {isExternal(item) ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                      activeItem === item.label
                        ? "bg-gold/20 text-gold border-l-4 border-gold"
                        : "text-white hover:bg-slate-light/30 hover:text-gold hover:border-l-4 hover:border-gold/50 border-l-4 border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : isAnchor(item.to) ? (
                  <a
                    href={item.to}
                    onClick={e => {
                      e.preventDefault();
                      setActiveItem(item.label);
                      setMobileOpen(false);
                      if (location.pathname !== "/") {
                        navigate(`/${item.to}`);
                      } else {
                        const el = document.getElementById(item.to.replace('#', ''));
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`block px-6 py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                      activeItem === item.label
                        ? "bg-gold/20 text-gold border-l-4 border-gold"
                        : "text-white hover:bg-slate-light/30 hover:text-gold hover:border-l-4 hover:border-gold/50 border-l-4 border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMobileOpen(false);
                      if (item.onClick) item.onClick();
                    }}
                    className={`block px-6 py-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                      activeItem === item.label
                        ? "bg-gold/20 text-gold border-l-4 border-gold"
                        : "text-white hover:bg-slate-light/30 hover:text-gold hover:border-l-4 hover:border-gold/50 border-l-4 border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* CTA Button - Mobile */}
          <div className="mt-6 px-6">
            <a
              href="https://plataforma.turbineduca.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold to-gold-dark text-black-soft font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border border-gold/50"
            >
              EAD
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative element */}
          <div className="mt-8 pt-6 border-t border-gold/20 text-center">
            <p className="text-sm text-white/60">Turbineduca • Revelando o caminho da prosperidade</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;