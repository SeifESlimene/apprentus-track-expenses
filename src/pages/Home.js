import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <div className="font-weight-bold lead home-title pb-3">
          Welcome To Expense Tracker App
        </div>
        <div>
          <Link to="/list">
            <MDBBtn rounded color="elegant" className="text-monospace">
              Enter
            </MDBBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
