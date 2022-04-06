import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  outline: none;
  /* border-bottom: 1px solid transparent; */
  display: block;
  width: ${(props) => (props.type === "checkbox" || "radio" ? "100%" : "20%")};
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.25px solid rgba(200, 200, 200, 0.5);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(200, 200, 200, 0.8);
  }
`;

export const Label = styled.h4`
  font-size: 16px;
  margin: 0 0 10px 0;
  font-weight: 500;
  float: left;
`;

export const Message = styled.span`
  font-size: 14px;
  color: red;
  &.hidden {
    visibility: hidden;
  }
`;
