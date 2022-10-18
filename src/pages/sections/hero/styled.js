import styled from "styled-components";

export const HeroContainer = styled.main`
    padding: 7em 0 0;
    margin: 0 auto 5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    @media (max-width: 900px) {
        flex-direction: column;
        padding: 6em 0 0;
        width: 95%;
    }
`;

export const ImagePlaceholder = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: #ffe8ff;
    @media (max-width: 900px) {
        width: 150px;
        height: 150px;
        margin-bottom: 2em;
    }
`;

export const StyledImage = styled.img`
    width: 275px;
    border-radius: 15px;
    @media (max-width: 900px) {
        width: 150px;
        margin-bottom: 2em;
    }
`;

export const StyledSubHeadline = styled.h3`
    margin: 0.5rem 0 2rem;
    font-size: 1.25em;
    text-align: center;
`;
