// REACT
import { useEffect, useState } from "react";

// NAVIGATION
import { useLocation } from "react-router-dom";

// STORE
import { useDispatch, useSelector } from "react-redux";

// DESIGN
import { MDBInput, MDBBtn, MDBAlert } from "mdbreact";
import { DatePicker, Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

// FORM VALIDATION
import { DisplayFormikState } from "./helper.js";

// ACTIONS
import { fetchExpenseById } from "../actions/expense_actions";

// SELECTORS
import { expense_selectors } from "../selectors/expense_selectors";

// MOMENT
import moment from "moment";

// DESIGN
const { Option } = Select;

function Edit({
  setFieldValue,
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("edit");
  // use Dispatch
  const dispatch = useDispatch();

  // get user and set form fields
  useEffect(() => {
    dispatch(fetchExpenseById(id));
  }, [id]);

  const expense_user = useSelector(expense_selectors);

  useEffect(() => {
    const fields = ["name", "date", "description", "amount", "approved"];
    fields.map((item, index) => {
      if (index === 1) {
        setFieldValue(item, moment(expense_user[0][item]));
      } else {
        setFieldValue(item, expense_user[0][item]);
      }
    });
    // fields.forEach((field) => {
    // setFieldValue(field, expense_user[field])});
  }, [expense_user]);

  return (
    <form onSubmit={handleSubmit}>
      {isSubmitting && (
        <MDBAlert color="success" className="mb-4">
          Expense Edited successfully!
        </MDBAlert>
      )}
      <MDBInput
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        hint="Enter Name of the claimer"
        name="name"
        className={
          errors.name && touched.name ? "text-input error" : "text-input"
        }
        // value={values.name}
        value={values.name}
        containerClass="containerClass"
      />
      {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}
      <DatePicker
        onChange={(date) => {
          setFieldValue("date", date);
        }}
        // bordered={false}
        placeholder="Date of the expense"
        name="date"
        value={values.date}
        suffixIcon={<CalendarOutlined className="calendar-icon" />}
        className="date-picker"
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
        hint="Amount (Euro)"
        icon="euro-sign"
        className="border-bottom-0"
      />
      {errors.amount && touched.amount && (
        <div className="input-feedback">{errors.amount}</div>
      )}
      <Select
        className="selectapproved"
        name="approved"
        value={values.approved}
        className="select-approval"
        placeholder="Approve"
        onChange={(value) => setFieldValue("approved", value)}
      >
        <Option value="1">Yes</Option>
        <Option value="0">No</Option>
      </Select>
      {errors.approved && touched.approved && (
        <div className="input-feedback">{errors.approved}</div>
      )}
      <MDBBtn
        disabled={isSubmitting}
        type="submit"
        label=""
        color="amber"
        className="edit-expense-btn"
      >
        Edit Expense
      </MDBBtn>
      {/* <DisplayFormikState value={values} /> */}
    </form>
  );
}

export default Edit;
