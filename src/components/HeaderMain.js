import React from "react";
import { MDBBox } from "mdbreact";
import Calendar from "./Calendar";
import { Switch, Route } from "react-router-dom";

function HeaderMain() {
  return (
    <div>
      <div className="header-lg">
        <MDBBox className="header-title">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.5586 18.75H11.7188C10.4238 18.75 9.375 17.7012 9.375 16.4062C9.375 15.1113 10.4238 14.0625 11.7188 14.0625H67.9688C69.2637 14.0625 70.3125 13.0137 70.3125 11.7188C70.3125 7.83545 67.1646 4.6875 63.2812 4.6875H9.375C4.19678 4.6875 0 8.88428 0 14.0625V60.9375C0 66.1157 4.19678 70.3125 9.375 70.3125H67.5586C71.6631 70.3125 75 67.1587 75 63.2812V25.7812C75 21.9038 71.6631 18.75 67.5586 18.75ZM60.9375 49.2188C58.3491 49.2188 56.25 47.1196 56.25 44.5312C56.25 41.9429 58.3491 39.8438 60.9375 39.8438C63.5259 39.8438 65.625 41.9429 65.625 44.5312C65.625 47.1196 63.5259 49.2188 60.9375 49.2188Z"
              fill="#F7803E"
            />
          </svg>
          <span>Manage Travel Expenses</span>
        </MDBBox>
        <MDBBox display="flex" alignItems="center">
          <Switch>
            <Route path="/list">
              <Calendar />
            </Route>
          </Switch>
        </MDBBox>
      </div>
    </div>
  );
}

export default HeaderMain;
