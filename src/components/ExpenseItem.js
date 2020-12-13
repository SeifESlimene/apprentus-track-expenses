import React from "react";
import { MDBIcon } from "mdbreact";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteExpense } from "../actions/expense_actions";
import { useDispatch } from "react-redux";
function ExpenseItem({ name, date, amount, approval, id, year, month }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(id);
    dispatch(deleteExpense(id, month, year));
  };
  return (
    <div
      className="mt-2 mb-2"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "110px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E5F3FE",
            borderRadius: "10px",
            width: "50px",
            height: "50px",
            marginRight: "20px",
          }}
        >
          <MDBIcon
            icon="plane"
            style={{ color: "#77B6FF", fontSize: "22px" }}
          />
        </div>
        <div>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>{name}</div>
          <div
            style={{
              color: "#A9A9A9",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {date}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
        }}
      >
        {approval === 1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "#1BFF07",
              fontSize: "18px",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            <span>Approved</span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "#FF1607",
              fontSize: "18px",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            <span> Not Approved</span>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            width: "40%",
          }}
        >
          <span>{amount}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E5F3FE",
              borderRadius: "10px",
              width: "37px",
              height: "37px",
              marginRight: "5px",
            }}
          >
            <Link to={`/expense?number=${id}`}>
              <MDBIcon
                far
                icon="edit"
                style={{
                  color: "#77B6FF",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F1F2F7",
              borderRadius: "10px",
              width: "37px",
              height: "37px",
            }}
          >
            <DeleteOutlined
              onClick={handleDelete}
              style={{ color: "#B9BDC9", fontSize: "22px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
