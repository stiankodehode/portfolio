// Global components
import {
    FlexColumn,
    FlexColumnLight,
    FlexRow,
    StyledParagraph,
} from "../components/styled";

import { HeroContainer, StyledSubHeadline, StyledImage } from "./Hero/styled";

import LanguageIcon from "../components/LanguageIcon";
import { svgLanguageIcons } from "../img/svgImages";
import Portrait from "../img/portrait.jpg";

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
                <StyledImage src={Portrait} />
            </FlexColumn>

            {/* Aside box */}
            <aside>
                <FlexColumn>
                    <FlexColumnLight>
                        <StyledParagraph>{content.text}</StyledParagraph>
                    </FlexColumnLight>
                    <FlexColumn>
                        <FlexColumnLight>
                            <StyledSubHeadline>
                                {content.skills}
                            </StyledSubHeadline>
                            <FlexRow>{svgIcons}</FlexRow>
                        </FlexColumnLight>
                    </FlexColumn>
                </FlexColumn>
            </aside>
        </HeroContainer>
    );
};

export default Hero;
