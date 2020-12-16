import React from "react";
import { MDBIcon } from "mdbreact";
import {
  DeleteOutlined,
  IdcardOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteExpense } from "../actions/expense_actions";
import { useDispatch } from "react-redux";

function ExpenseItem({ name, date, amount, approval, id, year, month }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(id, month, year));
  };
  return (
    <div className="expense-item-container">
      <div className="expense-item-header">
        <div className="expense-item-header-logo-container">
          <MDBIcon icon="plane" className="expense-item-header-logo" />
        </div>
        <div>
          <div className="expense-item-name">{name}</div>
          <div className="expense-item-date">{date}</div>
        </div>
      </div>
      <div className="expense-item-approval">
        {approval === 1 ? (
          <div className="expense-item-approval-approved">
            <span>Approved</span>
          </div>
        ) : (
          <div className="expense-item-approval-not-approved">
            <span> Not Approved</span>
          </div>
        )}
        <div className="expense-item-amount">
          <span>{amount}</span>
        </div>
        <div className="expense-item-actions">
          <div className="expense-item-view-container">
            <Link to={`/expense?view=${id}`}>
              <IdcardOutlined className="expense-item-view-logo" />
            </Link>
          </div>
          <div className="expense-item-edit-container">
            <Link to={`/expense?edit=${id}`}>
              <EditOutlined className="expense-item-edit-logo" />
            </Link>
          </div>
          <div className="expense-item-delete-container">
            <DeleteOutlined
              onClick={handleDelete}
              className="expense-item-delete-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
