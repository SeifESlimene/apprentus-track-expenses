import React, { useState, useEffect } from "react";
import { MDBBox } from "mdbreact";
import HeaderMain from "../components/HeaderMain";
import ExpenseItem from "../components/ExpenseItem";
import Expenses from "../api/ExpenseApi";
import moment from "moment";
import { Spin, Space } from "antd";

const { getExpenses } = Expenses;

function ListExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateExpense, setDateExpense] = useState(undefined);
  useEffect(() => {
    console.log("inside");
    setLoading(false);
    const month = moment(dateExpense).format("MM");
    const year = moment(dateExpense).format("YYYY");
    getExpenses(month, year).then((data) => {
      setExpenses(data);
      setLoading(false);
    });
  }, [dateExpense]);
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
  console.log("fuck", dateExpense);
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
          {dateExpense ? moment(dateExpense).format("MMMM YYYY") : ""}
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
        {!loading ? (
          expenses.length ? (
            <>
              {expenses.map((entry, key) => {
                return (
                  <ExpenseItem
                    key={key}
                    name={entry.name}
                    amount={entry.amount + "€"}
                    approval={entry.approved}
                    date={moment(entry.date).format("DD MMMM YYYY")}
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
          )
        ) : (
          <>
            <div
              style={{
                margin: "80px",
              }}
            >
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListExpenses;
