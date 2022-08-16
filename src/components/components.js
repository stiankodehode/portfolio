import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledParagraph = styled.p`
    color: red;
`;

export const StyledHeader = styled.h1`
    font-size: 28px;
    text-decoration: underline;
    color: salmon;
`;

export const StyledDiv = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-color: green;
    border-radius: 25%;
    margin-bottom: 1rem;
`;

export const StyledNav = styled.nav`
    margin: 0 auto;
    height: 100px;
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const StyledNavBox = styled.div`
    margin: 0;
    width: 40%;
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
`;
