# 🚀 Navi BI - Plataforma de Business Intelligence

## 📋 Sobre o Projeto

Landing page moderna e responsiva desenvolvida para apresentar a solução de Business Intelligence do Navi Bi. O projeto utiliza tecnologias de ponta para oferecer uma experiência de usuário excepcional.

## 🛠️ Tecnologias Utilizadas

- **React 18+** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool ultra-rápido
- **TailwindCSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes React reutilizáveis e acessíveis
- **Lucide React** - Biblioteca de ícones modernos
- **React Router** - Navegação entre páginas
- **Firebase Hosting** - Hospedagem em produção

## 📁 Estrutura do Projeto

```
navi bi 2.0/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── ui/          # Componentes base (Shadcn)
│   │   ├── Header.tsx   # Cabeçalho com navegação
│   │   ├── Footer.tsx   # Rodapé
│   │   ├── Hero.tsx     # Seção hero
│   │   ├── ValueCard.tsx # Cards de valores
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── Index.tsx    # Página inicial
│   │   ├── QuemSomos.tsx # Página sobre
│   │   └── NotFound.tsx # Página 404
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   └── assets/          # Imagens e recursos
├── dist/                # Build de produção
├── firebase.json        # Configuração Firebase
└── package.json         # Dependências do projeto
```

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta no Firebase (para deploy)

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/GabrielTvares/navibi.git
cd "navi bi 2.0"
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

### 3️⃣ Execute o Projeto Localmente

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 🚀 Deploy no Firebase Hosting

### 1. Instalar o Firebase CLI (caso ainda não tenha)

```bash
npm install -g firebase-tools
```

### 2. Fazer login no Firebase

```bash
firebase login
```

### 3. Inicializar o Firebase Hosting dentro do seu projeto

```bash
firebase init
```

**3.1. Selecione o tipo de serviço:**
- ✅ Hosting: configure files for Firebase Hosting

**3.2. Seleção de projeto:**
- ✅ Use an existing project
- Selecione: `navibi-178bf`

**3.3. Public directory:**
Quando perguntar "What do you want to use as your public directory?", digite:
```
dist
```

**3.4. Configure as a single-page app:**
Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
```
y
```

### 4. Gere o build do projeto

```bash
npm run build
```

### 5. Faça o deploy

```bash
firebase deploy --only hosting
```

Ou para deploy completo:
```bash
firebase deploy
```

## 🌐 URL de Produção

**Site oficial:** [navibi.ai];[https://navibi-site.web.app].

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build localmente
npm run lint         # Executa o linter
```

## 🎨 Características do Projeto

### ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves e parallax
- ✅ Navegação fluida entre páginas
- ✅ Cards informativos com hover effects
- ✅ Formulário de contato integrado
- ✅ Botão WhatsApp flutuante
- ✅ Menu hamburguer mobile otimizado
- ✅ SEO otimizado
- ✅ Performance otimizada (PWA-ready)

### 🎯 Seções Principais

1. **Home** - Apresentação e call-to-action
2. **Quem Somos** - História e valores da empresa
3. **Pilares** - Propósito, Missão e Visão
4. **TURBINE** - 7 valores fundamentais (T-U-R-B-I-N-E)
5. **Contato** - Formulário e informações

## 🔧 Configurações de Cache (Firebase)

O projeto utiliza cache agressivo para otimizar performance:

- **Imagens/Fontes:** Cache de 1 ano (immutable)
- **JS/CSS:** Cache de 1 ano (immutable)
- **JSON/XML:** Cache de 1 hora
- **index.html:** Sempre revalidado (max-age=0)

## 👥 Componentes Principais

### ValueCard
Cards customizáveis com dois tamanhos:
- **Compact** (330px altura) - Para Pilares (Propósito, Missão, Visão)
- **Full** (523px altura) - Para seção TURBINE (T, U, R, B, I, N, E)
- **Largura:** 280px (padrão para todos)

### Header
Menu responsivo com:
- Links de navegação
- Menu hamburguer mobile (z-index otimizado)
- Active state visual
- Scroll suave para seções

### Hero
Seção inicial com:
- Background parallax
- Partículas douradas animadas
- Call-to-action destacado
- Gradientes personalizados

### Footer
Rodapé com:
- Logo da empresa
- Links de redes sociais (LinkedIn, Instagram)
- Copyright e informações

## 🐛 Troubleshooting

### Limpar cache do Vite

```bash
rm -rf node_modules/.vite && rm -rf .vite && rm -rf dist && rm -rf .cache
```

### Reinstalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build

```bash
npm run build -- --mode production
```

### Verificar erros de TypeScript

```bash
npm run lint
```

## 🎨 Paleta de Cores

- **Petrol Dark:** `#012739` - Cor principal de fundo
- **Gold:** Dourado - Destaques e CTAs
- **White:** Branco - Textos principais
- **Gradientes:** Transições suaves entre petrol e gold

## 📱 Responsividade

### Breakpoints TailwindCSS:
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🔒 Headers de Segurança

O projeto implementa headers de segurança via Firebase Hosting:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📈 Performance

### Otimizações Implementadas:

- ✅ Lazy loading de imagens
- ✅ Code splitting automático (Vite)
- ✅ Minificação de JS/CSS
- ✅ Compressão gzip no Firebase
- ✅ Cache agressivo de assets
- ✅ Fontes otimizadas
- ✅ Imagens com dimensões fixas

### Métricas:

- **Build time:** ~6-7 segundos
- **Bundle size:** ~475KB (JS) + 73KB (CSS)
- **Gzip:** ~150KB (JS) + 12.5KB (CSS)

## 📝 Licença

Projeto proprietário © 2025 Navi BI

## 👨‍💻 Desenvolvido por

**Maycon Pires** - Fundador do Navi BI
**Gabriel Tavares** - Desenvolvedor no Navi BI

---

**Status do Projeto:** ✅ Em Produção

**Última atualização:** 23 de outubro de 2025

**Repositório:** [github.com/GabrielTvares/navibi](https://github.com/GabrielTvares/navibi)
