# App Aluno — React

Portabilidade do **App Aluno** (originalmente em HTML/CSS/JS) para uma SPA em
**React**, desenvolvida com **Vite** e **React Router**. Projeto da disciplina
de Front-end (N3) — Centro Universitário SATC.

## Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM 6](https://reactrouter.com/)

## Como instalar e executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado (versão 18+).

```bash
# 1. Acessar a pasta do projeto
cd app-aluno-react

# 2. Instalar as dependências
npm install

# 3. Executar em modo de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

Para gerar a versão de produção: `npm run build` (e `npm run preview` para
visualizá-la).

## Estrutura de pastas

```
app-aluno-react/
├── public/
├── src/
│   ├── components/   # Componentes reutilizáveis (InputField, Button, Card, Header, layouts)
│   ├── pages/        # Telas/rotas (LoginPage, DashboardPage, ...)
│   ├── context/      # UserContext.jsx (Context API)
│   ├── services/     # Chamadas de API (tutorService.js)
│   ├── App.jsx       # Definição das rotas
│   ├── main.jsx      # Ponto de entrada (BrowserRouter + Provider)
│   └── index.css     # Estilos (className + CSS, responsivo)
├── index.html
├── package.json
└── README.md
```

## Rotas

| Rota               | Tela                          |
| ------------------ | ----------------------------- |
| `/`                | Login                         |
| `/forgot-password` | Recuperar senha               |
| `/new-password`    | Nova senha                    |
| `/signup`          | Cadastro — passo 1 (CPF)      |
| `/signup/data`     | Cadastro — passo 2 (dados)    |
| `/dashboard`       | Dashboard (interna)           |
| `/subjects`        | Disciplinas (interna)         |
| `/profile`         | Perfil (interna)              |
| `/tutor`           | Tutor IA (interna)            |

> Dica: na tela de Login, qualquer e-mail válido + senha levam ao Dashboard.

## Conceitos de React aplicados

- **Componentização + props/children:** `InputField`, `Button`, `Card`,
  `AuthLayout`, `AppLayout`, `Header`.
- **Hooks `useState` / `useEffect`:** formulários controlados e cálculo da
  saudação no Dashboard.
- **Formulários controlados + validação:** Login, Cadastro, Recuperar/Nova senha
  com mensagens de erro via renderização condicional (`&&`).
- **Renderização de listas:** `.map()` com `key` em Disciplinas, Dashboard e
  Tutor IA.
- **Roteamento (React Router):** `BrowserRouter`, `Routes`, `Route`, `NavLink`
  (rota ativa) e `useNavigate` (redirecionamento após o login).
- **Context API:** `UserContext` compartilha os dados do usuário entre
  Dashboard, Perfil e o menu (sem prop drilling).
- **Consumo de API com `fetch`:** a tela **Tutor IA** consome uma API externa
  (JSONPlaceholder) tratando os três estados — **carregando / erro / dados** —
  com `try / catch / finally` e checagem de `res.ok`.
- **Estilização responsiva:** `className` + arquivo `.css` com layout para
  desktop e mobile.
