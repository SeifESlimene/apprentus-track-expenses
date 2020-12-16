import React from "react";
import { Switch, Route } from "react-router-dom";
import Expense from "../pages/Expense";
import ListExpenses from "../pages/ListExpenses";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/expense">
          <div className="main-container">
            <Expense />
          </div>
        </Route>
        <Route path="/list">
          <div className="main-container">
            <ListExpenses />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default Main;
