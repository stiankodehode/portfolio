import { AboutMeContainer } from "./AboutMe/styled";
import { StyledH2 } from "../components/styled";
import { StyledParagraph } from "./AboutMe/styled";

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <StyledH2>om Meg</StyledH2>
            <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros
            </StyledParagraph>
        </AboutMeContainer>
    );
};

export default AboutMe;
