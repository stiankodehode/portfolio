import styled from "styled-components";

export const ProjectsContainer = styled.section`
    padding: 1em 0;
    border-radius: 10px;
    margin: 0 auto 5em;
    display: flex;
    background-color: #ffe8ff;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const Project = styled.article`
    border-bottom: 1px solid #09001e;
    justify-content: space-between;
    width: 90%;
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const StyledProjectImage = styled.img`
    max-width: 40%;
    padding: 1em;
    @media (max-width: 900px) {
        max-width: 70%;
        margin: 0 auto;
    }
`;

export const StyledProjectHeadline = styled.h3`
    font-size: 28px;
    margin: 0.5em 0;
`;

export const StyledProjectParagraph = styled.p`
    font-size: 18px;
`;

export const StyledProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    @media (max-width: 900px) {
        align-items: center;
        margin: 0 auto;
        max-width: 90%;
    }
`;