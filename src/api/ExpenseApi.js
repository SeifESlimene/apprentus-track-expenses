import axios from "axios";

const Expense = {};

Expense.getExpenses = async (month, year) => {
  const prefix = "http://localhost:5000/api/v1/expenses";
  const res =
    year && month
      ? await axios.get(`${prefix}/${year}/${month}`)
      : await axios.get(`${prefix}`);
  const data = await res.data;
  return data;
};

export default Expense;
