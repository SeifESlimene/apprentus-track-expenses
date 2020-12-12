import { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBAlert } from "mdbreact";
import axios from "axios";

function Form() {
  const [isValidated, setIsValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    amount: "",
    approved: "",
  });
  const handleSubmit = () => {
    console.log("Expense About To Be Added!");
    axios
      .post("http://localhost:5000/api/v1/expenses/add", {
        ...formData,
      })
      .then((res) => {
        setIsValidated(true);
        console.log("Expense Added!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "amount" || e.target.name === "approved") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
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
          type="text"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          type="textarea"
          hint="Description"
          name="description"
          rows="3"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          type="number"
          name="amount"
          hint="Amount"
        />
        <MDBInput
          onChange={(e) => handleChange(e)}
          hint="Type either Yes or No"
          name="approved"
          type="text"
        />
        <MDBBtn
          label=""
          onClick={handleSubmit}
          color="deep-orange"
          style={{ width: "100%", borderRadius: "10px", margin: "0" }}
        >
          Add Expense
        </MDBBtn>
      </MDBContainer>
    </>
  );
}

export default Form;
