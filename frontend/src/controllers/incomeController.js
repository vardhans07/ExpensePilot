import Income from "../models/Income.js";
const toClient = d => ({ id: d._id.toString(), amount:d.amount, date:d.date, note:d.note });

export const listIncomes = async (_req, res) => {
  const items = await Income.find().sort({ date:-1, createdAt:-1 });
  res.json(items.map(toClient));
};

export const createIncome = async (req, res) => {
  const item = await Income.create(req.body);
  res.status(201).json(toClient(item));
};

export const updateIncome = async (req, res) => {
  const item = await Income.findByIdAndUpdate(req.params.id, req.body, { new:true });
  if (!item) return res.status(404).json({ message:"Not found" });
  res.json(toClient(item));
};

export const deleteIncome = async (req, res) => {
  const del = await Income.findByIdAndDelete(req.params.id);
  if (!del) return res.status(404).json({ message:"Not found" });
  res.json({ ok:true });
};
