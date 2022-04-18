import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Div>
      <img src="globe.png" alt="globe" style={{ marginRight: 7 }} />
      my travel journal
    </Div>
  );
};

const Div = styled.div`
  width: 550px;
  height: 55px;
  background: #f55a5a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default NavBar;
