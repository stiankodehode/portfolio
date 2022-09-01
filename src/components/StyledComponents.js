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
    font-size: 38px;
`;

//--------------------//
//-----CONTAINERS-----//
//--------------------//

export const AppContainer = styled.div`
    width: 75%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const HeroContainer = styled.div`
    padding: 7em 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    width: 100%;
`;

export const AboutMeContainer = styled.div`
    height: 100vh;
    margin: 1em auto;
    padding: 2em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffe8ff;
    border-radius: 10px;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexRow = styled.div`
    display: flex;
`;

export const FlexColumnLight = styled.div`
    margin: 1em 0;
    padding: 1em;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffe8ff;
    border-radius: 10px;
`;

//--------------------//
//-------NAVBAR-------//
//--------------------//

export const StyledNav = styled.nav`
    margin: 0;
    width: 100%;
    position: fixed;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledNavList = styled.ul`
    margin: 0 auto;
    list-style: none;
    width: 75%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
`;

export const StyledNavLink = styled.a`
    font-size: 20px;
    font-weight: bold;
    padding: 1em;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transition: 0.5s;
        background-color: #a287af;
    }
    &:active {
        transition: 0.5s;
        background-color: #a287af;
    }
`;

export const ImagePlaceholder = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: #ffe8ff;
`;

export const StyledSvg = styled.svg`
    max-width: 50px;
    max-height: 50px;
`;
