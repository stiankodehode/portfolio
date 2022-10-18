import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: #e0b3dc;
    padding-bottom: 25px;
`;

export const StyledHeading = styled.h3`
    font-size: 1em;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
    max-width: 1000px;
    @media (max-width: 600px) {
        flex-direction: column;
        width: 85%;
    }
`;

export const FooterLink = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75em;
    margin: 0.5em 0;
    color: #09001e;
    font-size: 16px;
    cursor: pointer;
    color: #1b074b;
    &:hover {
        color: rgb(181, 73, 170);
    }
`;

export const FooterButton = styled.button`
    background: none;
    padding: 0;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.75em;
    margin: 0.5em 0;
    color: #09001e;
    font-size: 16px;
    cursor: pointer;
    color: #1b074b;
    &:hover {
        color: rgb(181, 73, 170);
    }
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 900px) {
        justify-content: flex-start;
        gap: 10px;
    }
`;
