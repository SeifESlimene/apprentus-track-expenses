import React from "react";
import { Switch, Route } from "react-router-dom";
import Expense from "../pages/Expense";
import ListExpenses from "../pages/ListExpenses";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/expense">
          <div
            style={{
              minHeight: "calc(100vh - 150px)",
              backgroundColor: "#F1F2F7",
              padding: "100px 100px 0",
            }}
          >
            <Expense />
          </div>
        </Route>
        <Route path="/list">
          <div
            style={{
              minHeight: "calc(100vh - 150px)",
              backgroundColor: "#F1F2F7",
              padding: "100px 100px 0",
            }}
          >
            <ListExpenses />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default Main;
