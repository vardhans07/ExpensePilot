

---

# ExpensePilot
ExpensePilot is a smart, full‑stack expense tracking application that helps users take control of their personal finances. It combines a powerful backend with an intuitive frontend to make expense management effortless and insightful.


## What this project uses

### Frontend
- React 19
- Vite
- Tailwind CSS 4
- Axios
- Recharts
- Chart.js
- React Datepicker
- React Toastify
- Date-fns
- Lottie React
- Heroicons
- Font Awesome

### Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- CORS
- dotenv
- morgan

---

## What you need to install on your PC or laptop

Before running this project, install the following tools:

### 1) Node.js and npm
Node.js is required for both frontend and backend development. npm comes with Node.js and is used to install project dependencies. Use the LTS version for best stability.

Verify installation:
```bash
node -v
npm -v
```

### 2) Git
Git is needed to clone the repository and manage source code.

Verify installation:
```bash
git --version
```

### 3) MongoDB Atlas account
This project uses MongoDB Atlas for database storage. You do not need to install MongoDB locally if you are using Atlas. Create:
- A MongoDB Atlas account
- A database cluster
- A database user
- A connection string

MongoDB Atlas is the hosted cloud database service used by this project. It provides the `MONGO_URI` value for the backend environment file. [web:15]

---

## Recommended versions

- Node.js: LTS version
- npm: latest compatible with your Node.js version
- Browser: latest Chrome, Edge, or Firefox
- Code editor: VS Code recommended

To check installed versions:
```bash
node -v
npm -v
git --version
```

---

## Project structure

Use this structure if your project is organized in separate frontend and backend folders:

```bash
ExpensePilot/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── .env
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── controllers/
│   │   └── index.js
│   ├── package.json
│   └── .env
└── README.md
```

If your backend files are directly in the root, use the same commands from the project root instead of `backend/`.

---

## Features

- Add income and expense entries
- Edit and delete transactions
- View total income, total expense, and balance
- Filter expenses by date, amount, and category
- View category-wise totals
- View charts and visual spending breakdown
- Responsive UI for desktop and mobile
- Persistent data storage with MongoDB Atlas
- REST API for CRUD operations

---

## Environment variables

### Backend `.env`
Create a `.env` file inside the backend folder:

```bash
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`
Create a `.env` file inside the frontend folder if your frontend uses API variables:

```bash
VITE_API_URL=http://localhost:5000/api
```

Vite only exposes environment variables that start with `VITE_`.

---

## Installation steps

## Step 1: Clone the project

Go to the folder where you want to place the project, then run:

```bash
git clone https://github.com/your-username/ExpensePilot.git
cd ExpensePilot
```

---

## Step 2: Install backend dependencies

Move into the backend folder and install packages:

```bash
cd backend
npm install
```

This installs all backend dependencies from `package.json`. npm installs project dependencies listed in the file when you run `npm install`. [web:19]

---

## Step 3: Add backend environment file

Inside the `backend/` folder, create a file named `.env` and add:

```bash
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Example command for Linux/macOS terminal:

```bash
cat > .env <<EOF
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
EOF
```

If you are on Windows, create the `.env` file manually in the backend folder.

---

## Step 4: Start the backend

From the `backend/` folder:

```bash
npm run dev
```

If your backend does not have a `dev` script, use:

```bash
npm start
```

If your entry file is different, run the server using the correct file path, for example:

```bash
node src/index.js
```

Your backend will usually run on:

```bash
http://localhost:5000
```

---

## Step 5: Install frontend dependencies

Open a new terminal window and move into the frontend folder:

```bash
cd frontend
npm install
```

This installs React, Vite, Tailwind, chart libraries, date utilities, and all UI packages used by the app.

---

## Step 6: Add frontend environment file

Inside the `frontend/` folder, create a `.env` file if your app uses an API URL:

```bash
VITE_API_URL=http://localhost:5000/api
```

Example command for Linux/macOS terminal:

```bash
cat > .env <<EOF
VITE_API_URL=http://localhost:5000/api
EOF
```

---

## Step 7: Start the frontend

From the `frontend/` folder:

```bash
npm run dev
```

Vite usually starts the app on:

```bash
http://localhost:5173
```

---

## Run both together

If you want to run frontend and backend side by side, open two terminals:

### Terminal 1 — backend
```bash
cd backend
npm run dev
```

### Terminal 2 — frontend
```bash
cd frontend
npm run dev
```

---

## Production build

### Build frontend
From the `frontend/` folder:

```bash
npm run build
```

This creates a production-ready build inside the `dist/` folder.

### Preview frontend build locally
```bash
npm run preview
```

---

## Backend run in production

From the `backend/` folder:

```bash
npm start
```

If you deploy on Render or another cloud host, make sure these environment variables are added in the hosting dashboard:

```bash
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
FRONTEND_URL=https://your-frontend-domain.com
```

---

## Main backend code behavior

Your backend Express app does the following:
- Enables JSON parsing
- Enables CORS for frontend access
- Logs requests with morgan
- Connects to MongoDB Atlas using Mongoose
- Exposes `/api/expenses` and `/api/incomes`
- Returns a basic health response on `/` and `/api`

Typical backend startup flow:

```bash
npm run dev
```

The server first connects to MongoDB, then starts listening on the configured port.

---

## Suggested developer workflow

### First time setup
```bash
git clone https://github.com/your-username/ExpensePilot.git
cd ExpensePilot
cd backend
npm install
cd ../frontend
npm install
```

### Every time you run locally
```bash
cd backend
npm run dev
```

```bash
cd frontend
npm run dev
```

---

## API routes

Your project uses REST-style routes for income and expenses.

### Expenses
```bash
GET /api/expenses
POST /api/expenses
PUT /api/expenses/:id
DELETE /api/expenses/:id
```

### Incomes
```bash
GET /api/incomes
POST /api/incomes
PUT /api/incomes/:id
DELETE /api/incomes/:id
```

### Health check
```bash
GET /
GET /api
```

---

## Example API test

Create an expense using curl:

```bash
curl -X POST http://localhost:5000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"title":"Lunch","amount":250,"category":"Food","date":"2026-07-01"}'
```

---

## Common troubleshooting

### MongoDB connection error
Check:
- `MONGO_URI` is correct
- Atlas cluster is active
- Database user exists
- IP address is allowed in Atlas network access

### CORS error
Check:
- `FRONTEND_URL` matches your frontend URL
- Frontend and backend ports are correct
- Your backend CORS config includes the correct origin

### Frontend API not working
Check:
- `VITE_API_URL` is correct
- Backend server is running
- The frontend is calling the correct endpoint

### Port already in use
If port 5000 or 5173 is already busy, stop the other process or change the port in the `.env` file.

---

## Notes for developers

- Use `npm install` inside each folder that has its own `package.json`.
- Keep `.env` files out of Git.
- Use Vite for fast frontend development.
- Use MongoDB Atlas for production-ready persistence.
- Keep backend and frontend URLs consistent during local development and deployment.

---

## Clean installation summary

```bash
git clone https://github.com/your-username/ExpensePilot.git
cd ExpensePilot
```

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

```bash
cd frontend
npm run build
```

---

## Final setup checklist

- Node.js installed
- npm installed
- Git installed
- MongoDB Atlas cluster created
- `.env` files created in backend and frontend
- Backend running on port 5000
- Frontend running on port 5173
- API connected correctly
- Charts and dashboard working

---

## Short project description

ExpensePilot is a clean full-stack expense tracker built with React and Node.js, using MongoDB Atlas for persistent storage and a modern dashboard UI for managing personal finances.
