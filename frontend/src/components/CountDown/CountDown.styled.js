import styled from "styled-components";

export const CountDownStyled = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0;
  .countdown-item {
    padding: 20px 40px;
    border: 1px solid #ced4da;
    .countdown-number {
      margin: 0;
      font-size: 48px;
      text-align: center;
    }
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const CountDownItem = styled.div``;
