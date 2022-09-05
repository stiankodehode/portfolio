import {
    FlexColumn,
    FlexColumnLight,
    FlexRow,
    StyledParagraph,
} from "../components/styled";

import { HeroContainer, ImagePlaceholder } from "./Hero/styled";

import LanguageIcon from "../components/LanguageIcon";

import svgImages from "../img/svgImages";

const Hero = () => {
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
                        <StyledParagraph>
                            Hei jeg heter Stian og mer tekst kommer her når jeg
                            finner ut av hva jeg skal skrive
                        </StyledParagraph>

                        <FlexColumnLight>
                            <h3>Egenskaper</h3>
                            <FlexRow>
                                {svgImages.map((svg, idx) => {
                                    return <LanguageIcon key={idx} svg={svg} />;
                                })}
                            </FlexRow>
                        </FlexColumnLight>
                    </FlexColumnLight>
                </FlexColumn>
            </aside>
        </HeroContainer>
    );
};

export default Hero;