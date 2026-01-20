# 🔑 Resolver Permissão do GitHub

## ⚠️ Problema

```
remote: Permission to finatti-lab/finatti-lab.git denied to eubbbruno.
fatal: unable to access 'https://github.com/finatti-lab/finatti-lab.git/': The requested URL returned error: 403
```

**Causa**: Você está tentando fazer push com o usuário `eubbbruno`, mas o repositório está na organização `finatti-lab`.

---

## ✅ Soluções

### Opção 1: Adicionar Colaborador (Recomendado)

Se você é o dono da organização `finatti-lab`:

1. **Acesse o repositório**: https://github.com/finatti-lab/finatti-lab

2. **Vá em Settings** (Configurações)

3. **Clique em "Collaborators and teams"** (ou "Manage access")

4. **Adicione seu usuário**:
   - Clique em "Add people"
   - Digite: `eubbbruno`
   - Selecione permissão: **Admin** ou **Write**
   - Clique em "Add eubbbruno to this repository"

5. **Aceite o convite** (verifique seu email)

6. **Tente novamente**:
   ```bash
   git push -u origin main
   ```

---

### Opção 2: Usar Token de Acesso Pessoal (PAT)

Se você já tem acesso mas precisa autenticar:

#### 1. Criar Token no GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Configure:
   - **Note**: `Finatti Lab Token`
   - **Expiration**: 90 days (ou No expiration)
   - **Scopes**: Marque `repo` (acesso completo a repositórios)
4. Clique em "Generate token"
5. **COPIE O TOKEN** (você só verá uma vez!)

#### 2. Usar Token no Push

```bash
# Remover credenciais antigas do Windows
git credential-manager delete https://github.com

# Fazer push (vai pedir credenciais)
git push -u origin main

# Quando pedir:
# Username: eubbbruno
# Password: COLE_SEU_TOKEN_AQUI
```

**OU** configure o remote com o token:

```bash
git remote remove origin
git remote add origin https://eubbbruno:SEU_TOKEN_AQUI@github.com/finatti-lab/finatti-lab.git
git push -u origin main
```

---

### Opção 3: Usar GitHub CLI (Mais Fácil)

#### 1. Instalar GitHub CLI

```bash
# Windows (com Winget)
winget install --id GitHub.cli

# Ou baixe em: https://cli.github.com/
```

#### 2. Fazer Login

```bash
gh auth login
```

Siga as instruções:
- Escolha: **GitHub.com**
- Protocolo: **HTTPS**
- Autenticar: **Login with a web browser**
- Copie o código e cole no navegador

#### 3. Fazer Push

```bash
git push -u origin main
```

---

### Opção 4: Usar SSH (Avançado)

Se preferir usar SSH ao invés de HTTPS:

#### 1. Gerar Chave SSH

```bash
ssh-keygen -t ed25519 -C "seu_email@example.com"
```

Pressione Enter para aceitar o local padrão.

#### 2. Adicionar Chave ao SSH Agent

```bash
# Iniciar SSH agent
eval "$(ssh-agent -s)"

# Adicionar chave
ssh-add ~/.ssh/id_ed25519
```

#### 3. Adicionar Chave ao GitHub

```bash
# Copiar chave pública
cat ~/.ssh/id_ed25519.pub
```

1. Acesse: https://github.com/settings/keys
2. Clique em "New SSH key"
3. Cole a chave pública
4. Clique em "Add SSH key"

#### 4. Mudar Remote para SSH

```bash
git remote remove origin
git remote add origin git@github.com:finatti-lab/finatti-lab.git
git push -u origin main
```

---

## 🎯 Solução Mais Rápida

**Se você é o dono da organização `finatti-lab`**:

### Via GitHub Web

1. Acesse: https://github.com/finatti-lab/finatti-lab/settings/access
2. Adicione `eubbbruno` como colaborador com permissão **Admin**
3. Aceite o convite (verifique email)
4. Execute:
   ```bash
   git push -u origin main
   ```

---

## 🔍 Verificar Permissões

Para verificar se você tem acesso:

```bash
# Via GitHub CLI
gh repo view finatti-lab/finatti-lab

# Ou acesse no navegador
# https://github.com/finatti-lab/finatti-lab
```

Se você conseguir ver o repositório mas não conseguir fazer push, você precisa de permissão de **Write** ou **Admin**.

---

## 📋 Checklist

- [ ] Você é membro da organização `finatti-lab`?
- [ ] Você tem permissão de **Write** ou **Admin** no repositório?
- [ ] Você está autenticado com o usuário correto?
- [ ] Você criou um Personal Access Token (se usando HTTPS)?
- [ ] O token tem permissão `repo`?

---

## 🆘 Ainda Não Funciona?

### Verificar Credenciais Armazenadas

```bash
# Windows - Gerenciador de Credenciais
# Pressione Win+R e digite: control /name Microsoft.CredentialManager
# Remova credenciais antigas do GitHub

# Ou via comando
git credential-manager delete https://github.com
```

### Limpar Cache do Git

```bash
git config --global --unset credential.helper
git config --system --unset credential.helper
```

### Tentar Novamente

```bash
git push -u origin main
```

Vai pedir usuário e senha. Use:
- **Username**: `eubbbruno`
- **Password**: Seu Personal Access Token (não a senha da conta!)

---

## 📞 Resumo Rápido

**Escolha UMA das opções**:

### ✅ Opção A (Mais Simples)
1. Adicione `eubbbruno` como colaborador no repo
2. `git push -u origin main`

### ✅ Opção B (Token)
1. Crie token: https://github.com/settings/tokens
2. `git push -u origin main`
3. Use token como senha

### ✅ Opção C (GitHub CLI)
1. `gh auth login`
2. `git push -u origin main`

---

**Repositório correto configurado**: ✅ `https://github.com/finatti-lab/finatti-lab.git`

Agora é só resolver a permissão! 🚀
