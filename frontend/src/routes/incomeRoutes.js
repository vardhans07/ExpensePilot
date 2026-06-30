import { Router } from "express";
import { listIncomes, createIncome, updateIncome, deleteIncome } from "../controllers/incomeController.js";
const routes = Router();
routes.get("/", listIncomes);
routes.post("/", createIncome);
routes.put("/:id", updateIncome);
routes.delete("/:id", deleteIncome);
export default routes;
