import {
    Project,
    ProjectsContainer,
    StyledProjectHeadline,
    StyledProjectImage,
    StyledProjectInfo,
    StyledProjectParagraph,
} from "./Projects/styled";
import ProjectImg from "../img/tenzies.png";
import { StyledH2 } from "../components/styled";

const Projects = (props) => {
    const content = props.content;
    return (
        <ProjectsContainer>
            <StyledH2>{content.headline}</StyledH2>
            <Project>
                <StyledProjectImage src={ProjectImg} alt="my Tenzies app" />
                <StyledProjectInfo>
                    <StyledProjectHeadline>
                        {content.project1.headline}
                    </StyledProjectHeadline>
                    <StyledProjectParagraph>
                        {content.project1.text}
                    </StyledProjectParagraph>
                </StyledProjectInfo>
            </Project>
            <Project>
                <StyledProjectImage src={ProjectImg} alt="my Tenzies app" />
                <StyledProjectInfo>
                    <StyledProjectHeadline>
                        {content.project1.headline}
                    </StyledProjectHeadline>
                    <StyledProjectParagraph>
                        {content.project1.text}
                    </StyledProjectParagraph>
                </StyledProjectInfo>
            </Project>
        </ProjectsContainer>
    );
};

export default Projects;
