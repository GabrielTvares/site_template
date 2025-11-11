/**
 * Hook para gerenciar consentimento de cookies
 * Compatível com LGPD e GDPR
 */

import { useState, useEffect, useCallback } from 'react';
import type { CookieConsent, CookieCategory } from '@/types/cookies';
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_VERSION } from '@/types/cookies';

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  functional: false,
  analytics: false,
  advertising: false,
  timestamp: Date.now(),
  version: COOKIE_CONSENT_VERSION
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Carregar consentimento do localStorage ao montar o componente
  useEffect(() => {
    const loadConsent = () => {
      try {
        const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (stored) {
          const parsed: CookieConsent = JSON.parse(stored);
          
          // Verificar se a versão mudou (política atualizada)
          if (parsed.version === COOKIE_CONSENT_VERSION) {
            setConsent(parsed);
            setShowBanner(false);
            
            // Aplicar consentimento aos scripts
            applyConsent(parsed);
          } else {
            // Versão diferente - mostrar banner novamente
            setShowBanner(true);
          }
        } else {
          // Primeira visita - mostrar banner
          setShowBanner(true);
        }
      } catch (error) {
        console.error('Erro ao carregar consentimento de cookies:', error);
        setShowBanner(true);
      }
    };

    loadConsent();
  }, []);

  // Salvar consentimento no localStorage
  const saveConsent = useCallback((newConsent: CookieConsent) => {
    try {
      const consentToSave = {
        ...newConsent,
        timestamp: Date.now(),
        version: COOKIE_CONSENT_VERSION,
        necessary: true // Sempre true
      };
      
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentToSave));
      setConsent(consentToSave);
      setShowBanner(false);
      
      // Aplicar consentimento aos scripts
      applyConsent(consentToSave);
      
      // Disparar evento customizado para que outras partes do app possam reagir
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
        detail: consentToSave 
      }));
    } catch (error) {
      console.error('Erro ao salvar consentimento de cookies:', error);
    }
  }, []);

  // Aceitar todos os cookies
  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      timestamp: Date.now(),
      version: COOKIE_CONSENT_VERSION
    });
  }, [saveConsent]);

  // Rejeitar cookies não essenciais
  const rejectAll = useCallback(() => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
      timestamp: Date.now(),
      version: COOKIE_CONSENT_VERSION
    });
  }, [saveConsent]);

  // Aceitar categorias específicas
  const acceptCategories = useCallback((categories: Partial<CookieConsent>) => {
    saveConsent({
      ...DEFAULT_CONSENT,
      ...categories,
      necessary: true, // Sempre true
      timestamp: Date.now(),
      version: COOKIE_CONSENT_VERSION
    });
  }, [saveConsent]);

  // Reabrir as configurações de cookies
  const reopenSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  // Revogar consentimento
  const revokeConsent = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
    
    // Recarregar a página para remover scripts carregados
    window.location.reload();
  }, []);

  return {
    consent,
    showBanner,
    acceptAll,
    rejectAll,
    acceptCategories,
    reopenSettings,
    revokeConsent,
    hasConsent: consent !== null
  };
};

/**
 * Aplica o consentimento do usuário, carregando ou bloqueando scripts
 * Esta função é onde você deve integrar seus scripts de terceiros
 */
