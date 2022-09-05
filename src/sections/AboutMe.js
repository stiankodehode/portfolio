import { AboutMeContainer } from "./AboutMe/styled";
import { StyledH2 } from "../components/styled";
import { StyledParagraph } from "./AboutMe/styled";

const AboutMe = (props) => {
    const content = props.content;
    return (
        <AboutMeContainer>
            <StyledH2>{content.headline}</StyledH2>
            <StyledParagraph>{content.text}</StyledParagraph>
        </AboutMeContainer>
    );
};

export default AboutMe;
