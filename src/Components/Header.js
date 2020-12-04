import React from "react";
import styled from "styled-components";

const Header = () => {
    const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 4px 25px;
        border-bottom: 1px solid rgba(60, 64, 67, 0.2);
    `;

    return (
        <Nav>
            <h1>Note Taking</h1>
        </Nav>
    );
   };
  
  export default Header;