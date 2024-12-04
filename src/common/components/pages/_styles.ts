import styled from "styled-components";

export const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;
  min-height: 25px;

  & > a {
    position: relative;
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #00a3b0;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -15px;
      width: 8px;
      height: 8px;
      background-color: #7c2323;
      transform: translate(0, -25%);
      border-radius: 50%;
      opacity: 0.7;
    }
  }

  & > a:hover {
    color: #7c2323;
  }

  & > a.active:hover {
    cursor: default;
    color: #00a3b0;
    text-decoration: none;

  }
`