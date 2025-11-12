import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Shield, AlertCircle, Clock, CheckCircle2, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieSettingsModal } from '@/components/CookieSettingsModal';
import Footer from '@/components/Footer';

const PoliticaDeCookies = () => {
  const { consent, acceptCategories } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Section com Background */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-dark/90 via-slate-premium/80 to-background">
        {/* Partículas flutuantes de fundo */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: i % 3 === 0 ? '2px' : '4px',
                height: i % 3 === 0 ? '2px' : '4px',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.4 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-2xl border border-gold/30 mb-6">
              <Cookie className="w-10 h-10 text-gold" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Política de Cookies
            </h1>
            <p className="text-lg text-white mb-8">
              Entenda como utilizamos cookies e outras tecnologias para melhorar sua experiência
              em nosso site.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Conformidade LGPD
              </span>
              <span className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Conformidade GDPR
              </span>
              <span className="flex items-center gap-2 bg-slate-light/50 border border-gold/20 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-gold" />
                Atualizado em: Novembro 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Banner de Configurações */}
            <Card className="border-gold/30 bg-gold/5">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Settings2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Gerencie suas Preferências
                      </h3>
                      <p className="text-sm text-foreground">
                        Você pode controlar e personalizar o uso de cookies a qualquer momento.
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setShowSettings(true)}
                    className="bg-gold hover:bg-gold-dark text-primary-foreground whitespace-nowrap"
                  >
                    Configurar Cookies
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* O que são cookies */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                O que são Cookies?
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo 
                  (computador, tablet ou celular) quando você visita um site. Eles são amplamente 
                  utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer 
                  informações aos proprietários do site.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Os cookies permitem que o site reconheça seu dispositivo e armazene algumas 
                  informações sobre suas preferências ou ações anteriores, tornando sua experiência 
                  mais personalizada e eficiente.
                </p>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Como usamos cookies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Como Usamos Cookies
              </h2>
              <div className="space-y-6">
                
                {/* Cookie Necessários */}
                <Card className="border-gold/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center border border-gold/30">
                          <Shield className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <CardTitle className="text-gold">Cookies Necessários</CardTitle>
                          <CardDescription>Essenciais para o funcionamento do site</CardDescription>
                        </div>
                      </div>
                      <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">
                        Sempre Ativos
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Estes cookies são estritamente necessários para fornecer serviços disponíveis 
                      em nosso site e para usar alguns de seus recursos. Não podem ser desativados.
                    </p>
                    <p className="text-sm text-white font-semibold mb-2">Exemplos de uso:</p>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Autenticação e segurança.</li>
                      <li>Preferências de consentimento de cookies.</li>
                      <li>Funcionalidades essenciais do site.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Cookies Funcionais */}
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                          <Settings2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-gold">Cookies Funcionais</CardTitle>
                          <CardDescription>Melhoram a funcionalidade</CardDescription>
                        </div>
                      </div>
                      <span className="text-xs bg-muted text-white px-3 py-1 rounded-full">
                        Opcional
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Estes cookies permitem que o site forneça funcionalidade e personalização 
                      aprimoradas, como lembrar suas escolhas e preferências.
                    </p>
                    <p className="text-sm text-white font-semibold mb-2">Exemplos de uso:</p>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Preferências de idioma.</li>
                      <li>Configurações de layout e aparência.</li>
                      <li>Chat ao vivo e suporte.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Cookies Analíticos */}
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-gold">Cookies Analíticos</CardTitle>
                          <CardDescription>Coletam dados anônimos</CardDescription>
                        </div>
                      </div>
                      <span className="text-xs bg-muted text-foreground px-3 py-1 rounded-full">
                        Opcional
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Estes cookies nos ajudam a entender como os visitantes interagem com nosso 
                      site, coletando e relatando informações de forma anônima.
                    </p>
                    <p className="text-sm text-white font-semibold mb-2">Exemplos de uso:</p>
                    <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                      <li>Google Analytics - análise de tráfego.</li>
                      <li>Hotjar - mapas de calor e gravações.</li>
                      <li>Métricas de desempenho do site.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Cookies de Publicidade */}
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                          <Cookie className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-gold">Cookies de Publicidade</CardTitle>
                          <CardDescription>Personalizam anúncios</CardDescription>
                        </div>
                      </div>
                      <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        Opcional
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 mb-4">
                      Estes cookies são usados para tornar as mensagens publicitárias mais 
                      relevantes para você e seus interesses.
                    </p>
                    <p className="text-sm text-white font-semibold mb-2">Exemplos de uso:</p>
                    <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                      <li>Google Ads - publicidade direcionada.</li>
                      <li>Facebook Pixel - remarketing.</li>
                      <li>LinkedIn Insight - análise de conversão.</li>
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Gerenciar cookies */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Como Gerenciar Cookies
              </h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Você tem o controle total sobre quais cookies aceita. Pode gerenciar suas 
                  preferências de cookies a qualquer momento através do botão "Configurar Cookies" 
                  nesta página ou clicando no ícone de cookie no canto inferior esquerdo do site.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Além disso, a maioria dos navegadores permite que você recuse automaticamente 
                  cookies ou escolha aceitar cookies de sites específicos. Você pode encontrar 
                  instruções para gerenciar cookies nas configurações do seu navegador:
                </p>
                <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                  <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                  <li><strong>Firefox:</strong> Preferências → Privacidade e Segurança → Cookies</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                  <li><strong>Edge:</strong> Configurações → Privacidade e segurança → Cookies</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  <strong>Importante:</strong> Desativar cookies pode afetar a funcionalidade 
                  do site e impedir que você use todos os seus recursos.
                </p>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Seus direitos */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Seus Direitos (LGPD/GDPR)
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados) e GDPR (General Data 
                  Protection Regulation), você tem os seguintes direitos:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <Card className="border-gold/20 bg-card">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
                      <h3 className="font-semibold text-foreground mb-1">Consentimento</h3>
                      <p className="text-sm text-foreground">
                        Aceitar ou recusar cookies não essenciais
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-gold/20 bg-card">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
                      <h3 className="font-semibold text-foreground mb-1">Acesso</h3>
                      <p className="text-sm text-foreground">
                        Ver quais dados são coletados
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-gold/20 bg-card">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
                      <h3 className="font-semibold text-foreground mb-1">Revogação</h3>
                      <p className="text-sm text-foreground">
                        Revogar consentimento a qualquer momento
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-gold/20 bg-card">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
                      <h3 className="font-semibold text-foreground mb-1">Exclusão</h3>
                      <p className="text-sm text-foreground">
                        Solicitar exclusão de seus dados
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Atualizações */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Atualizações desta Política
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças 
                em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Quando atualizarmos esta política, alteraremos a data de "Última atualização" no 
                topo desta página. Recomendamos que você revise esta política regularmente.
              </p>
            </div>

            <Separator className="bg-border/50" />

            {/* Contato */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Entre em Contato
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Se você tiver dúvidas sobre esta Política de Cookies ou sobre como usamos cookies, 
                entre em contato conosco:
              </p>
              <Card className="border-gold/30 bg-gold/5">
                <CardContent className="pt-6">
                  <div className="space-y-2 text-foreground/90">
                    <p><strong>Email:</strong> contato@suaempresa.com.br</p>
                    <p><strong>WhatsApp:</strong> (XX) XXXXX-XXXX</p>
                    <p><strong>Endereço:</strong> Sua Cidade - UF</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Final */}
            <Card className="border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Pronto para Configurar suas Preferências?
                </h3>
                <p className="text-foreground mb-6 max-w-2xl mx-auto">
                  Personalize sua experiência gerenciando quais cookies você aceita.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={() => setShowSettings(true)}
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-primary-foreground"
                  >
                    <Settings2 className="w-5 h-5 mr-2" />
                    Configurar Cookies
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gold/50 hover:bg-gold/10"
                  >
                    <Link to="/">
                      Voltar ao Início
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

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
    </div>
  );
};

export default PoliticaDeCookies;
