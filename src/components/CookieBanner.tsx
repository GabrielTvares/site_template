/**
 * Banner de consentimento de cookies
 * Compatível com LGPD e GDPR
 * 
 * Este componente exibe um banner na parte inferior da tela quando o usuário
 * ainda não deu seu consentimento para cookies. Oferece opções para:
 * - Aceitar todos os cookies
 * - Rejeitar cookies não essenciais
 * - Personalizar preferências (abre modal)
 */

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings2 } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';

export const CookieBanner = () => {
  const { showBanner, consent, acceptAll, rejectAll, acceptCategories } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (showBanner) {
      // Pequeno delay para animação de entrada
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowSettings(true);
  };

  const handleSaveCustom = (preferences: any) => {
    acceptCategories(preferences);
    setIsVisible(false);
  };

  // Não renderizar nada se não deve mostrar o banner
  if (!showBanner) return null;

  return (
    <>
      {/* Overlay sutil para dar destaque ao banner */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Banner principal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 pb-4 sm:pb-6">
          <div className="max-w-6xl mx-auto">
            {/* Card do banner com efeito glass */}
            <div className="glass-effect rounded-2xl shadow-elevated border border-gold/20 overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center">
                  {/* Ícone e conteúdo */}
                  <div className="flex gap-4 flex-1">
                    {/* Ícone de cookie */}
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gold/10 rounded-xl flex-shrink-0 border border-gold/30">
                      <Cookie className="w-6 h-6 lg:w-8 lg:h-8 text-gold" />
                    </div>

                    {/* Texto */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Cookie className="w-5 h-5 sm:hidden text-gold" />
                        Nós Valorizamos sua Privacidade
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                        Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar 
                        nosso tráfego. Ao clicar em "Aceitar Todos", você concorda com o uso de todos os cookies. 
                        Você pode gerenciar suas preferências a qualquer momento.
                        {' '}
                        <a 
                          href="/politica-de-cookies" 
                          className="text-gold hover:text-gold-light underline font-medium transition-colors inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Saiba mais
                        </a>
                      </p>

                      {/* Badges informativos */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full border border-gold/30">
                          ✓ Conformidade LGPD
                        </span>
                        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full border border-gold/30">
                          ✓ Conformidade GDPR
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:min-w-[200px]">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-gold hover:bg-gold-dark text-primary-foreground font-semibold 
                               shadow-lg hover:shadow-gold transition-all duration-300 
                               hover:scale-105 active:scale-95"
                    >
                      Aceitar Todos
                    </Button>
                    
                    <Button
                      onClick={handleCustomize}
                      variant="outline"
                      className="border-gold/50 hover:bg-gold/10 hover:border-gold font-medium
                               transition-all duration-300"
                    >
                      <Settings2 className="w-4 h-4 mr-2" />
                      Personalizar
                    </Button>
                    
                    <Button
                      onClick={handleRejectAll}
                      variant="ghost"
                      className="text-foreground hover:text-foreground hover:bg-white/5 
                               font-medium transition-all duration-300"
                    >
                      Rejeitar Todos
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto legal pequeno abaixo do banner */}
            <div className="mt-3 text-center">
              <p className="text-xs text-muted-foreground/60">
                Este site utiliza cookies conforme nossa Política de Privacidade e está em conformidade 
                com a LGPD (Lei Geral de Proteção de Dados) e GDPR.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de configurações */}
      <CookieSettingsModal
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={handleSaveCustom}
        initialConsent={consent}
      />
    </>
  );
};
