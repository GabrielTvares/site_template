import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Database, FileText, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-petrol-dark/90 via-petrol/80 to-background">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gold animate-float ${
                i % 3 === 0 ? 'w-1 h-1' : 'w-1.5 h-1.5'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.4 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-petrol-light/50 border border-gold/20 text-gold px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Atualizado em Novembro de 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Política de Privacidade
            </h1>
            
            <p className="text-lg text-white/80 mb-8">
              Transparência e segurança no tratamento dos seus dados pessoais
            </p>

            <Link to="/">
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introdução */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <FileText className="w-6 h-6" />
                  1. Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <p>
                  O <strong className="text-foreground">Navi BI</strong>, plataforma de Business Intelligence que transforma dados em decisões estratégicas, está comprometido em proteger a privacidade e os dados pessoais de todos os nossos usuários, clientes e visitantes do site.
                </p>
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma de análise de dados, dashboards interativos, relatórios financeiros automatizados e demais serviços.
                </p>
                <p>
                  Esta política está em conformidade com a <strong className="text-foreground">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>, o <strong className="text-foreground">Marco Civil da Internet (Lei nº 12.965/2014)</strong> e o <strong className="text-foreground">Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>.
                </p>
                <p>
                  Ao utilizar nossos serviços, você concorda com os termos desta política. Recomendamos a leitura completa deste documento.
                </p>
              </CardContent>
            </Card>

            {/* Dados Coletados */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Database className="w-6 h-6" />
                  2. Dados Coletados
                </CardTitle>
                <CardDescription>Informações que podemos coletar sobre você</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">2.1. Dados Fornecidos Voluntariamente</h4>
                    <ul className="list-disc list-inside space-y-2 text-white ml-4">
                      <li><strong>Dados de identificação:</strong> nome completo, sexo, CPF, e-mail, telefone, WhatsApp.</li>
                      <li><strong>Dados empresariais:</strong> nome da empresa, cargo, CNPJ, setor de atuação, endereço, sócios.</li>
                      <li><strong>Dados de comunicação:</strong> mensagens enviadas através de formulários de contato, WhatsApp ou e-mail.</li>
                      <li><strong>Dados de demonstração:</strong> informações fornecidas durante solicitações de demo da plataforma Navi BI.</li>
                      <li><strong>Dados de uso da plataforma:</strong> informações sobre dashboards acessados, relatórios gerados e preferências de análise (quando aplicável).</li>
                    </ul>
                  </div>

                  <Separator className="bg-gold/10" />

                  <div>
                    <h4 className="font-semibold text-white mb-2">2.2. Dados Coletados Automaticamente</h4>
                    <ul className="list-disc list-inside space-y-2 text-white ml-4">
                      <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, URL de origem.</li>
                      <li><strong>Dados de dispositivo:</strong> sistema operacional, resolução de tela, idioma, tipo de dispositivo (desktop/mobile).</li>
                      <li><strong>Cookies e tecnologias similares:</strong> conforme descrito em nossa <Link to="/politica-de-cookies" className="text-gold hover:underline">Política de Cookies</Link>.</li>
                      <li><strong>Dados de interação:</strong> cliques em elementos, tempo de permanência, scroll, seções visitadas.</li>
                      <li><strong>Dados de desempenho:</strong> velocidade de carregamento, erros técnicos, performance da plataforma.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalidade do Uso dos Dados */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Eye className="w-6 h-6" />
                  3. Finalidade do Uso dos Dados
                </CardTitle>
                <CardDescription>Como utilizamos suas informações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Prestação de serviços de BI:</strong> fornecer acesso à plataforma Navi BI, dashboards interativos, relatórios financeiros (DRE), análises de dados, funcionalidades de Business Intelligence e demais relatórios.</li>
                    <li><strong>Comunicação:</strong> responder suas solicitações via e-mail ou WhatsApp, enviar confirmações de demonstrações agendadas e prestar suporte técnico.</li>
                    <li><strong>Marketing (com consentimento):</strong> enviar newsletters, mensagens via Whatsapp e SMS sobre funcionalidades da plataforma, novidades em análise de dados, cases de sucesso e ofertas personalizadas.</li>
                    <li><strong>Análise e melhoria:</strong> entender como você usa nosso site e plataforma para melhorar a experiência do usuário, desenvolver novas funcionalidades de BI e otimizar dashboards.</li>
                    <li><strong>Segurança e integridade:</strong> proteger contra fraudes, acessos não autorizados, atividades maliciosas e garantir a segurança dos dados armazenados na plataforma.</li>
                    <li><strong>Cumprimento legal:</strong> atender obrigações legais, regulatórias, fiscais e trabalhistas, incluindo emissão de notas fiscais e contratos.</li>
                    <li><strong>Suporte técnico especializado:</strong> resolver problemas técnicos relacionados a dashboards, relatórios, integrações de dados e prestar assistência personalizada.</li>
                    <li><strong>Personalização:</strong> adaptar a experiência na plataforma conforme suas preferências e necessidades de análise de dados.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Base Legal */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <UserCheck className="w-6 h-6" />
                  4. Base Legal para Tratamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Consentimento:</strong> quando você nos autoriza expressamente.</li>
                    <li><strong>Execução de contrato:</strong> para fornecer os serviços contratados.</li>
                    <li><strong>Legítimo interesse:</strong> para melhorias, segurança e análises.</li>
                    <li><strong>Obrigação legal:</strong> quando exigido por lei.</li>
                    <li><strong>Exercício regular de direitos:</strong> em processos judiciais e administrativos.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compartilhamento de Dados */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Database className="w-6 h-6" />
                  5. Compartilhamento de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>Seus dados pessoais podem ser compartilhados nas seguintes situações:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Prestadores de serviços tecnológicos:</strong> Google Cloud para hospedagem do site, provedores de e-mail, serviços de análise de dados e ferramentas de comunicação como WhatsApp Business.</li>
                    <li><strong>Ferramentas de Business Intelligence:</strong> quando necessário para integração com outras plataformas de análise (com seu consentimento).</li>
                    <li><strong>Parceiros comerciais:</strong> somente com seu consentimento prévio e explícito.</li>
                    <li><strong>Autoridades legais:</strong> quando exigido por lei, ordem judicial, requisição de órgãos governamentais ou ANPD (Autoridade Nacional de Proteção de Dados).</li>
                    <li><strong>Proteção de direitos:</strong> para proteger nossos direitos, segurança, propriedade intelectual e prevenir fraudes.</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Garantia Importante:</strong> Não vendemos, alugamos ou comercializamos seus dados pessoais para terceiros. Todos os dados compartilhados com prestadores de serviços são protegidos por contratos de confidencialidade e acordos de processamento de dados conforme a LGPD.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Segurança dos Dados */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Lock className="w-6 h-6" />
                  6. Segurança dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>Implementamos medidas técnicas e organizacionais robustas para proteger seus dados pessoais:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Criptografia SSL/TLS:</strong> todo tráfego de dados entre seu navegador e nossos servidores é criptografado usando protocolo HTTPS.</li>
                    <li><strong>Google Cloud Security:</strong> hospedagem em infraestrutura Google Cloud com certificações ISO 27001, SOC 2 e conformidade LGPD.</li>
                    {/* <li><strong>Controle de acesso rigoroso:</strong> autenticação multifator, permissões baseadas em funções e logs de acesso.</li> */}
                    <li><strong>Controle de acesso:</strong> permissões baseadas em funções e logs de acesso.</li>
                    <li><strong>Monitoramento 24/7:</strong> sistemas automatizados de detecção de ameaças, vulnerabilidades e tentativas de invasão.</li>
                    <li><strong>Backups regulares:</strong> cópias de segurança automáticas e distribuídas geograficamente para recuperação de dados.</li>
                    <li><strong>Treinamento contínuo:</strong> capacitação da equipe sobre LGPD, privacidade, segurança da informação e melhores práticas.</li>
                    <li><strong>Auditorias e testes:</strong> revisões periódicas de segurança, testes de penetração e avaliações de vulnerabilidade.</li>
                    <li><strong>Headers de segurança:</strong> implementação de X-Content-Type-Options, X-Frame-Options e X-XSS-Protection.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Retenção de Dados */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Clock className="w-6 h-6" />
                  7. Retenção de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>Mantemos seus dados pessoais apenas pelo tempo necessário para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cumprir as finalidades para as quais foram coletados.</li>
                    <li>Atender obrigações legais e regulatórias.</li>
                    <li>Resolver disputas e fazer cumprir nossos acordos.</li>
                  </ul>
                  <p className="mt-4">
                    Após o término desses períodos, os dados são eliminados de forma segura ou anonimizados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Direitos do Titular */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Shield className="w-6 h-6" />
                  8. Seus Direitos (LGPD e GDPR)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                  <div className="grid gap-4 mt-4">
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Confirmação e Acesso</h4>
                      <p>Confirmar se tratamos seus dados e solicitar acesso a eles.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Correção</h4>
                      <p>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Anonimização, Bloqueio ou Eliminação</h4>
                      <p>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Portabilidade</h4>
                      <p>Solicitar a portabilidade dos dados a outro fornecedor de serviço.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Eliminação de Dados Tratados com Consentimento</h4>
                      <p>Solicitar a eliminação dos dados pessoais tratados com base no seu consentimento.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Informação sobre Compartilhamento</h4>
                      <p>Obter informações sobre com quem compartilhamos seus dados.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Revogação do Consentimento</h4>
                      <p>Revogar o consentimento a qualquer momento.</p>
                    </div>
                    <div className="p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                      <h4 className="font-semibold text-white mb-2">✓ Oposição</h4>
                      <p>Se opor ao tratamento realizado com base em legítimo interesse.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Eye className="w-6 h-6" />
                  9. Cookies e Tecnologias Similares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site e plataforma. Para informações detalhadas sobre como usamos cookies, consulte nossa <Link to="/politica-de-cookies" className="text-gold hover:underline font-semibold">Política de Cookies</Link>.
                  </p>
                  <p>
                    Você pode gerenciar suas preferências de cookies a qualquer momento através do banner de consentimento ou das configurações do seu navegador.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Alterações */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <FileText className="w-6 h-6" />
                  10. Alterações nesta Política
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
                  </p>
                  <p>
                    Quando fizermos alterações significativas, notificaremos você por e-mail (se fornecido) ou através de um aviso destacado em nosso site antes da alteração entrar em vigor.
                  </p>
                  <p>
                    Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos seus dados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Mail className="w-6 h-6" />
                  11. Contato e Encarregado de Dados (DPO)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-white">
                  <p>
                    Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações relacionadas a esta Política de Privacidade, entre em contato conosco:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">E-mail</p>
                        <a href="mailto:contato@suaempresa.com.br" className="text-gold hover:underline">
                          contato@suaempresa.com.br
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">WhatsApp / Telefone</p>
                        {/* <a href="https://wa.me/5532988539406" className="text-gold hover:underline">
                          (32) 98853-9406
                        </a>
                        <br />
                        <a href="tel:+553287091291" className="text-gold hover:underline">
                          (32) 98709-1291
                        </a> */}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Endereço</p>
                        <p>Juiz de Fora - MG</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Encarregado de Dados (DPO)</p>
                        <p>Maycon Pires</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-petrol-light/10 rounded-lg border border-gold/10">
                    <p className="text-sm">
                      <strong className="text-white">Tempo de Resposta:</strong> Responderemos suas solicitações em até 15 dias úteis, conforme estabelecido pela LGPD.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lei Aplicável */}
            <Card className="border-gold/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gold">
                  <Shield className="w-6 h-6" />
                  12. Lei Aplicável e Jurisdição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white">
                  <p>
                    Esta Política de Privacidade é regida pela legislação brasileira, especialmente pela Lei nº 13.709/2018 (LGPD), pelo Marco Civil da Internet (Lei nº 12.965/2014) e pelo Código de Defesa do Consumidor (Lei nº 8.078/1990).
                  </p>
                  <p>
                    Qualquer controvérsia decorrente desta política será submetida à jurisdição do foro da comarca de Juiz de Fora - MG.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <div className="text-center p-8 bg-gradient-to-r from-petrol-dark/50 to-petrol/50 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tem dúvidas sobre privacidade?
              </h3>
              <p className="text-white/80 mb-6">
                Nossa equipe está pronta para esclarecer qualquer questão sobre como tratamos seus dados.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#contato">
                  <Button className="bg-gold hover:bg-gold-dark text-black-soft">
                    <Mail className="w-4 h-4 mr-2" />
                    Entre em Contato
                  </Button>
                </Link>
                <Link to="/politica-de-cookies">
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    Ver Política de Cookies
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
