import React from "react";
import HeaderMain from "../components/HeaderMain";
import Form from "../components/Form";

function Expense() {
  return (
    <div
      style={{
        backgroundColor: "#F1F2F7",
      }}
    >
      <HeaderMain />
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "33px",
          padding: "45px 85px",
          margin: "20px 0",
        }}
      >
        <Form />
      </div>
    </div>
  );
}

export default Expense;
