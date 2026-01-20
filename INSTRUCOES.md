# 📋 Instruções de Customização - Finatti Medicina Diagnóstica

## ✅ O que já está pronto

O site institucional está **100% funcional** com:

- ✅ Design system completo com as cores da marca (Terracota, Areia, Teal)
- ✅ Header fixo com navegação suave e menu mobile
- ✅ Hero impactante com overlay e animações
- ✅ Seção Sobre Nós com história dos fundadores
- ✅ 8 Diferenciais em cards elegantes
- ✅ Seção de Serviços/Exames
- ✅ Equipe (fundadores)
- ✅ Formulário de contato
- ✅ Footer completo
- ✅ Animações Framer Motion em todas as seções
- ✅ Totalmente responsivo (mobile-first)

## 🎯 Próximos Passos (Ordem de Prioridade)

### 1. 🔤 Adicionar Fonte Mefta (IMPORTANTE)

A fonte Mefta precisa ser adicionada manualmente:

1. Coloque o arquivo `mefta.woff2` (e opcionalmente `mefta.woff`) na pasta `public/fonts/`
2. Se a fonte tiver nome diferente, atualize em `app/layout.tsx`:

```typescript
const mefta = localFont({
  src: [
    {
      path: "../public/fonts/SEU_ARQUIVO_AQUI.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mefta",
  fallback: ["Georgia", "serif"],
});
```

### 2. 📸 Adicionar Imagens

#### Hero (Seção Principal)
Edite `components/sections/Hero.tsx` linha ~10:

```tsx
// Substitua esta linha:
<div className="absolute inset-0 bg-gradient-to-br from-teal-dark to-terracota-dark opacity-50" />

// Por uma imagem real:
<img 
  src="/images/hero-lab.jpg" 
  alt="Laboratório Finatti"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**Sugestões de imagens para o Hero:**
- Microscópio em close
- Laboratório de patologia
- Médico analisando lâminas
- Equipamentos modernos

#### Fotos da Equipe
Adicione as fotos em `public/team/`:
- `public/team/izabella.jpg`
- `public/team/guilherme.jpg`

Depois edite `components/sections/Team.tsx` linha ~38:

```tsx
// Substitua o placeholder por:
<img 
  src={member.image}
  alt={member.name}
  className="w-full h-full object-cover"
/>
```

### 3. 📞 Atualizar Informações de Contato

#### Telefone e WhatsApp
Procure por `5544999999999` e substitua pelo número real:
- `components/sections/Header.tsx`
- `components/sections/Contact.tsx`
- `components/sections/Footer.tsx`

#### Email
Procure por `contato@finatti.com.br` e atualize:
- `components/sections/Contact.tsx`
- `components/sections/Footer.tsx`
- `components/sections/Team.tsx`

#### Endereço Completo
Em `components/sections/Contact.tsx` linha ~46, atualize:

```typescript
{
  icon: MapPin,
  title: 'Endereço',
  content: 'Rua Exemplo, 123 - Centro, Cianorte - PR, 87200-000',
  link: 'https://maps.google.com/?q=SEU_ENDERECO_AQUI',
},
```

### 4. 🗺️ Adicionar Google Maps

Em `components/sections/Contact.tsx` linha ~229, substitua o placeholder:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=SUA_URL_DO_GOOGLE_MAPS"
  width="100%"
  height="256"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl"
/>
```

**Como obter a URL do Google Maps:**
1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque o endereço do laboratório
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código iframe

### 5. 📧 Configurar Envio de Email do Formulário

Atualmente o formulário apenas exibe um alert. Escolha uma opção:

#### Opção A: EmailJS (Mais Fácil)

1. Crie conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Instale: `npm install @emailjs/browser`
4. Atualize `components/sections/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'SEU_SERVICE_ID',
      'SEU_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'SUA_PUBLIC_KEY'
    );
    
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    alert('Erro ao enviar mensagem. Tente novamente.');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Opção B: API Route do Next.js

1. Crie `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'contato@finatti.com.br',
    subject: `Novo contato de ${name}`,
    html: `
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  });
  
  return NextResponse.json({ success: true });
}
```

2. Atualize o formulário para usar a API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  }
  
  setIsSubmitting(false);
};
```

### 6. 🔗 Adicionar Links de Redes Sociais

Em `components/sections/Footer.tsx` linha ~47, atualize os links:

```typescript
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/finattimedicina', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/finattimedicina', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/finatti', label: 'LinkedIn' },
];
```

### 7. 📊 Adicionar Google Analytics (Opcional)

1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Obtenha seu ID de medição (ex: G-XXXXXXXXXX)
3. Adicione em `app/layout.tsx` antes do `</head>`:

```tsx
import Script from 'next/script';

// No return do RootLayout:
<html lang="pt-BR">
  <head>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `}
    </Script>
  </head>
  <body>
    {children}
  </body>
</html>
```

### 8. 🎨 Ajustes de Conteúdo (Opcional)

Todos os textos podem ser editados diretamente nos componentes:

- **Hero**: `components/sections/Hero.tsx`
- **Sobre**: `components/sections/About.tsx`
- **Diferenciais**: `components/sections/Differentials.tsx`
- **Serviços**: `components/sections/Services.tsx`
- **Equipe**: `components/sections/Team.tsx`

### 9. 🚀 Deploy

#### Vercel (Recomendado - Gratuito)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

Ou via CLI:
```bash
npm install -g vercel
vercel
```

#### Netlify

1. Crie conta em [netlify.com](https://netlify.com)
2. Conecte o repositório
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🎯 Checklist Final

Antes de colocar no ar, verifique:

- [ ] Fonte Mefta adicionada
- [ ] Imagens do Hero e Equipe
- [ ] Telefone/WhatsApp atualizado
- [ ] Email atualizado
- [ ] Endereço completo
- [ ] Google Maps incorporado
- [ ] Formulário de contato funcionando
- [ ] Links de redes sociais
- [ ] Testar em mobile
- [ ] Testar em diferentes navegadores
- [ ] Google Analytics configurado (opcional)

## 🆘 Problemas Comuns

### A fonte Mefta não aparece
- Verifique se o arquivo está em `public/fonts/`
- Verifique o nome do arquivo em `app/layout.tsx`
- Limpe o cache: `npm run dev` (Ctrl+C e reinicie)

### Imagens não carregam
- Verifique se estão na pasta `public/`
- Use caminhos relativos: `/images/foto.jpg`
- Formatos suportados: jpg, png, webp, svg

### Formulário não envia
- Verifique o console do navegador (F12)
- Configure uma das opções de envio (EmailJS ou API Route)

### Erros de build
- Execute: `npm run build`
- Corrija os erros mostrados
- Teste localmente antes do deploy

## 📞 Suporte Técnico

Se precisar de ajuda:
1. Verifique a documentação do [Next.js](https://nextjs.org/docs)
2. Consulte o [Tailwind CSS](https://tailwindcss.com/docs)
3. Veja exemplos do [Framer Motion](https://www.framer.com/motion/)

---

**Desenvolvido com ❤️ para Finatti Medicina Diagnóstica**

*"Seus olhos em cada exame"* 👁️
