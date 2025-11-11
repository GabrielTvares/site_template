/**
 * Botão flutuante para gerenciar preferências de cookies
 * Permite ao usuário alterar ou revogar o consentimento a qualquer momento
 * Fica fixo na parte inferior esquerda da tela
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, Settings2, Shield, Trash2 } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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

export const CookiePreferencesButton = () => {
  const { consent, reopenSettings, acceptCategories, revokeConsent, hasConsent } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [showRevokeDialog, setShowRevokeDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Não mostrar se ainda não deu consentimento (banner está visível)
  if (!hasConsent) return null;

  const handleOpenSettings = () => {
    setShowSettings(true);
    setShowMenu(false);
  };

  const handleRevokeConsent = () => {
    revokeConsent();
    setShowRevokeDialog(false);
    setShowMenu(false);
  };

  const handleSavePreferences = (preferences: any) => {
    acceptCategories(preferences);
    setShowSettings(false);
  };

  return (
    <>
      {/* Container do botão e menu */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col-reverse items-start gap-2">
        {/* Menu expandido */}
        {showMenu && (
          <div className="glass-effect rounded-xl border border-gold/20 shadow-elevated overflow-hidden 
                        animate-in slide-in-from-bottom-2 duration-300 mb-2">
            <div className="p-2 space-y-1 min-w-[200px]">
              <button
                onClick={handleOpenSettings}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                         text-sm text-foreground hover:bg-gold/10 transition-all duration-200
                         hover:translate-x-1"
              >
                <Settings2 className="w-4 h-4 text-gold" />
                <span>Configurações</span>
              </button>
              
              <button
                onClick={() => {
                  setShowRevokeDialog(true);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                         text-sm text-foreground hover:text-destructive 
                         hover:bg-destructive/10 transition-all duration-200
                         hover:translate-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Revogar Consentimento</span>
              </button>

              <div className="pt-2 px-3 border-t border-border/50">
                <p className="text-xs text-foreground">
                  Status: {consent ? 'Configurado' : 'Pendente'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Botão principal */}
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setShowMenu(!showMenu)}
                size="lg"
                className={`h-14 w-14 rounded-full shadow-lg border-2 transition-all duration-300
                          ${showMenu 
                            ? 'bg-gold hover:bg-gold-dark border-gold rotate-90' 
                            : 'bg-card hover:bg-card/80 border-gold/30 hover:border-gold hover:scale-110'
                          }`}
              >
                <Cookie className={`w-6 h-6 transition-colors duration-300 ${
                  showMenu ? 'text-primary-foreground' : 'text-gold'
                }`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-card border-gold/20"
            >
              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                Preferências de Cookies
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Modal de configurações */}
      <CookieSettingsModal
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={handleSavePreferences}
        initialConsent={consent}
      />

      {/* Dialog de confirmação para revogar */}
      <AlertDialog open={showRevokeDialog} onOpenChange={setShowRevokeDialog}>
        <AlertDialogContent className="bg-card border-gold/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-gold">
              <Shield className="w-5 h-5" />
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
              onClick={handleRevokeConsent}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Sim, Revogar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
