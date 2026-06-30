import Expense from "../models/Expense.js";
const toClient = d => ({ id: d._id.toString(), amount:d.amount, category:d.category, date:d.date, note:d.note });

export const listExpenses = async (req, res) => {
  const { category, startDate, endDate, minAmount, maxAmount } = req.query;
  const q = {};
  if (category) q.category = category;
  if (startDate || endDate) { q.date = {}; if (startDate) q.date.$gte = startDate; if (endDate) q.date.$lte = endDate; }
  if (minAmount || maxAmount) { q.amount = {}; if (minAmount) q.amount.$gte = +minAmount; if (maxAmount) q.amount.$lte = +maxAmount; }
  const items = await Expense.find(q).sort({ date:-1, createdAt:-1 });
  res.json(items.map(toClient));
};

export const createExpense = async (req, res) => {
  const item = await Expense.create(req.body);
  res.status(201).json(toClient(item));
};

export const updateExpense = async (req, res) => {
  const item = await Expense.findByIdAndUpdate(req.params.id, req.body, { new:true });
  if (!item) return res.status(404).json({ message:"Not found" });
  res.json(toClient(item));
};

export const deleteExpense = async (req, res) => {
  const del = await Expense.findByIdAndDelete(req.params.id);
  if (!del) return res.status(404).json({ message:"Not found" });
  res.json({ ok:true });
};
