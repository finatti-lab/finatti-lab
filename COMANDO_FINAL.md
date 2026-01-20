# 🚀 COMANDO FINAL - Cole o Token Aqui

## 📋 Passo a Passo:

### 1. Criar Token na Conta finatti-lab

**Na aba anônima (conta finatti-lab):**

1. Acesse: https://github.com/settings/tokens/new
2. **Note**: `Push Token`
3. **Expiration**: 90 days
4. **Marque**: ✅ `repo` (Full control of private repositories)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (ghp_xxxxxxxxxxxx)

---

### 2. Execute Este Comando (SUBSTITUA O TOKEN):

```bash
cd C:\Users\Bruno\Documents\GitHub\finatti-lab

git remote set-url origin https://finatti-lab:SEU_TOKEN_AQUI@github.com/finatti-lab/finatti-lab.git

git push -u origin main
```

**IMPORTANTE**: Substitua `SEU_TOKEN_AQUI` pelo token que você copiou!

---

## 🎯 Exemplo:

Se seu token for: `ghp_abc123xyz789`

O comando fica:
```bash
git remote set-url origin https://finatti-lab:ghp_abc123xyz789@github.com/finatti-lab/finatti-lab.git
```

---

## ✅ Ou Me Mande o Token

**Me mande o token aqui que eu monto o comando completo para você copiar e colar!**

Exemplo: `ghp_...`

---

**Está na página de criar token?** Clique em "Generate token" e me manda! 🚀
