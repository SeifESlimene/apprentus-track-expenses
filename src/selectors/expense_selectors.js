// Expense Selector All Months
export const expense_selectors = ({ expense }) => expense;
// Expense Selector By Month
export const expense_by_month_year = ({ allMonth, month, year }) => {
  return { allMonth, month, year };
};
