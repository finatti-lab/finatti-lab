# 🚀 SEO e Otimização - Finatti Medicina Diagnóstica

## ✅ O que já está implementado

### Meta Tags Básicas
- ✅ Title otimizado
- ✅ Description
- ✅ Keywords
- ✅ Author
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Locale (pt_BR)

### Performance
- ✅ Next.js 16 com Turbopack (build rápido)
- ✅ Lazy loading de imagens (quando adicionadas)
- ✅ Componentes otimizados
- ✅ CSS-in-JS com Tailwind (purge automático)

### Acessibilidade
- ✅ HTML semântico
- ✅ Alt text preparado para imagens
- ✅ Navegação por teclado
- ✅ ARIA labels onde necessário
- ✅ Contraste de cores adequado

---

## 🎯 Otimizações Adicionais Recomendadas

### 1. Adicionar Sitemap.xml

Crie `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finatti.com.br'; // Atualizar com URL real
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#servicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
```

### 2. Adicionar robots.txt

Crie `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://finatti.com.br'; // Atualizar com URL real
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### 3. Adicionar Structured Data (JSON-LD)

Adicione em `app/layout.tsx` dentro do `<head>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Finatti Medicina Diagnóstica',
      description: 'Laboratório de patologia em Cianorte-PR',
      url: 'https://finatti.com.br',
      logo: 'https://finatti.com.br/logo.png',
      image: 'https://finatti.com.br/og-image.jpg',
      telephone: '+55-44-9999-9999',
      email: 'contato@finatti.com.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Exemplo, 123',
        addressLocality: 'Cianorte',
        addressRegion: 'PR',
        postalCode: '87200-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.663,
        longitude: -52.605,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      sameAs: [
        'https://instagram.com/finattimedicina',
        'https://facebook.com/finattimedicina',
        'https://linkedin.com/company/finatti',
      ],
    }),
  }}
/>
```

### 4. Otimizar Imagens

Quando adicionar imagens, use o componente `Image` do Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-lab.jpg"
  alt="Laboratório Finatti Medicina Diagnóstica"
  width={1920}
  height={1080}
  priority // Para imagens above-the-fold
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..." // Gerar com ferramentas online
/>
```

**Dicas de otimização de imagens:**
- Use WebP ou AVIF
- Comprima com TinyPNG ou Squoosh
- Tamanhos recomendados:
  - Hero: 1920x1080px
  - Team: 800x800px
  - Thumbnails: 400x400px

### 5. Adicionar Open Graph Images

Crie `app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Finatti Medicina Diagnóstica';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #B5511F 0%, #30605D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          Finatti
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Medicina Diagnóstica
        </div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.8 }}>
          Seus olhos em cada exame 👁️
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
```

### 6. Adicionar Favicon Completo

Crie ícones em diferentes tamanhos:

```
public/
├── favicon.ico (32x32)
├── icon.png (512x512)
├── apple-icon.png (180x180)
└── manifest.json
```

**manifest.json**:
```json
{
  "name": "Finatti Medicina Diagnóstica",
  "short_name": "Finatti",
  "description": "Laboratório de patologia em Cianorte-PR",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#E0CDBA",
  "theme_color": "#B5511F",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/apple-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
}
```

### 7. Google Analytics 4

Adicione em `app/layout.tsx`:

```tsx
import Script from 'next/script';

// No return:
<html>
  <head>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </head>
  <body>{children}</body>
</html>
```

### 8. Google Search Console

Após o deploy:

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade (URL do site)
3. Verifique a propriedade
4. Envie o sitemap: `https://finatti.com.br/sitemap.xml`

### 9. Meta Tags Adicionais

Adicione em `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... existentes
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Finatti Medicina Diagnóstica',
    description: 'Laboratório de patologia em Cianorte-PR',
    images: ['/og-image.jpg'],
  },
  
  // Verificação
  verification: {
    google: 'seu_codigo_de_verificacao',
  },
  
  // Canonical
  alternates: {
    canonical: 'https://finatti.com.br',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 10. Performance Budget

Configure em `next.config.ts`:

```typescript
const nextConfig = {
  // ... existente
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compressão
  compress: true,
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## 📊 Checklist de SEO

### Antes do Deploy
- [ ] Título e description otimizados
- [ ] Keywords relevantes
- [ ] Alt text em todas as imagens
- [ ] URLs amigáveis (já são)
- [ ] Sitemap.xml criado
- [ ] Robots.txt configurado
- [ ] Structured data (JSON-LD)
- [ ] Open Graph images
- [ ] Favicon completo

### Após o Deploy
- [ ] Google Search Console configurado
- [ ] Google Analytics instalado
- [ ] Sitemap enviado ao Google
- [ ] Testar com PageSpeed Insights
- [ ] Testar com Lighthouse
- [ ] Verificar mobile-friendliness
- [ ] Testar compartilhamento social

### Conteúdo
- [ ] Títulos com palavras-chave
- [ ] Conteúdo original e relevante
- [ ] Headings hierárquicos (H1, H2, H3)
- [ ] Links internos
- [ ] Call-to-actions claros

---

## 🔍 Palavras-chave Sugeridas

### Principais
- Laboratório de patologia Cianorte
- Medicina diagnóstica Cianorte
- Exames patológicos Cianorte
- Histopatologia Cianorte
- Finatti laboratório

### Secundárias
- Patologia molecular Paraná
- Imuno-histoquímica Cianorte
- Citopatologia Cianorte
- Exames laboratoriais Cianorte
- Diagnóstico médico Cianorte

### Long-tail
- Laboratório de patologia em Cianorte PR
- Onde fazer exame de histopatologia em Cianorte
- Melhor laboratório de patologia Cianorte
- Exame de papanicolau Cianorte
- Laboratório com valores cristãos Cianorte

---

## 📈 Ferramentas de Análise

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Ahrefs](https://ahrefs.com/) (pago)
- [SEMrush](https://www.semrush.com/) (pago)

### Acessibilidade
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🎯 Metas de Performance

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Score (Alvo)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

---

## 📞 Suporte

Para dúvidas sobre SEO e otimização:
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Web.dev](https://web.dev/)

---

**Lembre-se**: SEO é um processo contínuo. Monitore, ajuste e melhore constantemente!

🚀 **Boa sorte com o lançamento do site Finatti!**
