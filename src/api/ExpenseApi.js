import axios from "axios";

// Fetch all expenses and Fetch expense by Month and year
export const apiFetchExpense = async (month, year) => {
  const prefix = "/expenses";
  const res =
    year && month
      ? await axios.get(`${prefix}/${year}/${month}`)
      : await axios.get(`${prefix}`);
  const data = await res.data;
  return data;
};

// Fetch expense by id
export const apiFetchExpenseById = async (id) => {
  const prefix = "/expenses";
  const res = await axios.get(`${prefix}/${id}`);
  const data = await res.data;
  return data;
};

// Add expense
export const apiSaveExpense = async (
  name,
  date,
  description,
  amount,
  approved
) => {
  const prefix = "/expenses";
  approved = approved === "No" ? 0 : 1;
  amount = parseInt(amount);
  const res = await axios.post(`${prefix}/add`, {
    name,
    date,
    description,
    amount,
    approved,
  });
  const data = await res.data;
  return data;
};

// Update expense
export const apiUpdateExpense = async (
  id,
  name,
  date,
  description,
  amount,
  approved
) => {
  const prefix = "/expenses";
  approved = approved === "No" ? 0 : 1;
  amount = parseInt(amount);
  const res = await axios.post(`${prefix}/edit`, {
    id,
    name,
    date,
    description,
    amount,
    approved,
  });
  const data = await res.data;
  return data;
};

// Delete expense
export const apiDeleteExpense = async (id) => {
  const prefix = "/expenses";
  console.log(id);
  const res = await axios.delete(`${prefix}/delete/${id}`);
  const data = await res.data;
  return data;
};
