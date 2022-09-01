import {
    HeroContainer,
    FlexColumn,
    FlexColumnLight,
    ImagePlaceholder,
    StyledParagraph,
} from "../components/styled";

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
            <FlexColumn>
                <FlexColumnLight>
                    <StyledParagraph>
                        Hei jeg heter Stian og mer tekst kommer her når jeg
                        finner ut av hva jeg skal skrive
                    </StyledParagraph>
                    <FlexColumnLight>
                        <h3>Egenskaper</h3>
                        <div>
                            {svgImages.map((svg) => {
                                return <LanguageIcon svg={svg} />;
                            })}
                        </div>
                    </FlexColumnLight>
                </FlexColumnLight>
            </FlexColumn>
        </HeroContainer>
    );
};

export default Hero;
