import mongoose from "mongoose";
const IncomeSchema = new mongoose.Schema({
  amount: { type: Number, required: true, min: 0 },
  date: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ },
  note: { type: String, default: "" }
}, { timestamps: true });
export default mongoose.model("Income", IncomeSchema);
