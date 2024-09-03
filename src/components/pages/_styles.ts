import styled from "styled-components";

export const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;
  //ве а вложенные в родителя

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }

  & > a.active:hover {
	  cursor: default;
    text-decoration: none;
    color: #03eaff;
  }
`