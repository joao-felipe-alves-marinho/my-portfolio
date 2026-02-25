# Portfolio Full Stack

Portfolio pessoal de desenvolvedor full stack construído com foco em organização de código, acessibilidade, tipagem forte e estrutura escalável.

Demo: https://joaofmarinho.vercel.app/

## ✨ Funcionalidades

- Navegação por seções na home (Hero, Sobre, Projetos, Tecnologias, Contato)
- Páginas dinâmicas de projetos em `/projects/$slug`
- Alternância de tema dark/light
- Internacionalização com i18next
- Layout responsivo para mobile e desktop
- Acessibilidade básica (labels, navegação e semântica)

## 🧱 Tecnologias

### Frontend

- React
- TypeScript
- Vite

### Roteamento

- TanStack Router (file-based routing)

### Estilo/UI

- Mantine UI
- CSS Modules

### Internacionalização

- i18next
- react-i18next

### Ferramentas

- ESLint
- PostCSS

## 📁 Estrutura de pastas

```text
src/
  components/
    layout/
    ui/
  data/
  i18n/
    index.ts
    resources/
      pt/
        common.json
      en/
        common.json
  routes/
    __root.tsx
    index/
      route.tsx
      -sections/
        hero/
        about-me/
        projects/
        technologies/
        contact/
    projects/
      route.tsx
      $slug/
        route.tsx
```

### Observações sobre `routes` e `-sections`

- A pasta `routes` define as rotas por convenção de arquivos do TanStack Router.
- O diretório `-sections` dentro da rota da home segue colocation: componentes relacionados à rota ficam próximos da rota, mas o prefixo `-` evita geração automática de rota para esses arquivos.

## 🚀 Rodando localmente

```bash
git clone <url-do-repositorio>
cd protifolio
npm install
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## 🌍 Internacionalização

- A internacionalização usa namespace `common`.
- Arquivos de tradução ficam em `src/i18n/resources/<idioma>/common.json`.
- A troca de idioma é feita pelo componente `LanguagePicker`.
- O idioma é detectado automaticamente e persistido em `localStorage`.

## 🎨 Tema

- O tema (dark/light) é gerenciado pelo Mantine.
- A alternância é feita por um botão dedicado na interface.
- Tokens de tema e componentes do Mantine garantem consistência visual entre as telas.

## 📄 Licença

MIT
