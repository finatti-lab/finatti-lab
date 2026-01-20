# ⚡ Início Rápido - Finatti Medicina Diagnóstica

## 🎉 Parabéns! Seu site está pronto!

O servidor está rodando em: **http://localhost:3000**

---

## 📋 Checklist de 5 Minutos

### ✅ Já Está Funcionando
- [x] Design completo com cores da marca
- [x] 8 seções (Header, Hero, Sobre, Diferenciais, Serviços, Equipe, Contato, Footer)
- [x] Animações Framer Motion
- [x] Responsivo (mobile, tablet, desktop)
- [x] Navegação suave entre seções
- [x] Botão WhatsApp flutuante

### ⚠️ Precisa de Atenção (5 minutos cada)

#### 1. Telefone/WhatsApp (2 min)
Procure e substitua `5544999999999` pelo número real:
- `components/sections/Header.tsx`
- `components/sections/Contact.tsx`
- `components/sections/Footer.tsx`
- `components/ui/WhatsAppButton.tsx`

#### 2. Email (1 min)
Procure e substitua `contato@finatti.com.br`:
- `components/sections/Contact.tsx`
- `components/sections/Footer.tsx`
- `components/sections/Team.tsx`

#### 3. Endereço (1 min)
Atualize em `components/sections/Contact.tsx` linha ~46:
```typescript
content: 'Rua Exemplo, 123 - Centro, Cianorte - PR'
```

#### 4. Redes Sociais (1 min)
Atualize em `components/sections/Footer.tsx` linha ~47:
```typescript
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/SEU_PERFIL' },
  { icon: Facebook, href: 'https://facebook.com/SEU_PERFIL' },
  { icon: Linkedin, href: 'https://linkedin.com/company/SEU_PERFIL' },
];
```

---

## 🎨 Próximos Passos (Quando Tiver Tempo)

### Prioridade ALTA (1-2 horas)
1. **Fonte Mefta**: Adicionar em `public/fonts/mefta.woff2`
2. **Imagens**:
   - Hero: Foto de laboratório/microscópio
   - Equipe: Fotos da Dra. Izabella e Guilherme
3. **Google Maps**: Incorporar mapa real

### Prioridade MÉDIA (2-3 horas)
4. **Formulário**: Configurar EmailJS ou API Route
5. **Conteúdo**: Revisar todos os textos
6. **Fotos**: Adicionar mais imagens reais

### Prioridade BAIXA (Opcional)
7. **Google Analytics**: Tracking de visitantes
8. **SEO**: Sitemap, robots.txt, structured data
9. **Performance**: Otimizar imagens

---

## 📁 Arquivos Importantes

### Documentação
- `README.md` - Visão geral do projeto
- `INSTRUCOES.md` - Guia detalhado de customização
- `PROJETO_COMPLETO.md` - Resumo completo do que foi feito
- `SEO_E_OTIMIZACAO.md` - Guia de SEO e performance
- `INICIO_RAPIDO.md` - Este arquivo

### Configuração
- `tailwind.config.ts` - Cores e estilos
- `app/layout.tsx` - Fontes e metadata
- `app/globals.css` - Estilos globais

### Componentes Principais
- `app/page.tsx` - Página principal (integra tudo)
- `components/sections/` - Todas as seções do site
- `components/ui/` - Componentes reutilizáveis

---

## 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start

# Verificar erros
npm run lint

# Instalar nova dependência
npm install nome-do-pacote
```

---

## 🎯 Testando o Site

### No Navegador
1. Abra: http://localhost:3000
2. Teste a navegação entre seções
3. Teste o menu mobile (redimensione a janela)
4. Teste o formulário de contato
5. Clique no botão WhatsApp flutuante

### Responsividade
- **Mobile**: Redimensione para < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Navegadores
Teste em:
- Chrome/Edge
- Firefox
- Safari (se tiver Mac)
- Mobile (Chrome/Safari no celular)

---

## 🐛 Problemas Comuns

### Erro: "Cannot find module"
```bash
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Ou use outra porta
npm run dev -- -p 3001
```

### Fonte Mefta não aparece
- Verifique se o arquivo está em `public/fonts/`
- Limpe o cache: Ctrl+Shift+R no navegador
- Reinicie o servidor: Ctrl+C e `npm run dev`

### Imagens não carregam
- Coloque as imagens em `public/`
- Use caminhos absolutos: `/images/foto.jpg`
- Não use `../` ou `./`

---

## 📞 Informações de Contato Atuais

Estes são os placeholders que precisam ser atualizados:

| Item | Valor Atual | Onde Atualizar |
|------|-------------|----------------|
| WhatsApp | 5544999999999 | 4 arquivos (buscar no projeto) |
| Telefone | (44) 9999-9999 | Contact.tsx, Footer.tsx |
| Email | contato@finatti.com.br | 3 arquivos |
| Endereço | Cianorte - PR | Contact.tsx |
| Instagram | # | Footer.tsx |
| Facebook | # | Footer.tsx |
| LinkedIn | # | Footer.tsx, Team.tsx |

---

## 🎨 Cores da Marca (Para Referência)

```css
Terracota: #B5511F (principal)
Areia: #E0CDBA (fundo)
Teal: #30605D (composição)
Branco: #FFFFFF
Texto: #1a1a1a
```

---

## 📱 Estrutura do Site

```
Header (fixo)
  ↓
Hero - "Enxergamos o que outros não veem"
  ↓
Sobre Nós - História dos fundadores
  ↓
Diferenciais - 8 pilares da marca
  ↓
Serviços - Exames oferecidos
  ↓
Equipe - Dra. Izabella e Guilherme
  ↓
Contato - Formulário + informações
  ↓
Footer - Links e redes sociais

+ WhatsApp flutuante (sempre visível)
```

---

## 🚀 Deploy Rápido (Vercel)

### Opção 1: Via GitHub (Recomendado)
1. Suba o código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Conecte seu repositório
5. Deploy automático! 🎉

### Opção 2: Via CLI
```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções e pronto!

---

## ✅ Checklist Final Antes do Deploy

- [ ] Atualizei telefone/WhatsApp
- [ ] Atualizei emails
- [ ] Atualizei endereço
- [ ] Adicionei links de redes sociais
- [ ] Testei em mobile
- [ ] Testei formulário de contato
- [ ] Revisei todos os textos
- [ ] Adicionei imagens (ou deixei placeholders bonitos)
- [ ] Testei em diferentes navegadores

---

## 🎉 Pronto para Lançar?

Quando estiver satisfeito com as customizações:

1. Faça o build: `npm run build`
2. Teste localmente: `npm start`
3. Se tudo estiver OK, faça o deploy!
4. Compartilhe com o mundo! 🚀

---

## 📞 Precisa de Ajuda?

### Documentação
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Arquivos de Ajuda
- `INSTRUCOES.md` - Guia detalhado
- `PROJETO_COMPLETO.md` - Visão geral
- `SEO_E_OTIMIZACAO.md` - SEO e performance

---

**Desenvolvido com ❤️ para Finatti Medicina Diagnóstica**

*"Seus olhos em cada exame"* 👁️

---

## 🎯 Dica Final

**Não se preocupe em fazer tudo perfeito de uma vez!**

O site já está funcional e bonito. Você pode:
1. Fazer as 5 customizações rápidas (telefone, email, etc.)
2. Fazer o deploy
3. Ir adicionando melhorias aos poucos

**O importante é colocar no ar e começar a receber visitantes!** 🚀
