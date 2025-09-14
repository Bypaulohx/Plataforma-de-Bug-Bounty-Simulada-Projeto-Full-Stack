## Visão geral

Stack escolhida (simples, popular e fácil de rodar):

Backend: Node.js + Express + Mongoose (MongoDB)

Frontend: React + Vite

Autenticação: JWT (JSON Web Tokens)

Banco de dados: MongoDB (local ou Atlas)

Testes e dev: Nodemon, concurrently

## Estrutura de Pasta
```
bug-bounty-platform/
├─ backend/
│ ├─ package.json
│ ├─ .env.example
│ ├─ src/
│ │ ├─ server.js
│ │ ├─ config/db.js
│ │ ├─ models/User.js
│ │ ├─ models/Challenge.js
│ │ ├─ models/Submission.js
│ │ ├─ routes/auth.js
│ │ ├─ routes/challenges.js
│ │ ├─ routes/submissions.js
│ │ └─ middleware/auth.js
│ └─ README-backend.md
├─ frontend/
│ ├─ package.json
│ ├─ vite.config.js
│ ├─ public/
│ ├─ src/
│ │ ├─ main.jsx
│ │ ├─ App.jsx
│ │ ├─ api/axios.js
│ │ ├─ pages/Login.jsx
│ │ ├─ pages/Register.jsx
│ │ ├─ pages/Dashboard.jsx
│ │ ├─ pages/CompanyPanel.jsx
│ │ ├─ pages/HackerPanel.jsx
│ │ ├─ components/ChallengeCard.jsx
│ │ └─ styles.css
│ └─ README-frontend.md
├─ .gitignore
└─ README.md
```
