import { Router } from "express";
import { listExpenses, createExpense, updateExpense, deleteExpense } from "../controllers/expenseController.js";
const routes = Router();
routes.get("/", listExpenses);
routes.post("/", createExpense);
routes.put("/:id", updateExpense);
routes.delete("/:id", deleteExpense);
export default routes;
