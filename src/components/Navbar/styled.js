import styled from "styled-components";
import { Link } from "react-scroll";

//--------------------//
//-------NAVBAR-------//
//--------------------//

export const StyledNav = styled.nav`
    margin: 0;
    width: 100%;
    min-height: 70px;
    position: fixed;
    display: flex;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledNavItems = styled.div`
    display: flex;
`;

export const StyledNavList = styled.ul`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    width: 75%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledNavLink = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    padding: 1em;
    margin-left: 0.5em;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transition: 0.5s;
        border-radius: 10px;
        background-color: #a287af;
    }
`;

// DROPDOWN MENU

export const StyledDropDownContent = styled.div`
    display: none;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 1;
`;

export const StyledButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    padding: 1em;
    border: none;
    margin: 0.5em 0.5em;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transition: 0.5s;
        background-color: #a287af;
    }
`;

export const StyledDropDown = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    padding: 1em;

    cursor: pointer;
    &:hover {
        background-color: #a287af;
    }
    &:hover ${StyledDropDownContent} {
        display: block;
    }
`;

export const StyledImage = styled.img`
    margin: 0 0 3px 5px;
`;
