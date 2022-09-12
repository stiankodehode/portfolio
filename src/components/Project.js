import {
    ProjectBox,
    StyledProjectImage,
    StyledProjectInfo,
    StyledProjectHeadline,
    StyledProjectParagraph,
} from "../sections/Projects/styled";

const Project = (props) => {
    console.log(props);
    return (
        <ProjectBox>
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
