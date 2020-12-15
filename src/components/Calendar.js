// Import React & Hooks
import React, { useState, useCallback } from "react";
// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// React Redux
import { useDispatch } from "react-redux";
// Action
import { fetchExpenseByMonthYear } from "../actions/expense_actions";
// Moment
import moment from "moment";
// Custom Input For React DatePicker
import CustomInput from "./CustomInput";

function Calendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const handleChange = (date) => {
    const year = moment(date).format("YYYY");
    const month = moment(date).format("MM");
    dispatch(fetchExpenseByMonthYear(month, year));
    setDate(date);
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleCalendarOpen = () => {
    setIsClicked(true);
  };
  const handleCalendarClose = () => {
    setIsClicked(false);
  };
  return (
    <div>
      <DatePicker
        selected={date}
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
