import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: white;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  .progress-percent {
    width: ${(props) => (props.size ? props.size + "%" : "100%")};
    height: 100%;
    background-color: red;
  }
`;
