# 🚀 Template TurbinEduca - React + TypeScript + TailwindCSS

## 📋 Sobre o Template

Template moderno e responsivo para criação de landing pages e sites institucionais. Desenvolvido com as melhores práticas e tecnologias atuais do mercado.

## 🛠️ Tecnologias Incluídas

- **React 18+** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool ultra-rápido
- **TailwindCSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes React reutilizáveis e acessíveis
- **Lucide React** - Biblioteca de ícones modernos
- **React Router** - Navegação entre páginas
- **Framer Motion** - Animações fluidas

## 📁 Estrutura do Projeto

```
template/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── ui/          # Componentes base (Shadcn)
│   │   ├── Header.tsx   # Cabeçalho com navegação
│   │   ├── Footer.tsx   # Rodapé
│   │   ├── Hero.tsx     # Seção hero
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── Index.tsx    # Página inicial
│   │   └── NotFound.tsx # Página 404
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   └── assets/          # Imagens e recursos
├── public/              # Arquivos públicos
└── package.json         # Dependências do projeto
```

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/GabrielTvares/navibi.git
cd turbineduca-template
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

### 3️⃣ Execute o Projeto Localmente

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build localmente
npm run lint         # Executa o linter
```

## 🎨 Características do Template

### ✨ Funcionalidades Incluídas

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ Navegação fluida entre páginas
- ✅ Cards informativos com hover effects
- ✅ Formulário de contato
- ✅ Botão WhatsApp flutuante
- ✅ Menu hamburguer mobile
- ✅ Sistema de Cookies (LGPD)
- ✅ SEO otimizado
- ✅ Performance otimizada

### 🎯 Seções de Exemplo

1. **Home** - Página inicial com Hero
2. **Quem Somos** - Página institucional
3. **Contato** - Formulário de contato
4. **404** - Página de erro personalizada

## 👥 Componentes Disponíveis

### Shadcn/ui Components
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Accordions, Tabs, Tooltips
- Toast notifications
- E muito mais...

### Custom Components
- **Header** - Menu responsivo com navegação
- **Footer** - Rodapé com informações
- **Hero** - Seção hero com animações
- **ValueCard** - Cards customizáveis
- **WhatsAppButton** - Botão flutuante
- **CookieBanner** - Banner de cookies (LGPD)

## 🎨 Personalização

### Cores (tailwind.config.ts)

```typescript
colors: {
  'petrol-dark': '#012739',
  'gold': '#FFD700',
  // Adicione suas cores aqui
}
```

### Componentes

Todos os componentes estão em `src/components/` e podem ser facilmente customizados.

## 🐛 Troubleshooting

### Limpar cache do Vite

```bash
rm -rf node_modules/.vite && rm -rf dist
```

### Reinstalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Licença

MIT License - Livre para uso comercial e pessoal

## 🚀 Próximos Passos

1. Personalize as cores em `tailwind.config.ts`
2. Substitua as imagens em `src/assets/`
3. Atualize os textos e conteúdos
4. Configure suas redes sociais no Footer
5. Adicione suas páginas personalizadas
6. Configure o deploy na sua plataforma preferida (Vercel, Netlify, etc.)

---

**Template desenvolvido por:** TurbinEduca
**Última atualização:** Novembro de 2025
