# 🎯 Guia Rápido: Onde Customizar Cada Coisa

## 📞 Informações de Contato

### Telefone / WhatsApp
**Buscar por**: `5544999999999` ou `(44) 9999-9999`

**Arquivos**:
1. `components/sections/Header.tsx` - Linha ~85
2. `components/sections/Contact.tsx` - Linha ~50
3. `components/sections/Footer.tsx` - Linha ~98
4. `components/ui/WhatsAppButton.tsx` - Linha ~8

**Como fazer**:
```bash
# Use o Find & Replace do editor (Ctrl+H)
Buscar: 5544999999999
Substituir por: SEU_NUMERO_AQUI
```

---

### Email
**Buscar por**: `contato@finatti.com.br`

**Arquivos**:
1. `components/sections/Contact.tsx` - Linha ~54
2. `components/sections/Footer.tsx` - Linha ~102
3. `components/sections/Team.tsx` - Linha ~17, 26

**Como fazer**:
```bash
# Use o Find & Replace do editor (Ctrl+H)
Buscar: contato@finatti.com.br
Substituir por: SEU_EMAIL_AQUI
```

---

### Endereço
**Arquivo**: `components/sections/Contact.tsx`

**Localização**: Linha ~46
```typescript
{
  icon: MapPin,
  title: 'Endereço',
  content: 'Cianorte - PR', // ← MUDAR AQUI
  link: 'https://maps.google.com', // ← E AQUI
},
```

**Também em**: `components/sections/Footer.tsx` - Linha ~94

---

### Horário de Funcionamento
**Arquivo**: `components/sections/Contact.tsx`

**Localização**: Linha ~58
```typescript
{
  icon: Clock,
  title: 'Horário',
  content: 'Seg-Sex: 8h às 18h', // ← MUDAR AQUI
  link: null,
},
```

---

## 🔗 Redes Sociais

### Footer
**Arquivo**: `components/sections/Footer.tsx`

**Localização**: Linha ~47
```typescript
const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' }, // ← MUDAR #
  { icon: Facebook, href: '#', label: 'Facebook' },   // ← MUDAR #
  { icon: Linkedin, href: '#', label: 'LinkedIn' },   // ← MUDAR #
];
```

### Equipe (LinkedIn dos fundadores)
**Arquivo**: `components/sections/Team.tsx`

**Localização**: Linhas ~13 e ~22
```typescript
{
  name: 'Dra. Izabella Finatti',
  // ...
  linkedin: '#', // ← MUDAR AQUI
  email: 'izabella@finatti.com.br', // ← E AQUI
},
```

---

## 📝 Textos e Conteúdo

### Hero (Seção Principal)
**Arquivo**: `components/sections/Hero.tsx`

**Headline**: Linha ~28
```tsx
<h1>
  Enxergamos o que
  <br />
  <span>outros não veem</span> {/* ← MUDAR AQUI */}
</h1>
```

**Subtítulo**: Linha ~41
```tsx
<p>
  Laboratório de patologia em Cianorte-PR... {/* ← MUDAR AQUI */}
</p>
```

**Stats**: Linha ~66
```tsx
{[
  { value: '100%', label: 'Credibilidade' }, // ← MUDAR AQUI
  { value: '24h', label: 'Agilidade' },
  // ...
]}
```

---

### Sobre Nós
**Arquivo**: `components/sections/About.tsx`

**Título**: Linha ~19
**Textos**: Linhas ~25-45

```tsx
<p>
  A Finatti Medicina Diagnóstica nasceu... {/* ← MUDAR AQUI */}
</p>
```

---

### Diferenciais
**Arquivo**: `components/sections/Differentials.tsx`

**Lista de diferenciais**: Linha ~20
```typescript
const differentials = [
  {
    icon: Shield,
    title: 'Credibilidade', // ← MUDAR AQUI
    description: 'Resultados confiáveis...', // ← E AQUI
    color: 'from-terracota to-terracota-dark',
  },
  // ...
];
```

---

### Serviços
**Arquivo**: `components/sections/Services.tsx`

**Lista de serviços**: Linha ~20
```typescript
const services = [
  {
    icon: Microscope,
    title: 'Histopatologia', // ← MUDAR AQUI
    description: 'Análise microscópica...', // ← E AQUI
    features: ['Biópsias', 'Peças cirúrgicas', 'Citologia'], // ← E AQUI
  },
  // ...
];
```

---

### Equipe
**Arquivo**: `components/sections/Team.tsx`

**Informações dos fundadores**: Linha ~12
```typescript
const team = [
  {
    name: 'Dra. Izabella Finatti', // ← MUDAR AQUI
    role: 'Médica Patologista | Cofundadora', // ← E AQUI
    bio: 'Especialista em patologia...', // ← E AQUI
    image: '/team/izabella.jpg',
    linkedin: '#',
    email: 'izabella@finatti.com.br',
  },
  // ...
];
```

---

## 🖼️ Imagens

### Hero Background
**Arquivo**: `components/sections/Hero.tsx`

**Localização**: Linha ~13
```tsx
{/* Substitua esta div por uma imagem real */}
<div className="absolute inset-0 bg-gradient-to-br from-teal-dark to-terracota-dark opacity-50" />

{/* Por: */}
<img 
  src="/images/hero-lab.jpg" 
  alt="Laboratório Finatti"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

---

### Fotos da Equipe
**Arquivo**: `components/sections/Team.tsx`

**Localização**: Linha ~38
```tsx
{/* Substitua o placeholder por: */}
<img 
  src={member.image}
  alt={member.name}
  className="w-full h-full object-cover"
