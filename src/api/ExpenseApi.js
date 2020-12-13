import axios from "axios";


export const apiFetchExpense = async (month, year) => {
  const prefix = "/expenses";
  const res =
    year && month
      ? await axios.get(`${prefix}/${year}/${month}`)
      : await axios.get(`${prefix}`);
  const data = await res.data;
  return data;
};
