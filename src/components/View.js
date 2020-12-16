// REACT
import React from "react";
// DESIGN
import { Card } from "antd";
// MOMENT
import moment from "moment";

function View({ formData }) {
  return (
    <div className="scrollbar scrollbar-orange bordered-orange thin containercard-view">
      <Card
        title={`Name Of The Claimer : ${formData.name}`}
        bordered={false}
        className="w-100"
      >
        <p>Date Of Expense : {moment(formData.date).format("DD MMMM YYYY")}</p>
        <p>Description : {formData.description}</p>
        <p>Amount : {formData.amount}€</p>
        <p>
          Approved : <span>{formData.approved}</span>
        </p>
      </Card>
    </div>
  );
}

export default View;
