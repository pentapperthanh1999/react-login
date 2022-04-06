import React, { memo } from "react";

function CountDownItem({ value, label }) {
  return (
    <div className="countdown-item">
      <div className="countdown-number">{value}</div>
      <span>{label}</span>
    </div>
  );
}
export default memo(CountDownItem);
