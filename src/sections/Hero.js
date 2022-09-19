// Global components
import {
    FlexColumn,
    FlexColumnLight,
    FlexRow,
    StyledParagraph,
} from "../components/styled";

import {
    HeroContainer,
    ImagePlaceholder,
    StyledSubHeadline,
} from "./Hero/styled";

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
                <ImagePlaceholder></ImagePlaceholder>
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
