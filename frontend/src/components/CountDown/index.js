import React, { memo } from "react";
import { CountDownStyled } from "./CountDown.styled";
import CountDownItem from "./CountDownItem";
import ExpiredNotice from "./ExpiredNotice";
import { useCountdown } from "./useCountDown.hook";
function CountDown({ timePicker }) {
  const [days, hours, minutes, seconds, timeRemaining] =
    useCountdown(timePicker);
  if (timeRemaining <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <CountDownStyled>
        <CountDownItem value={days || 0} label={"Days"} />
        <CountDownItem value={hours || 0} label={"Hours"} />
        <CountDownItem value={minutes || 0} label={"Minutes"} />
        <CountDownItem value={seconds || 0} label={"Seconds"} />
      </CountDownStyled>
    );
  }
}

export default memo(CountDown);