function applyConsent(consent: CookieConsent) {
  // COOKIES FUNCIONAIS
  if (consent.functional) {
    console.log('✅ Cookies funcionais habilitados');
    
    // EXEMPLO: Carregar scripts funcionais
    // loadScript('https://example.com/functional-script.js');
    
    // EXEMPLO: Ativar chat ao vivo
    // if (window.LiveChat) {
    //   window.LiveChat.init();
    // }
  } else {
    console.log('❌ Cookies funcionais desabilitados');
  }

  // COOKIES ANALÍTICOS
  if (consent.analytics) {
    console.log('✅ Cookies analíticos habilitados');
    
    // Google Analytics 4
    loadGoogleAnalytics('G-2K4ETPY0L2');
    
    // EXEMPLO: Hotjar
    // loadHotjar(HOTJAR_ID, HOTJAR_VERSION);
    
    // EXEMPLO: Microsoft Clarity
    // loadClarity('CLARITY_ID');
  } else {
    console.log('❌ Cookies analíticos desabilitados');
    
    // Desabilitar GA se já estiver carregado
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  }

  // COOKIES DE PUBLICIDADE
  if (consent.advertising) {
    console.log('✅ Cookies de publicidade habilitados');
    
    // EXEMPLO: Google Ads
    // loadScript('https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX');
    
    // Meta Pixel (Facebook + Instagram) - Substitua 'YOUR_PIXEL_ID' pelo seu ID real
    // ⚠️ IMPORTANTE: Um único Pixel rastreia Facebook E Instagram automaticamente!
    // Obtenha seu Pixel ID em: https://business.facebook.com → Gerenciador de Eventos
    // Exemplo: loadFacebookPixel('1234567890123456');
    // loadFacebookPixel('YOUR_PIXEL_ID');
    
    // LinkedIn Insight Tag - Substitua 'PARTNER_ID' pelo seu ID real
    // Obtenha seu Partner ID em: https://www.linkedin.com/campaignmanager → Insight Tag
    // Exemplo: loadLinkedInInsight('123456');
    loadLinkedInInsight('PARTNER_ID');
  } else {
    console.log('❌ Cookies de publicidade desabilitados');
    
    // Desabilitar ads se já estiver carregado
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  }
}

/**
 * FUNÇÕES AUXILIARES PARA CARREGAR SCRIPTS DE TERCEIROS
 * Descomente e adapte conforme necessário
 */

// Função genérica para carregar scripts
function loadScript(src: string, id?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Verificar se o script já existe
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (id) script.id = id;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
}

// Google Analytics 4
function loadGoogleAnalytics(measurementId: string) {
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, 'ga-script')
    .then(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', measurementId, {
        anonymize_ip: true, // Para conformidade com GDPR
        cookie_flags: 'SameSite=None;Secure'
      });
      (window as any).gtag = gtag;
    })
    .catch(console.error);
}

// Hotjar
function loadHotjar(hjid: number, hjsv: number) {
  (window as any).hj = (window as any).hj || function(...args: any[]) {
    ((window as any).hj.q = (window as any).hj.q || []).push(args);
  };
  (window as any)._hjSettings = { hjid, hjsv };
  
  loadScript(`https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}`, 'hotjar-script')
    .catch(console.error);
}

// Meta Pixel (Facebook + Instagram)
// Um único Pixel rastreia conversões de Facebook E Instagram automaticamente
function loadFacebookPixel(pixelId: string) {
  (window as any).fbq = function(...args: any[]) {
    ((window as any).fbq.callMethod ? 
      (window as any).fbq.callMethod(...args) : 
      ((window as any).fbq.queue = (window as any).fbq.queue || []).push(args));
  };
  (window as any)._fbq = (window as any).fbq;
  (window as any).fbq.push = (window as any).fbq;
  (window as any).fbq.loaded = true;
  (window as any).fbq.version = '2.0';
  (window as any).fbq.queue = [];
  
  loadScript('https://connect.facebook.net/en_US/fbevents.js', 'facebook-pixel')
    .then(() => {
      (window as any).fbq('init', pixelId);
      (window as any).fbq('track', 'PageView');
      console.log('✅ Meta Pixel (Facebook + Instagram) carregado com sucesso');
    })
    .catch(console.error);
}

// LinkedIn Insight Tag
function loadLinkedInInsight(partnerId: string) {
  (window as any)._linkedin_partner_id = partnerId;
  (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
  (window as any)._linkedin_data_partner_ids.push((window as any)._linkedin_partner_id);
  
  loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js', 'linkedin-insight')
    .catch(console.error);
}

// Declarações TypeScript para window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: any;
    _hjSettings: any;
    fbq: any;
    _fbq: any;
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
    LiveChat: any;
  }
}
