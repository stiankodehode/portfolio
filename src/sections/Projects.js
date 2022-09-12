import { ProjectsContainer } from "./Projects/styled";
import Project from "../components/Project";
import { StyledH2 } from "../components/styled";
import { useState } from "react";

const Projects = (props) => {
    const [projectContent, setProjectContent] = useState(
        props.content.projects
    );
    console.log(projectContent);
    const content = props.content;

    return (
        <ProjectsContainer id="projectsID">
            <StyledH2>{content.headline}</StyledH2>
            {projectContent.map((proj, idx) => {
                return <Project key={idx} content={proj} />;
            })}
        </ProjectsContainer>
    );
};

export default Projects;
