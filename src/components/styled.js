import styled from "styled-components";
import BackgroundImg from "../img/background.jpg";

export const BackgroundImage = styled.div`
    background-image: url(${BackgroundImg});
    background-repeat: none;
    background-size: cover;
    height: 100%;
`;

//--------------------//
//-----TYPOGRAPHY-----//
//--------------------//

export const StyledParagraph = styled.p`
    font-size: 20px;
`;

export const StyledH2 = styled.h2`
    width: 90%;
    text-align: center;
    margin: 0.5em 0;
    font-size: 38px;
    border-bottom: 1px solid #09001e;
    @media (max-width: 900px) {
        font-size: 30px;
    }
`;

//--------------------//
//-----CONTAINERS-----//
//--------------------//

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const FlexColumnLight = styled.div`
    padding: 1em;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffe8ff;
    border-radius: 10px;
`;
export const StyledSvg = styled.svg`
    max-width: 50px;
    max-height: 50px;
    margin: 0 5px;
`;

export const Spacer = styled.div`
    margin: 25px 0;
`;
