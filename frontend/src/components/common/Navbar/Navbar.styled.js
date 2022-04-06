import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .navbar {
    background-color: #f8faff;
    border: 1px solid #cadeed;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    border: 1px solid #cadeed;
    background: #f8faff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    &.active {
      left: 0;
      transition: 350ms;
    }
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    a {
      text-decoration: none;
      color: #3c6379;
      font-size: 18px;
      width: 95%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 16px;
      border-radius: 4px;

      &:hover {
        background-color: #1a83ff;
      }
    }
  }
  .nav-menu-items {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .navbar-toggle {
    background-color: #f8faff;
    border: 1px solid #cadeed;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  span {
    margin-left: 16px;
  }
`;

export const ContentWrapper = styled.div`
  transition: 350ms;
  margin-left: ${(props) => (props.active ? "250px" : "")};
`;
