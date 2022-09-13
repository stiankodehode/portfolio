import { ProjectsContainer } from "./Projects/styled";
import Project from "../components/Project";
import { StyledH2 } from "../components/styled";
import { useState } from "react";

const Projects = (props) => {
    const projectContent = props.content.projects;
    const content = props.content;

    const projects = projectContent.map((proj, idx) => {
        const lastProject = idx === projectContent.length - 1 ? true : false;

        return <Project key={idx} content={proj} lastProject={lastProject} />;
    });

    return (
        <ProjectsContainer id="projectsID">
            <StyledH2>{content.headline}</StyledH2>
            {projects}
        </ProjectsContainer>
    );
};

export default Projects;
