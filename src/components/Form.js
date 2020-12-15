// REACT
import { useState, useEffect } from "react";

// NAVIGATION
import { useLocation } from "react-router-dom";

// STORE
import { useDispatch, useSelector } from "react-redux";

// DESIGN
import { MDBContainer, MDBInput, MDBBtn, MDBAlert } from "mdbreact";
import { DatePicker, Select } from "antd";

// FORM VALIDATION
import { Formik } from "formik";
import { DisplayFormikState } from "./helper.js";
import * as Yup from "yup";

// ACTIONS
import {
  fetchExpenseById,
  updateExpense,
  saveExpense,
} from "../actions/expense_actions";

// SELECTORS
import { expense_selectors } from "../selectors/expense_selectors";

// MOMENT
import moment from "moment";

const { Option } = Select;

// OUR FORM COMPONENT
function Form() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("number");
  const view = new URLSearchParams(location.search).get("view");
  const isEditMode = !!id;

  // State
  const [isValidated, setIsValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    amount: "",
    approved: "",
  });

  // use Dispatch
  const dispatch = useDispatch();

  // dispatch action to the store to retrieve the user by its ID if edit Mode
  useEffect(() => {
    if (isEditMode) {
      const id = new URLSearchParams(location.search).get("edit");
      dispatch(fetchExpenseById(id));
    }
  }, [dispatch, location.search]);

  // user
  const expense_user = useSelector(expense_selectors);

  // set user in state if edit Mode
  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: expense_user[0].name,
        date: moment(expense_user[0].date).format("YYYY-MM-DD"),
        description: expense_user[0].description,
        amount: expense_user[0].amount,
        approved: expense_user[0].approved === 1 ? "Yes" : "No",
      });
    }
  }, [expense_user, location.search]);

  return (
    <>
      <MDBContainer
        className="scrollbar scrollbar-orange bordered-orange thin"
        style={{
          maxHeight: "481px",
          overflow: "auto",
        }}
      >
        <Formik
          // Initial Values
          initialValues={formData}
          // Submit method if everything is fine
          // onSubmit={(values) => {
          //   const { name, date, description, amount, approved } = values;
          //   if (location.search) {
          //     dispatch(
          //       updateExpense(id, name, date, description, amount, approved)
          //     );
          //   } else {
          //     setIsValidated(true);
          //     dispatch(
          //       saveExpense(
          //         name,
          //         date.format("YYYY-MM-DD"),
          //         description,
          //         amount,
          //         approved
          //       )
          //     );
          //   }
          // }}
          // Validation Schema
          validationSchema={Yup.object().shape({
            name: Yup.string().required(
              "* Name of the claimer can't be empty!"
            ),
            date: Yup.string().required(
              "* Date of the expense can't be empty!"
            ),
            description: Yup.string()
              .required("* Description can't be empty!")
              .min(50, "* Description must be at least 50 characters"),
            amount: Yup.string().required("* Amount can't be empty!"),
            approved: Yup.string().required("* Approved can't be empty!"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props;

            if (isEditMode) {
              // get user and set form fields
              const fields = [
                "name",
                "date",
                "description",
                "amount",
                "approved",
              ];
              fields.forEach((field) =>
                setFieldValue(field, formData[field])
              );
            }

            return (
              <form onSubmit={handleSubmit}>
                {isValidated && (
                  <MDBAlert color="success" className="mb-4">
                    Expense added successfully!
                  </MDBAlert>
                )}
                <MDBInput
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  hint="Enter Name of the claimer"
                  name="name"
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                  value={isEditMode ? formData.name : values.name}
                  containerClass="containerClass"
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <DatePicker
                  onChange={(date) => {
                    setFieldValue("date", date);
                  }}
                  placeholder="Date of the expense"
                  name="date"
                  value={values.date}
                  suffixIcon=""
                  style={{ width: "100%" }}
                />
                {errors.date && touched.date && (
                  <div className="input-feedback">{errors.date}</div>
                )}
                <MDBInput
                  onChange={handleChange}
                  type="textarea"
                  hint="Description"
                  value={values.description}
                  name="description"
                  rows="3"
                />
                {errors.description && touched.description && (
                  <div className="input-feedback">{errors.description}</div>
                )}
                <MDBInput
                  onChange={handleChange}
                  type="number"
                  name="amount"
                  value={values.amount}
                  hint="Amount"
                />
                {errors.amount && touched.amount && (
                  <div className="input-feedback">{errors.amount}</div>
                )}
                <Select
                  name="approved"
                  value={values.approved}
                  style={{ width: "100%" }}
                  placeholder="Approve"
                  onChange={(value) => setFieldValue("approved", value)}
                >
                  <Option value="1">Yes</Option>
                  <Option value="0">No</Option>
                </Select>
                {errors.approved && touched.approved && (
                  <div className="input-feedback">{errors.approved}</div>
                )}
                {!location.search ? (
                  <>
                    <MDBBtn
                      disabled={isSubmitting}
                      type="submit"
                      label=""
                      color="deep-orange"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        margin: "0",
                      }}
                    >
                      Add Expense
                    </MDBBtn>
                    <DisplayFormikState {...props} />
                  </>
                ) : (
                  <MDBBtn
                    label=""
                    color="amber"
                    style={{ width: "100%", borderRadius: "10px", margin: "0" }}
                  >
                    Edit Expense
                  </MDBBtn>
                )}
              </form>
            );
          }}
        </Formik>
      </MDBContainer>
    </>
  );
}

export default Form;
