import {
    Project,
    ProjectsContainer,
    StyledProjectHeadline,
    StyledProjectImage,
    StyledProjectInfo,
} from "./Projects/styled";
import ProjectImg from "../img/tenzies.png";
import { StyledH2, StyledParagraph } from "../components/styled";

const Projects = () => {
    return (
        <ProjectsContainer>
            <StyledH2>Prosjekter</StyledH2>
            <Project>
                <StyledProjectImage src={ProjectImg} alt="my Tenzies app" />
                <StyledProjectInfo>
                    <StyledProjectHeadline>Tenzies</StyledProjectHeadline>
                    <StyledParagraph>
                        A Tenzies app that tracks your hiscore locally
                    </StyledParagraph>
                </StyledProjectInfo>
            </Project>
            <Project>
                <StyledProjectImage src={ProjectImg} alt="my Tenzies app" />
                <StyledProjectInfo>
                    <StyledProjectHeadline>Tenzies</StyledProjectHeadline>
                    <StyledParagraph>
                        A Tenzies app that tracks your hiscore locally
                    </StyledParagraph>
                </StyledProjectInfo>
            </Project>
        </ProjectsContainer>
    );
};

export default Projects;
