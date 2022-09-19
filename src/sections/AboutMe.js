import { AboutMeContainer } from "./AboutMe/styled";
import { StyledH2 } from "../components/styled";
import { StyledParagraph } from "./AboutMe/styled";

const AboutMe = (props) => {
    const content = props.content;

    //Mapping each paragraph
    const mappedParagraphs = props.content.text.map((p, idx) => {
        return <StyledParagraph key={idx}>{p}</StyledParagraph>;
    });
    return (
        <AboutMeContainer id="aboutMeID">
            <StyledH2>{content.headline}</StyledH2>
            {mappedParagraphs}
        </AboutMeContainer>
    );
};

export default AboutMe;
