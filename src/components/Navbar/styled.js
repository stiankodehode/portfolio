import styled from "styled-components";

//--------------------//
//-------NAVBAR-------//
//--------------------//

export const StyledNav = styled.nav`
    margin: 0;
    width: 100%;
    position: fixed;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledNavList = styled.ul`
    margin: 0 auto;
    list-style: none;
    width: 75%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
`;

export const StyledNavLink = styled.a`
    font-size: 20px;
    font-weight: bold;
    padding: 1em;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transition: 0.5s;
        background-color: #a287af;
    }
    &:active {
        transition: 0.5s;
        background-color: #a287af;
    }
`;

