import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import pattern from "../pattern.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Div>
      <h3 className="text-monospace font-weight-bold mb-5">
        Welcome To Expense Tracker App
      </h3>
      <h3 className="mb-5">
        <Link to="/list">
          <MDBBtn rounded color="elegant" className="mx-0 my-0">
            Enter
          </MDBBtn>
        </Link>
      </h3>
    </Div>
  );
}

export default Home;

const Div = styled.div`
  height: 100vh;
  background-image: url(${pattern});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
