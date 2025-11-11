/**
 * Tipos para o sistema de consentimento de cookies
 * Compatível com LGPD e GDPR
 */

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'advertising';

export interface CookieConsent {
  necessary: boolean; // Sempre true, não pode ser desativado
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp: number;
  version: string; // Versão da política de cookies
}

export interface CookieCategoryInfo {
  id: CookieCategory;
  name: string;
  description: string;
  required: boolean;
  examples: string[];
}

export const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: 'necessary',
    name: 'Cookies Necessários',
    description: 'Essenciais para o funcionamento básico do site. Não podem ser desativados.',
    required: true,
    examples: ['Sessão do usuário', 'Preferências de consentimento', 'Segurança']
  },
  {
    id: 'functional',
    name: 'Cookies Funcionais',
    description: 'Permitem funcionalidades aprimoradas e personalização, como lembrar suas preferências.',
    required: false,
    examples: ['Preferências de idioma', 'Configurações de layout', 'Chat ao vivo']
  },
  {
    id: 'analytics',
    name: 'Cookies Analíticos',
    description: 'Ajudam-nos a entender como os visitantes interagem com o site, coletando dados anônimos.',
    required: false,
    examples: ['Google Analytics', 'Hotjar', 'Métricas de desempenho']
  },
  {
    id: 'advertising',
    name: 'Cookies de Publicidade',
    description: 'Usados para exibir anúncios relevantes e medir a eficácia de campanhas publicitárias.',
    required: false,
    examples: ['Google Ads', 'Facebook Pixel', 'Remarketing']
  }
];

export const COOKIE_CONSENT_VERSION = '1.0.0';
export const COOKIE_CONSENT_KEY = 'navi-bi-cookie-consent';
