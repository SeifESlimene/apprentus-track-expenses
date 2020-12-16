// React
import React, { useEffect } from "react";
// Design
import { MDBBox } from "mdbreact";
// Moment
import moment from "moment";
// React Redux
import { useSelector, useDispatch } from "react-redux";
// Selectors
import {
  expense_selectors,
  expense_by_month_year,
} from "../selectors/expense_selectors";
// Redux Action
import { fetchExpense } from "../actions/expense_actions";
// Our Components
import HeaderMain from "../components/HeaderMain";
import ExpenseItem from "../components/ExpenseItem";

function ListExpenses() {
  // Dispatch Fetch All Months Action To The Store
  const dispatch = useDispatch();
  // All Month Selector
  const expenses = useSelector(expense_selectors);
  useEffect(() => {
    dispatch(fetchExpense());
  }, []);
  // By Month Selector
  const byMonth = useSelector(expense_by_month_year);
  // Total Amount
  const arrayAmount = expenses.map((entry) => {
    return entry.amount;
  });

  return (
    <div className="list-expenses">
      <HeaderMain />
      <MDBBox className="list-expenses-info">
        <div className="list-expenses-info-date mr-5">
          {byMonth &&
            byMonth.year &&
            moment(byMonth.month).format("MMMM") + " " + byMonth.year}
        </div>
        <div className="list-expenses-info-transactions">
          <span>Number of transactions : {expenses.length}</span>
          <span className="ml-5">
            {expenses.length &&
              "Value : " +
                arrayAmount.reduce(
                  (accumulator, current) => accumulator + current,
                  0
                ) +
                "€"}
          </span>
        </div>
      </MDBBox>
      <div
        className={`${
          expenses.length === 0
            ? "list-expenses-body-nempty"
            : "list-expenses-body-empty "
        } scrollbar scrollbar-orange bordered-orange thin`}
      >
        {expenses.length ? (
          <>
            {expenses.map((entry, key) => {
              return (
                <ExpenseItem
                  key={key}
                  id={entry._id}
                  name={entry.name}
                  amount={entry.amount + "€"}
                  approval={entry.approved}
                  date={moment(entry.date).format("DD MMMM YYYY")}
                  year={moment(entry.date).format("YYYY")}
                  month={moment(entry.date).format("MM")}
                />
              );
            })}
          </>
        ) : (
          <div className="no-expenses">
            <span>No Expenses For This Month</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListExpenses;
