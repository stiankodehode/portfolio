import styled from "styled-components";
import { Link } from "react-router-dom";

// Typography

export const StyledH2 = styled.h2`
    text-decoration: underline;
`;

// Styling

export const StyledNav = styled.nav`
    margin: 0 auto;
    height: 75px;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const StyledNavBox = styled.ul`
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

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledRow = styled.div`
    display: flex;
`;
