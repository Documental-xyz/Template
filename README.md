# Documental — Template de Site

### Crie seu site de geo-narrativas em minutos

[![Use este template](https://img.shields.io/badge/Use%20este%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/YOUR_ORG/YOUR_REPO/generate)
[![Deploy no GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://docs.github.com/pt/pages)

---

## 📖 O que é

O **Documental** é um template. Isso significa que você não começa do zero: pega um site pronto, troca o conteúdo pelo seu, e publica. Sem instalar programas complicados, sem saber programar.

Ele já vem com tudo que um site de narrativa precisa: mapas interativos, linhas do tempo, galerias de imagens, gráficos e textos. Você só precisa colocar o seu conteúdo.

A melhor parte é o **editor visual**. Você edita tudo pelo navegador, vendo o resultado na hora. Arrasta uma imagem, escreve um texto, solta um marcador no mapa. O site vai ficando pronto enquanto você trabalha.

---

## 🚀 Começando em 3 passos

### Passo 1 — Usar o template

Clique no botão verde **"Use este template"** lá no topo deste repositório no GitHub. Ele cria uma cópia do site só pra você.

### Passo 2 — Editar o conteúdo

Você pode editar de dois jeitos:

- **Pelo navegador**, abrindo o editor visual em `/admin` no seu site
- **Pelos arquivos**, mexendo direto nas pastas de conteúdo (mais detalhes abaixo)

### Passo 3 — Publicar

Tudo acontece sozinho. Quando você salva uma alteração, o GitHub publica o site automaticamente. Você só espera uns minutos e o site está no ar.

---

## 💻 Para rodar no seu computador (opcional)

Se quiser trabalhar offline antes de publicar, rode estes comandos no terminal:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npm run dev
```

Depois abra `http://localhost:4321` no navegador. Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais nova).

---

## 📁 Onde fica seu conteúdo

| Pasta | O que vai aqui |
|-------|---------------|
| `pages/` | Suas páginas (arquivos `.md`) |
| `public/uploads/` | Imagens, vídeos e outros arquivos de mídia |
| `blog/` | Posts do blog |
| `docs/` | Documentação e textos de apoio |

Não quer mexer em arquivos? Tudo isso também dá pra fazer pelo editor visual em `http://localhost:4321/admin`. Ele cuida de criar, mover e organizar os arquivos pra você.

---

## ✏️ Editando pelo CMS

O template já vem com um editor visual embutido, o **Sveltia**. É tipo um WordPress moderno, bem simples de usar.

**Para edição local** (no seu computador):

1. Rode `npm run dev`
2. Abra `http://localhost:4321/admin`
3. Escolha o modo **"Work with local repository"**
4. Edite, salve, e veja o resultado na hora

**Para edição direto do navegador** (sem instalar nada):

Configure o GitHub backend uma única vez. Depois, você edita pelo `/admin` do seu site publicado, de qualquer computador, e as mudanças vão direto pro ar.

Em ambos os casos, você não encosta em código.

---

## 🌐 Deploy automático

O template traz dois modos de publicação. Escolha um.

### GitHub Pages (recomendado, grátis)

1. No seu repositório, vá em **Settings → Pages → Source: GitHub Actions**
2. Faça um push pra branch **`preview`**
3. Pronto. Seu site fica em `https://seu-usuario.github.io/seu-repo/`

### Servidor próprio

1. Configure as secrets no repositório (`SSH_HOST`, `SSH_USER`, `SSH_KEY`, e demais variáveis do seu servidor)
2. Faça um push pra branch **`main`**
3. O deploy acontece via SSH automaticamente

---

## 📄 Licença

**GPL 2.0** — você pode usar, modificar e distribuir livremente. Incluindo uso comercial. Veja o arquivo [LICENSE](LICENSE) para os detalhes completos.

---

<div align="center">

Feito com cuidado pra democratizar narrativas de direitos humanos.

</div>
