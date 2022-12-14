import {
    ProjectBox,
    StyledProjectImage,
    StyledProjectInfo,
    StyledProjectHeadline,
    StyledProjectParagraph,
    StyledLink,
    NoStyleLink,
} from "../pages/sections/projects/styled";

// This is a component for the projects.
const Project = (props) => {
    return (
        // If lastProject prop is true there is no underline
        <ProjectBox lastProject={props.lastProject}>
            <NoStyleLink target={"_blank"} href={props.content.githubPages}>
                <StyledProjectImage
                    src={props.content.image}
                    alt="my Tenzies app"
                />
            </NoStyleLink>
            <StyledProjectInfo>
                <NoStyleLink target={"_blank"} href={props.content.githubPages}>
                    <StyledProjectHeadline>
                        {props.content.headline}
                    </StyledProjectHeadline>
                </NoStyleLink>
                <StyledProjectParagraph>
                    {props.content.text}
                </StyledProjectParagraph>
                <StyledLink target={"_blank"} href={props.content.githubPages}>
                    Github pages
                </StyledLink>
                <StyledLink target={"_blank"} href={props.content.github}>
                    Github repository
                </StyledLink>
            </StyledProjectInfo>
        </ProjectBox>
    );
};

export default Project;
