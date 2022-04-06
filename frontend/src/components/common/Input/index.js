import React from "react";
import PropTypes from "prop-types";
import { Input, Label, Message, InputWrapper } from "./Input.styled";

function InputField({
  label,
  name,
  value,
  placeholder,
  type,
  ref,
  onChange,
  isRequired,
}) {
  return (
    <InputWrapper>
      {label && (
        <Label>
          {label} : {""}
          <Message className={isRequired ? "" : "hidden"}>is required</Message>
        </Label>
      )}
      <Input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        isRequired={isRequired}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ref: PropTypes.any,
  isRequired: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  type: "text",
  isRequired: false,
  onChange: () => {},
};

export default InputField;
