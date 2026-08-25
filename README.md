# 🏥 Finatti Medicina Diagnóstica

Site institucional moderno e premium para laboratório de patologia em Cianorte-PR.

## 🎨 Design System

### Cores
- **Terracota** (Principal): `#B5511F`
- **Areia** (Fundo): `#E0CDBA`
- **Teal** (Composição): `#30605D`
- **Branco**: `#FFFFFF`
- **Texto Escuro**: `#1a1a1a`

### Tipografia
- **Títulos**: Mefta (adicionar manualmente)
- **Corpo**: Plus Jakarta Sans (Google Fonts)

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 📁 Estrutura do Projeto

```
finatti-lab/
├── app/
│   ├── layout.tsx          # Layout principal com fontes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   ├── ui/                 # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── SectionTitle.tsx
│   └── sections/           # Seções da landing page
│       ├── Header.tsx      # Header fixo com navegação
│       ├── Hero.tsx        # Seção hero com overlay
│       ├── About.tsx       # Sobre nós
│       ├── Differentials.tsx # 8 diferenciais
│       ├── Services.tsx    # Serviços/Exames
│       ├── Team.tsx        # Equipe (fundadores)
│       ├── Contact.tsx     # Contato + formulário
│       └── Footer.tsx      # Footer
├── public/
│   └── fonts/
│       └── mefta.woff2     # Fonte Mefta (adicionar)
└── tailwind.config.ts      # Configuração do Tailwind
```

## ✅ Funcionalidades Implementadas

### 🎯 Componentes UI
- ✅ Button com variantes (primary, secondary, outline)
- ✅ Card com hover elegante
- ✅ Section com backgrounds personalizados
- ✅ SectionTitle com animações

### 📱 Seções
- ✅ **Header**: Fixo, responsivo, com menu mobile
- ✅ **Hero**: Overlay terracota, stats, scroll indicator
- ✅ **Sobre Nós**: História dos fundadores, valores
- ✅ **Diferenciais**: 8 pilares em cards animados
- ✅ **Serviços**: Grid de serviços com hover
- ✅ **Equipe**: Cards dos fundadores
- ✅ **Contato**: Formulário + informações + WhatsApp
- ✅ **Footer**: Completo com links e redes sociais

### 🎨 Design Features
- ✅ Pattern de cruzes/estrelas decorativo
- ✅ Animações Framer Motion (fade-in, slide-up)
- ✅ Navegação suave entre seções
- ✅ Scrollbar customizada
- ✅ Gradientes terracota/teal
- ✅ Mobile-first e totalmente responsivo

## 🔧 Próximos Passos

### 1. Adicionar Fonte Mefta
Substitua o arquivo `public/fonts/mefta.woff2` pela fonte real Mefta.

### 2. Adicionar Imagens
- Hero background: Adicionar imagem de laboratório/microscópio
- Fotos da equipe: `public/team/izabella.jpg` e `public/team/guilherme.jpg`
- Logos de certificações (se houver)

### 3. Configurar Formulário de Contato
Atualmente o formulário apenas exibe um alert. Integre com:
- **EmailJS**: Para envio de emails
- **API Route do Next.js**: Para processar no backend
- **Serviço de terceiros**: Como Formspree, SendGrid, etc.

Exemplo com API Route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Processar envio de email aqui
  
  return NextResponse.json({ success: true });
}
```

### 4. Adicionar Google Maps
Substitua o placeholder no componente `Contact.tsx` por um iframe do Google Maps:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-64 rounded-2xl"
  loading="lazy"
/>
```

### 5. Atualizar Informações de Contato
Em `components/sections/Contact.tsx` e `Footer.tsx`, atualize:
- Telefone real
- Email real
- Endereço completo
- Links de redes sociais

### 6. SEO e Meta Tags
Adicione em `app/layout.tsx`:
- Open Graph images
- Twitter cards
- Canonical URLs
- Structured data (JSON-LD)

### 7. Analytics
Adicione Google Analytics ou similar:

```tsx
// app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## 🎨 Customização

### Cores
Edite `tailwind.config.ts` para ajustar as cores da marca.

### Conteúdo
Todo o conteúdo está nos componentes em `components/sections/`. 
Edite diretamente os textos, valores e informações.

### Animações
As animações estão configuradas com Framer Motion. 
Ajuste `duration`, `delay` e `transition` conforme necessário.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy a pasta .next
```

## 🎨 Favicons e OG-Image

Os favicons (`public/favicon-*.png`, `public/apple-icon.png`, `app/favicon.ico`) e a
imagem de compartilhamento social (`public/og-image.jpg`) são **gerados** a partir do
isotipo e do logo da marca. Para regerá-los após uma mudança de identidade visual:

```bash
node scripts/generate-assets.cjs
```

## 🖼️ Imagens do site

Todas as imagens editoriais (hero e cards de serviços) são declaradas em
`lib/images.ts`. Para trocar uma foto, adicione o arquivo em `public/images/` e
atualize apenas esse arquivo — nenhum componente precisa ser alterado.

## 📞 Suporte

Para dúvidas sobre o código ou customizações, consulte:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🙏 Valores

Este site foi desenvolvido refletindo os valores cristãos e o propósito de servir da Finatti Medicina Diagnóstica.

**"Seus olhos em cada exame"** 👁️

---

Desenvolvido com ❤️ para Finatti Medicina Diagnóstica
