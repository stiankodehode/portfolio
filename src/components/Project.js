import {
    ProjectBox,
    StyledProjectImage,
    StyledProjectInfo,
    StyledProjectHeadline,
    StyledProjectParagraph,
} from "../sections/Projects/styled";

// This is a component for the projects. If lastProject prop is true it doesnt render an underline.
const Project = (props) => {
    return (
        <ProjectBox lastProject={props.lastProject}>
            <StyledProjectImage
                src={props.content.image}
                alt="my Tenzies app"
            />
            <StyledProjectInfo>
                <StyledProjectHeadline>
                    {props.content.headline}
                </StyledProjectHeadline>
                <StyledProjectParagraph>
                    {props.content.text}
                </StyledProjectParagraph>
            </StyledProjectInfo>
        </ProjectBox>
    );
};

export default Project;
