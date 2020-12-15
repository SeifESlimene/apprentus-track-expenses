import React from "react";
import { MDBIcon } from "mdbreact";
import { DeleteOutlined, IdcardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteExpense } from "../actions/expense_actions";
import { useDispatch } from "react-redux";
function ExpenseItem({ name, date, amount, approval, id, year, month }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
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
          width: "40%",
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
            width: "30%",
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
              backgroundColor: "rgba(255,9,66,0.1)",
              borderRadius: "10px",
              width: "43px",
              height: "43px",
              marginRight: "5px",
            }}
          >
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "43px",
                height: "43px",
              }}
              to={`/expense?view=${id}`}
            >
              <IdcardOutlined
                style={{
                  color: "rgba(255,9,66,0.9)",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
          <div
            style={{
              backgroundColor: "#E5F3FE",
              borderRadius: "10px",
              width: "43px",
              height: "43px",
              marginRight: "5px",
            }}
          >
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "43px",
                height: "43px",
              }}
              to={`/expense?edit=${id}`}
            >
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
              width: "43px",
              height: "43px",
              marginRight: "5px",
            }}
          >
            <DeleteOutlined
              onClick={handleDelete}
              style={{ color: "#B9BDC9", fontSize: "26px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
