import styled from "styled-components";

export const TaskWrapper = styled.div`
  padding: 50px;
  color: #3c6379;
`;
export const DataTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 1px solid #cadeed;
  border-radius: 30px;
  background: #f8faff;
`;
export const TaskHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;
  }
  .title {
    font-size: 28px;
  }
  .view-more {
    font-size: 15px;
    color: #3c6379;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    span {
      margin-right: 15px;
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
  width: 100%;
  font-size: 15px;
  thead {
    width: 100%;
    th {
      padding: 10px;
      font-weight: 700;
      text-align: center;
    }
  }
  tbody {
    overflow-y: scroll;
    td {
      padding: 10px;
      font-weight: 500;
    }
  }
`;

export const TdAction = styled.td`
  .action-list {
    /* position: absolute; */
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    place-content: center;
    background-color: #fff;
    border: 1px solid $border-color;
    transition: 0.3s;
    display: flex;
    /* &::before {
      content: "";
      position: absolute;
      border: 10px solid;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%) rotate(180deg);
      border-color: transparent transparent #e87844 transparent;
    } */
    .action-item {
      cursor: pointer;
    }
  }
  &.active {
    .action-list {
      display: flex;
      padding: 10px 20px;
      gap: 20px;
      .action-icon {
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  .pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 10px;
    border: 1px solid #cadeed;
    font-size: 14px;
    transform: 0.3s;
    cursor: pointer;
    &.active {
      background: #3c6379;
      font-weight: 500;
      color: #fff;
    }
    &:hover {
      background: #3c6379;
      font-weight: 500;
      color: #fff;
    }
  }
`;
