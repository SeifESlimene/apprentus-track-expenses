import React from "react";
import HeaderMain from "../components/HeaderMain";
import Form from "../components/Form";
import styled from "styled-components";

function Expense() {
  return (
    <div
      style={{
        backgroundColor: "#F1F2F7",
      }}
    >
      <HeaderMain />
      <Div>
        <Form />
      </Div>
    </div>
  );
}

const Div = styled.div`
  background-color: #fff;
  border-radius: 33px;
  padding: 45px 85px;
  margin: 20px 0;
`;

export default Expense;
