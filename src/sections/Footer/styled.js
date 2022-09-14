import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: #e0b3dc;
`;

export const StyledHeading = styled.h4``;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 75%;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: #09001e;
    font-size: 16px;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 900px) {
        justify-content: flex-start;
    }
`;
