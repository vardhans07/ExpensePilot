# 🛠️ Smart Expense Tracker — Backend (Node.js + Express + MongoDB)

This is the **backend API** for the Smart Expense Tracker.  
It provides RESTful endpoints to manage **incomes** and **expenses**, with full CRUD operations, filtering, and persistent storage in **MongoDB Atlas**.

🌐 **Frontend (Live App):** https://smart-expense-tracker-nine.vercel.app  
⚙️ **Backend (API):** https://smart-expense-backend-n1u3.onrender.com  

---

## ✨ Features
- 🔄 Full **CRUD API** for incomes & expenses  
- 🧪 Query filters for category, amount, and date range  
- 🍃 Persistent data storage in **MongoDB Atlas**  
- 🔑 Configurable with environment variables  
- 🌍 CORS-enabled (frontend + backend integration)  
- 📝 Request logging with **morgan**  

---

## ⚙️ Tech Stack
- 🟢 Node.js  
- 🚂 Express.js  
- 🍃 MongoDB Atlas + Mongoose  
- 🔑 dotenv (env config)  
- 🌍 CORS  
- 📝 morgan (logging)  
- 🚀 Deployment: Render  

---

## 🚀 Run Locally

### 1. Clone & Install
```bash
git clone https://github.com/<you>/smart-expense-backend
cd smart-expense-backend
npm install
```

### 2. Configure Environment
Create a .env file in the project root:

```inv
MONGO_URI=<your-mongodb-uri>
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 3. Start Server
```bash
npm run dev   # development with nodemon
# or
npm start     # production
```

Server will start on:
👉 http://localhost:5000

----