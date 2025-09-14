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
└─ .gitignore
```

## Passo a passo — preparação (VSCode)

Instale Node.js (>= 18) e Git.

Abra o VSCode.

Clone o repositório (ou crie pasta bug-bounty-platform).

Abra a pasta no VSCode: File > Open Folder.

Abra um terminal integrado (Ctrl+` ).

Vamos criar duas pastas: backend e frontend.

## Backend — configuração e código
Inicializar o backend
```
cd backend
npm init -y
npm i express mongoose bcryptjs jsonwebtoken cors dotenv
npm i -D nodemon
```

## Frontend — configuração e código
Inicializar frontend (Vite + React)
```
cd ../frontend
npm create vite@latest . -- --template react
npm i
npm i axios jwt-decode
```
