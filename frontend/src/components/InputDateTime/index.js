import React, { useState } from "react";
import { ButtonStyled, InputStyled } from "./InputDateTime.styled";
const InputDateTime = ({ onSetDatePicker, defaultValue, label }) => {
  //state date
  const [datePicker, setDatePicker] = useState("");
  //handle onchange
  const handleOnChange = (e) => {
    setDatePicker(e.target.value);
  };
  //handle start countdown
  const handleTimePicker = (e) => {
    const dateFormat = new Date(datePicker);
    // check value datePicker
    if (isNaN(dateFormat) === false) {
      console.log("time-format", dateFormat);
      onSetDatePicker(dateFormat);
    }
  };
  //handle reset
  const handleReset = (e) => {
    console.log("handle reset");
    setDatePicker("");
    onSetDatePicker("");
  };

  return (
    <div className="countdown-pick">
      <p>Please pick day {label}</p>
      <InputStyled
        type="datetime-local"
        format="yyyy-mm-dd"
        onChange={handleOnChange}
      />
      <ButtonStyled active onClick={handleTimePicker}>
        Start
      </ButtonStyled>
      <ButtonStyled
        onClick={handleReset}
        disabled={!datePicker ? "disabled" : ""}
      >
        Reset
      </ButtonStyled>
    </div>
  );
};

export default InputDateTime;
