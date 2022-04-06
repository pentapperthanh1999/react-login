import React, { memo } from "react";
import PropTypes from "prop-types";
import { ProgressBarWrapper } from "./ProgressBar.styled";

function ProgressBar({ currentPage, maxPage }) {
  return (
    <ProgressBarWrapper size={(currentPage / maxPage) * 100}>
      <div className="progress-percent"></div>
    </ProgressBarWrapper>
  );
}

ProgressBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  currentPage: 1,
  maxPage: 1,
};

export default memo(ProgressBar);
