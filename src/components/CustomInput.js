import React from "react";
import { MDBIcon } from "mdbreact";

const CustomInput = ({ value, onClick, isClicked }, ref) => {
  return (
    <button
      className="example-custom-input"
      onClick={onClick}
    >
      <MDBIcon far icon="calendar" />
      <span>{value || "Select a date"}</span>

      {isClicked ? (
        <MDBIcon className="rotateChev" icon="chevron-up" />
      ) : (
        <MDBIcon className="rotateChev" icon="chevron-down" />
      )}
    </button>
  );
};

const forwardInput = React.forwardRef(CustomInput);

export default forwardInput;
