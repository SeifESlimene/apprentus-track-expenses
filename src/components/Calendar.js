import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { MDBIcon } from "mdbreact";
import CustomInput from "./CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../actions/expense_actions";
import moment from "moment";

function Calendar({ SetDateHeader, inForm }) {
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (date) => {
      const year = moment(date).format("YYYY");
      const month = moment(date).format("MM");
      dispatch(fetchExpense(month, year));
    },
    [dispatch]
  );
  const [isClicked, setIsClicked] = useState(false);
  const handleCalendarOpen = () => {
    setIsClicked(true);
  };
  const handleCalendarClose = () => {
    setIsClicked(false);
  };
  // const CustomInput = ({ value, onClick, click }, ref) => {
  //   return (
  //     <button
  //       className="example-custom-input"
  //       style={{ width: "225px", padding: "10px 20px" }}
  //       onClick={onClick}
  //     >
  //       <MDBIcon far icon="calendar" />
  //       <span>{value || "Select a date"}</span>

  //       {click ? (
  //         <MDBIcon className="rotateChev" icon="chevron-up" />
  //       ) : (
  //         <MDBIcon className="rotateChev" icon="chevron-down" />
  //       )}
  //     </button>
  //   );
  // };
  // const ForwardCustomInput = React.forwardRef(CustomInput);
  return (
    <div>
      <DatePicker
        // selected={date}
        onChange={(date) => handleChange(date)}
        dateFormat="MMMM - yyyy"
        customInput={<CustomInput isClicked={isClicked} />}
        showMonthYearPicker
        showFullMonthYearPicker
        showPopperArrow={false}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        calendarClassName="rasta-stripes"
        popperModifiers={{
          offset: {
            enabled: true,
            offset: "-95px, 0px",
          },
        }}
      ></DatePicker>
    </div>
  );
}

export default Calendar;
