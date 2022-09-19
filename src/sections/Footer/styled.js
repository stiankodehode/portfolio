import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: #e0b3dc;
    padding-bottom: 25px;
`;

export const StyledHeading = styled.h4``;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 75%;
    @media (max-width: 700px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const FooterLink = styled.p`
    margin: 0.5em 0;
    color: #09001e;
    font-size: 16px;
    cursor: pointer;
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
        gap: 10px;
    }
`;
