/**
 * Modal de configurações de cookies
 * Permite ao usuário escolher categorias individuais
 */

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Shield, CheckCircle2, Info } from 'lucide-react';
import { COOKIE_CATEGORIES, type CookieConsent, type CookieCategory } from '@/types/cookies';

interface CookieSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (consent: Partial<CookieConsent>) => void;
  initialConsent?: CookieConsent | null;
}

export const CookieSettingsModal = ({ 
  open, 
  onOpenChange, 
  onSave,
  initialConsent 
}: CookieSettingsModalProps) => {
  const [preferences, setPreferences] = useState<Record<CookieCategory, boolean>>({
    necessary: true,
    functional: initialConsent?.functional ?? false,
    analytics: initialConsent?.analytics ?? false,
    advertising: initialConsent?.advertising ?? false,
  });

  // Atualizar preferências quando o modal abrir ou initialConsent mudar
  useEffect(() => {
    if (open && initialConsent) {
      setPreferences({
        necessary: true,
        functional: initialConsent.functional ?? false,
        analytics: initialConsent.analytics ?? false,
        advertising: initialConsent.advertising ?? false,
      });
    }
  }, [open, initialConsent]);

  // Escutar mudanças de consentimento de cookies de outras partes do app
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      const newConsent = event.detail;
      setPreferences({
        necessary: true,
        functional: newConsent?.functional ?? false,
        analytics: newConsent?.analytics ?? false,
        advertising: newConsent?.advertising ?? false,
      });
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  const handleToggle = (category: CookieCategory, value: boolean) => {
    if (category === 'necessary') return; // Não pode ser desativado
    
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSave = () => {
    onSave(preferences);
    onOpenChange(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    onSave(allAccepted);
    onOpenChange(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
    };
    setPreferences(onlyNecessary);
    onSave(onlyNecessary);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] bg-card border-gold/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-gold">
            <Shield className="w-6 h-6" />
            Configurações de Cookies
          </DialogTitle>
          <DialogDescription className="text-foreground">
            Gerencie suas preferências de cookies. Você pode alterar essas configurações a qualquer momento.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[50vh] pr-4">
          <div className="space-y-6 py-4">
            {/* Informações sobre privacidade */}
            <div className="bg-slate-light/50 border border-gold/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground/90">
                  <p className="font-semibold mb-1">Sua privacidade é importante</p>
                  <p>
                    Usamos cookies para melhorar sua experiência, analisar o tráfego do site e 
                    personalizar conteúdo. Alguns cookies são essenciais para o funcionamento do site.
                  </p>
                </div>
              </div>
            </div>

            {/* Lista de categorias de cookies */}
            {COOKIE_CATEGORIES.map((category, index) => (
              <div key={category.id}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Label 
                        htmlFor={category.id}
                        className="text-base font-semibold text-foreground cursor-pointer"
                      >
                        {category.name}
                      </Label>
                      {category.required && (
                        <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                          Obrigatório
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-foreground">
                      {category.description}
                    </p>
                    
                    {category.examples.length > 0 && (
                      <details className="text-xs text-foreground/80">
                        <summary className="cursor-pointer hover:text-gold transition-colors outline-none focus-visible:text-gold focus-visible:underline list-none [&::-webkit-details-marker]:hidden">
                          Ver exemplos
                        </summary>
                        <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                          {category.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch
                      id={category.id}
                      checked={preferences[category.id]}
                      onCheckedChange={(checked) => handleToggle(category.id, checked)}
                      disabled={category.required}
                      className="data-[state=checked]:bg-gold"
                    />
                    {category.required && (
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    )}
                  </div>
                </div>
                
                {index < COOKIE_CATEGORIES.length - 1 && (
                  <Separator className="mt-6 bg-border/50" />
                )}
              </div>
            ))}

            {/* Link para política de privacidade */}
            <div className="pt-4">
              <p className="text-sm text-foreground">
                Para mais informações, consulte nossa{' '}
                <a 
                  href="/politica-de-privacidade" 
                  className="text-gold hover:text-gold-light underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
                {' '}e{' '}
                <a 
                  href="/politica-de-cookies" 
                  className="text-gold hover:text-gold-light underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={handleRejectAll}
            className="border-gold/30 hover:bg-gold/10 hover:border-gold/50 transition-all"
          >
            Rejeitar Todos
          </Button>
          <Button
            variant="outline"
            onClick={handleSave}
            className="border-gold/50 hover:bg-gold/10 hover:border-gold transition-all"
          >
            Salvar Preferências
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-gold hover:bg-gold-dark text-primary-foreground transition-all"
          >
            Aceitar Todos
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
