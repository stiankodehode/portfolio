import styled from "styled-components";

export const HeroContainer = styled.main`
    padding: 7em 0 5em;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    width: 100%;
    @media (max-width: 900px) {
        flex-direction: column;
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
