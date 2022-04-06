import React, { useState, useCallback } from "react";
import InputDateTime from "../../components/InputDateTime";
import CountDown from "../../components/CountDown";
import { CountDownWrapper, CountDownBox } from "./CountDownPage.styled";
export default function CountDownPage() {
  // const { timePicker } = useSelector((state) => state.countdown);
  const [datePicker, setDatePicker] = useState("");
  const handleChangeDate = useCallback((time) => {
    setDatePicker(time);
  }, []);
  return (
    <CountDownWrapper>
      <CountDownBox>
        <InputDateTime onSetDatePicker={handleChangeDate} />
        <CountDown timePicker={datePicker} />
      </CountDownBox>
    </CountDownWrapper>
  );
}
