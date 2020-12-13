import { useState, useEffect } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBAlert } from "mdbreact";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExpenseById,
  updateExpense,
  saveExpense,
} from "../actions/expense_actions";
import moment from "moment";
import { expense_selectors } from "../selectors/expense_selectors";

function Form() {
  const location = useLocation();
  // console.log(new URLSearchParams(location.search).get("number"));
  const [isValidated, setIsValidated] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    amount: "",
    approved: "",
  });
  useEffect(() => {
    if (location.search) {
      const id = new URLSearchParams(location.search).get("number");
      dispatch(fetchExpenseById(id));
    }
  }, [dispatch, location.search]);
  const expense_user = useSelector(expense_selectors);
  useEffect(() => {
    if (location.search) {
      setFormData({
        name: expense_user[0].name,
        date: moment(expense_user[0].date).format("YYYY-MM-DD"),
        description: expense_user[0].description,
        amount: expense_user[0].amount,
        approved: expense_user[0].approved === 1 ? "Yes" : "No",
      });
    }
  }, [expense_user, location.search]);
  const handleSubmit = () => {
    setIsValidated(true)
    const { name, date, description, amount, approved } = formData;
    dispatch(saveExpense(name, date, description, amount, approved));
  };
  const id = new URLSearchParams(location.search).get("number");
  const handleEdit = () => {
    const { name, date, description, amount, approved } = formData;
    dispatch(updateExpense(id, name, date, description, amount, approved));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MDBContainer
        className="scrollbar scrollbar-orange bordered-orange thin"
        style={{
          maxHeight: "481px",
          overflow: "auto",
        }}
      >
        {isValidated && (
          <MDBAlert color="success" className="mb-4">
            Expense added successfully!
          </MDBAlert>
        )}
        <MDBInput
          onChange={(e) => handleChange(e)}
          hint="Name of the claimer"
          name="name"
          value={formData.name}
          type="text"
          containerClass="containerClass"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          hint="Date of the expense"
          name="date"
          value={formData.date}
          type="text"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          type="textarea"
          hint="Description"
          value={formData.description}
          name="description"
          rows="3"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          type="number"
          name="amount"
          value={formData.amount}
          hint="Amount"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          hint="Type either Yes or No"
          name="approved"
          value={formData.approved}
          type="text"
        />
        {!location.search ? (
          <MDBBtn
            label=""
            onClick={handleSubmit}
            color="deep-orange"
            style={{ width: "100%", borderRadius: "10px", margin: "0" }}
          >
            Add Expense
          </MDBBtn>
        ) : (
          <MDBBtn
            label=""
            onClick={handleEdit}
            color="amber"
            style={{ width: "100%", borderRadius: "10px", margin: "0" }}
          >
            Edit Expense
          </MDBBtn>
        )}
      </MDBContainer>
    </>
  );
}

export default Form;
