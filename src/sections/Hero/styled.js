import styled from "styled-components";

export const HeroContainer = styled.main`
    padding: 7em 0 0;
    margin: 0 auto 5em;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    width: 100%;
    @media (max-width: 900px) {
        flex-direction: column;
        padding: 6em 0 5em;
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
    height: 400px;
    border-radius: 15px;
    @media (max-width: 900px) {
        
        height: 150px;
        margin-bottom: 2em;
    }
`;

export const StyledSubHeadline = styled.h3`
    margin: 0.5em 0;
    text-align: center;
`;
