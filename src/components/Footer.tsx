import { useState, useEffect } from "react";
import { Linkedin, Twitter, Instagram, Mail, Settings2, Trash2, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoTurbineduca from "@/assets/icone_turbineduca.png";
import privacyIcon from "@/assets/privacyoptions29x14.png";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { CookieSettingsModal } from "./CookieSettingsModal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { consent, acceptCategories, revokeConsent } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [showRevokeDialog, setShowRevokeDialog] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  // Sincroniza o status com o consent sempre que ele mudar
  useEffect(() => {
    setIsConfigured(!!consent);
  }, [consent]);

  // Escuta eventos customizados de mudança de consentimento
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      const newConsent = event.detail;
      setIsConfigured(!!newConsent);
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  return (
    <footer className="bg-black-soft border-t border-gold/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoTurbineduca}
                alt="Turbineduca Logo"
                className="w-32 h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-[#C4D7E0] leading-relaxed max-w-md">
              A plataforma Navi BI revela a inteligência por trás dos dados.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/turbineduca/" },
                { icon: Instagram, href: "https://www.instagram.com/turbineduca.business/" },
                { icon: Youtube, href: "https://www.youtube.com/@turbineduca.business" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-light/50 border border-gold/20 flex items-center justify-center text-gold hover:bg-white hover:text-black-soft transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-poppins font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {["Início", "Funcionalidades", "Demonstração", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#C4D7E0] hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-poppins font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-[#C4D7E0] hover:text-gold transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#C4D7E0] hover:text-gold transition-colors"
                >
                  {/* Termos de Uso */}
                </a>
              </li>
              <li>
                <Link
                  to="/politica-de-cookies"
                  className="text-[#C4D7E0] hover:text-gold transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li className="relative flex items-center">
                {/* Ícone de Privacy Options */}
                <button
                  onClick={() => setShowSettings(true)}
                  className="absolute -left-10 cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Abrir configurações de cookies"
                >
                  <img 
                    src={privacyIcon} 
                    alt="Privacy Options" 
                    className="w-[29px] h-[14px]"
                  />
                </button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-[#C4D7E0] hover:text-gold transition-colors text-left">
                    Preferências de Cookies
                  </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border-gold/20 w-56">
                      <DropdownMenuItem 
                        onClick={() => setShowSettings(true)}
                        className="cursor-pointer hover:bg-gold/10 focus:bg-gold/10 hover:text-white focus:text-white"
                      >
                        <Settings2 className="w-4 h-4 mr-2 text-gold" />
                        <span>Configurações</span>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem 
                        onClick={() => setShowRevokeDialog(true)}
                        className="cursor-pointer hover:bg-destructive/10 focus:bg-destructive/10 text-destructive focus:text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        <span>Revogar Consentimento</span>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator className="bg-border/50" />
                      
                      <div className="px-2 py-1.5 text-xs">
                        <span className="text-muted-foreground">Status: </span>
                        <span className={isConfigured ? 'text-green-500 font-medium' : 'text-amber-500 font-medium'}>
                          {isConfigured ? 'Configurado' : 'Pendente'}
                        </span>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#C4D7E0] hover:text-gold transition-colors"
                >
                  {/* Compliance */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C4D7E0] text-sm text-center md:text-left">
              © {currentYear} Navi BI — Revelando o caminho da prosperidade
            </p>
            <p className="text-[#C4D7E0] text-sm">
              Desenvolvido com o propósito de transformar negócios
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Configurações de Cookies */}
      <CookieSettingsModal
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={(preferences) => {
          acceptCategories(preferences);
          setShowSettings(false);
        }}
        initialConsent={consent}
      />

      {/* Dialog de confirmação para revogar */}
      <AlertDialog open={showRevokeDialog} onOpenChange={setShowRevokeDialog}>
        <AlertDialogContent className="bg-card border-gold/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-gold">
              <Trash2 className="w-5 h-5" />
              Revogar Consentimento de Cookies
            </AlertDialogTitle>
            <AlertDialogDescription className="text-foreground/80">
              Isso removerá todas as suas preferências de cookies e recarregará a página 
              para limpar os cookies ativos. Você precisará definir suas preferências novamente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gold/30 hover:bg-gold/10">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                revokeConsent();
                setShowRevokeDialog(false);
              }}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Sim, Revogar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  );
};

export default Footer;
