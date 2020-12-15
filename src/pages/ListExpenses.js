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
  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  // All Month Selector
  const expenses = useSelector(expense_selectors);
  // By Month Selector
  const byMonth = useSelector(expense_by_month_year);
  // Total Amount
  const arrayAmount = expenses.map((entry) => {
    return entry.amount;
  });

  const style1 = {
    maxHeight: "481px",
    overflow: "auto",
    padding: "0 10px 0 0",
    display: "Flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  const style2 = {
    maxHeight: "481px",
    overflow: "auto",
    padding: "0 10px 0 0",
  };
  return (
    <div
      style={{
        backgroundColor: "#F1F2F7",
      }}
    >
      <HeaderMain />
      <MDBBox
        display="flex"
        className="mt-5 mb-3"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {byMonth &&
            byMonth.year &&
            moment(byMonth.month).format("MMMM") + " " + byMonth.year}
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "roboto",
            fontSize: "20px",
          }}
        >
          <span>Number of transactions : {expenses.length}</span>
          <span className="ml-5">
            {"Value : " +
              arrayAmount.reduce(
                (accumulator, current) => accumulator + current,
                0
              ) +
              "€"}
          </span>
        </div>
      </MDBBox>
      <div
        className="scrollbar scrollbar-orange bordered-orange thin"
        style={expenses.length === 0 ? style1 : style2}
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
          <div
            style={{
              color: "#B9BDC9",
              fontSize: "20px",
              margin: "25px",
            }}
          >
            <span>No Expenses For This Month</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListExpenses;
