import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";

import expenseRoutes from "./src/routes/expenseRoutes.js";
import incomeRoutes from "./src/routes/incomeRoutes.js";

dotenv.config();

const app = express();

// --- middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"].filter(Boolean),
  })
);

// --- basic routes (so Render root URL doesn’t 404)
app.get("/", (_req, res) =>
  res.send("✅ Smart Expense Tracker Backend is running")
);
app.get("/api", (_req, res) => res.json({ ok: true }));

// --- API routes
app.use("/api/expenses", expenseRoutes);
app.use("/api/incomes", incomeRoutes);

// --- 404 + error handlers (optional but nice)
app.use((req, res) => res.status(404).json({ error: "Not found" }));
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 5000;

// Start only after DB is ready
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // wait up to 30s to find a server
      // connectTimeoutMS: 30000,       // optional; helps on slow cold starts
    });
    console.log("✅ MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 API on ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Mongo connect error:", err.message);
    process.exit(1); // crash so Render restarts and you notice it
  }
}

start();