/>
```

**Adicione as fotos em**:
- `public/team/izabella.jpg`
- `public/team/guilherme.jpg`

---

### Logo/Favicon
**Arquivos**:
- `app/favicon.ico` - Ícone do navegador
- `public/icon.png` - Ícone PWA (512x512)
- `public/apple-icon.png` - Ícone Apple (180x180)

---

## 🗺️ Google Maps

**Arquivo**: `components/sections/Contact.tsx`

**Localização**: Linha ~229
```tsx
{/* Substitua o placeholder por: */}
<iframe
  src="https://www.google.com/maps/embed?pb=SUA_URL_AQUI"
  width="100%"
  height="256"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-2xl"
/>
```

**Como obter a URL**:
1. Acesse [Google Maps](https://maps.google.com)
2. Busque seu endereço
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código do iframe

---

## 📧 Formulário de Contato

**Arquivo**: `components/sections/Contact.tsx`

**Função de envio**: Linha ~27
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // ← ADICIONAR LÓGICA DE ENVIO AQUI
  // Veja INSTRUCOES.md para opções (EmailJS ou API Route)
  
  setTimeout(() => {
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  }, 1500);
};
```

---

## 🎨 Cores

**Arquivo**: `tailwind.config.ts`

**Localização**: Linha ~10
```typescript
colors: {
  terracota: {
    DEFAULT: '#B5511F', // ← MUDAR AQUI
    dark: '#9A4419',
    light: '#C86B3A',
  },
  areia: {
    DEFAULT: '#E0CDBA', // ← MUDAR AQUI
    light: '#F0E5D8',
    dark: '#D0BDA8',
  },
  teal: {
    DEFAULT: '#30605D', // ← MUDAR AQUI
    dark: '#264A48',
    light: '#3D7773',
  },
  dark: '#1a1a1a',
},
```

---

## 🔤 Fontes

### Plus Jakarta Sans (já configurada)
**Arquivo**: `app/layout.tsx` - Linha ~3

### Mefta (precisa adicionar)
**Arquivo da fonte**: `public/fonts/mefta.woff2`

**Configuração**: `app/layout.tsx` - Linha ~11
```typescript
const mefta = localFont({
  src: [
    {
      path: "../public/fonts/mefta.woff2", // ← Certifique-se que o arquivo existe
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mefta",
  fallback: ["Georgia", "serif"],
});
```

---

## 📊 SEO e Metadata

**Arquivo**: `app/layout.tsx`

**Localização**: Linha ~23
```typescript
export const metadata: Metadata = {
  title: "Finatti Medicina Diagnóstica | Laboratório...", // ← MUDAR
  description: "Seus olhos em cada exame...", // ← MUDAR
  keywords: ["laboratório", "patologia", "Cianorte", ...], // ← MUDAR
  // ...
};
```

---

## 🔧 Configurações

### Variáveis de Ambiente
**Arquivo**: `.env.local` (criar baseado em `.env.example`)

```bash
# Copie .env.example para .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP=5544999999999
NEXT_PUBLIC_PHONE=(44) 9999-9999
NEXT_PUBLIC_EMAIL=contato@finatti.com.br
# ...
```

---

## 📱 Navegação (Menu)

**Arquivo**: `components/sections/Header.tsx`

**Localização**: Linha ~11
```typescript
const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Contato', href: '#contato' },
];
// ← ADICIONAR/REMOVER ITENS AQUI
```

---

## 🎯 Resumo Rápido

### 5 Customizações Essenciais (10 minutos)

1. **Telefone/WhatsApp** → Buscar `5544999999999` (4 arquivos)
2. **Email** → Buscar `contato@finatti.com.br` (4 arquivos)
3. **Endereço** → `Contact.tsx` linha ~46
4. **Redes Sociais** → `Footer.tsx` linha ~47
5. **Horário** → `Contact.tsx` linha ~58

### Próximas Customizações (quando tiver tempo)

6. **Fonte Mefta** → Adicionar em `public/fonts/`
7. **Imagens** → Hero e Equipe
8. **Google Maps** → `Contact.tsx` linha ~229
9. **Formulário** → `Contact.tsx` linha ~27
10. **Textos** → Revisar cada seção

---

## 🔍 Dica de Busca

Use o **Find in Files** do seu editor:
- **VS Code**: `Ctrl+Shift+F` (Windows) ou `Cmd+Shift+F` (Mac)
- **Cursor**: `Ctrl+Shift+F` (Windows) ou `Cmd+Shift+F` (Mac)

Busque por:
- `5544999999999` - Telefone
- `contato@finatti.com.br` - Email
- `#` - Links de redes sociais
- `TODO` - Tarefas pendentes (se houver)

---

## 📞 Checklist de Customização

Marque conforme for completando:

### Essencial
- [ ] Telefone/WhatsApp atualizado
- [ ] Email atualizado
- [ ] Endereço completo
- [ ] Links de redes sociais
- [ ] Horário de funcionamento

### Importante
- [ ] Fonte Mefta adicionada
- [ ] Imagem do Hero
- [ ] Fotos da equipe
- [ ] Google Maps
- [ ] Formulário funcionando

### Opcional
- [ ] Textos revisados
- [ ] Cores ajustadas (se necessário)
- [ ] Serviços atualizados
- [ ] Diferenciais ajustados
- [ ] SEO otimizado

---

**Use este guia como referência rápida para saber exatamente onde fazer cada customização!** 🎯

Boa sorte! 🚀
