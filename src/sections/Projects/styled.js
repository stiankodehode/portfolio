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

export const ProjectBox = styled.article`
    padding-bottom: 2em;
    border-bottom: ${(props) => (props.lastProject ? "" : "1px solid black")};
    margin: 1em 0;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const StyledProjectImage = styled.img`
    width: 100%;
    padding: 1em;
    margin-right: 2em;
    @media (max-width: 900px) {
        margin: 0 auto;
    }
`;

export const StyledProjectHeadline = styled.h3`
    font-size: 28px;
    color: #09001e;
    margin: 0 0 0.5em;
    text-decoration: underline;
    color: #1b074b;
    &:hover {
        color: rgb(181, 73, 170);
    }
`;

export const StyledProjectParagraph = styled.p`
    font-size: 18px;
`;

export const StyledProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 45%;
    @media (max-width: 900px) {
        align-items: center;
        margin: 0 auto;
        max-width: 90%;
    }
`;

export const StyledLink = styled.a`
    color: #1b074b;
    &:hover {
        color: rgb(181, 73, 170);
    }
`;

export const NoStyleLink = styled.a`
    text-decoration: none;
    max-width: 50%;
    @media (max-width: 900px) {
        max-width: 75%;
        margin: 0 auto;
    }
`;
