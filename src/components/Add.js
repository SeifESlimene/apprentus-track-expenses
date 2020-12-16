// DESIGN
import { MDBInput, MDBBtn } from "mdbreact";
import { DatePicker, Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

// FORM VALIDATION
import { DisplayFormikState } from "./helper.js";

// DESIGN
const { Option } = Select;

function Add({
  setFieldValue,
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
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
        // value={values.date}
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
        color="deep-orange"
        className="add-expense-btn"
      >
        Add Expense
      </MDBBtn>
      <DisplayFormikState value={values} />
    </form>
  );
}

export default Add;
