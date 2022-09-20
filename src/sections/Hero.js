// Global components
import {
    FlexColumn,
    FlexColumnLight,
    FlexRow,
    StyledParagraph,
} from "../components/styled";

import Portrait from "../img/portrait.jpg";

import { HeroContainer, StyledSubHeadline, StyledImage } from "./Hero/styled";

import LanguageIcon from "../components/LanguageIcon";
import { svgLanguageIcons } from "../img/svgImages";

// mapping the the programming language icons
const svgIcons = svgLanguageIcons.map((svg, idx) => {
    return <LanguageIcon key={idx} svg={svg} />;
});

const Hero = (props) => {
    const content = props.content;
    return (
        <HeroContainer id="heroID">
            {/* Image and skills */}
            <FlexColumn>
                <StyledImage src={Portrait} alt="portrait of Stian" />
            </FlexColumn>

            {/* Aside box */}
            <aside>
                <FlexColumn>
                    <FlexColumnLight>
                        <StyledParagraph>{content.text}</StyledParagraph>
                        <FlexColumn>
                            <StyledSubHeadline>
                                {content.skills}
                            </StyledSubHeadline>
                            <FlexRow>{svgIcons}</FlexRow>
                        </FlexColumn>
                    </FlexColumnLight>
                </FlexColumn>
            </aside>
        </HeroContainer>
    );
};

export default Hero;
