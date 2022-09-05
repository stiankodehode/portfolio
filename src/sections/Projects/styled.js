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
`;

export const StyledProjectImage = styled.img`
    max-width: 40%;
    padding: 1em;
`;

export const StyledProjectHeadline = styled.h3`
    font-size: 28px;
    margin: 1em 0;
`;

export const StyledProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
`;
