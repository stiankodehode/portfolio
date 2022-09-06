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

const Hero = (props) => {
    const content = props.content;
    return (
        <HeroContainer>
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
                            <FlexRow>
                                {svgLanguageIcons.map((svg, idx) => {
                                    return <LanguageIcon key={idx} svg={svg} />;
                                })}
                            </FlexRow>
                        </FlexColumn>
                    </FlexColumnLight>
                </FlexColumn>
            </aside>
        </HeroContainer>
    );
};

export default Hero;
