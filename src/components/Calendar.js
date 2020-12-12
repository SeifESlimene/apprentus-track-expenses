import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBIcon } from "mdbreact";

function Calendar({ SetDateHeader, inForm }) {
  // Handle Click
  const [click, setClick] = useState(false);
  // Handle Dates
  const [date, setDate] = useState(undefined);
  // Handle Calendar Open
  const handleCalendarOpen = () => {
    setClick(true);
  };
  // handle Date
  const handleSetDate = (date) => {
    setDate(date);
    SetDateHeader(date);
  };
  // Handle Calendar Close
  const handleCalendarClose = () => {
    setClick(false);
  };
  // Our Custom Input
  const ExampleCustomInput = ({ value, onClick }) => {
    return (
      
      <button
        className="example-custom-input"
        style={{ width: "225px", padding: "10px 20px" }}
        onClick={onClick}
      >
        <MDBIcon far icon="calendar" />
        <span>{value || "Select a date"}</span>

        {click ? (
          <MDBIcon className="rotateChev" icon="chevron-up" />
        ) : (
          <MDBIcon className="rotateChev" icon="chevron-down" />
        )}
      </button>
    );
  };
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleSetDate}
        dateFormat="MMMM - yyyy"
        customInput={<ExampleCustomInput />}
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
