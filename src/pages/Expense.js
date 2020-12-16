import React from "react";
import HeaderMain from "../components/HeaderMain";
import Form from "../components/Form";
import styled from "styled-components";

function Expense() {
  return (
    <div className="expense">
      <HeaderMain />
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default Expense;
