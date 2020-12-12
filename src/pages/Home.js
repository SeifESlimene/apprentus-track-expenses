import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import pattern from "../pattern.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${pattern})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3 className="text-monospace font-weight-bold mb-5">
        Welcome To Expense Tracker App
      </h3>
      <h3 className="mb-5">
        <a
          href="https://www.github.com/seifeslimene"
          style={{ color: "#24292e" }}
        >
          <MDBIcon fab icon="github" size="2x" />
        </a>
        <a
          href="https://www.heroku.com/"
          className="ml-5"
          style={{ color: "#24292e" }}
        >
          <MDBIcon icon="globe" size="2x" />
        </a>
      </h3>
      <h3 className="mb-5">
        <Link to="/list">
          <MDBBtn rounded color="elegant" className="mx-0 my-0">
            Enter
          </MDBBtn>
        </Link>
      </h3>
    </div>
  );
}

export default Home;
