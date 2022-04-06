import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";
function Button({ label, handleClick, isShow, type, disable, className }) {
  return (
    <ButtonStyled
      onClick={handleClick}
      isShow={isShow}
      className={className}
      type={type}
      disabled={disable}
    >
      {label}
    </ButtonStyled>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isShow: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "button",
  label: "Button",
  isShow: true,
  className: "",
  disabled: false,
  handleClick: () => {},
};

export default Button;
