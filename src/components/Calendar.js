import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "./CustomInput";
import { useDispatch } from "react-redux";
import { fetchExpenseByMonthYear } from "../actions/expense_actions";
import moment from "moment";

function Calendar({ SetDateHeader, inForm }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const handleChange = useCallback(
    (date) => {
      const year = moment(date).format("YYYY");
      const month = moment(date).format("MM");
      dispatch(fetchExpenseByMonthYear(month, year));
      setDate(date);
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
