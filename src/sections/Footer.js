import {
    StyledFooter,
    FooterContainer,
    FooterLink,
    FlexColumn,
    StyledHeading,
    FlexRow,
} from "./Footer/styled";

import { socialIcons } from "../img/svgImages";

const mappedSocialIcons = socialIcons.map((icon) => {
    return <FooterLink href={icon.link}>{icon.svg}</FooterLink>;
});

const Footer = (props) => {
    const content = props.content;

    return (
        <StyledFooter id="footerID">
            <FooterContainer>
                <FlexColumn>
                    <StyledHeading>{content.contact}</StyledHeading>
                    <FooterLink href="#">stiankodehode@gmail.com</FooterLink>
                    <FooterLink href="#">12345678</FooterLink>
                </FlexColumn>
                <FlexColumn>
                    <StyledHeading>{content.socials}</StyledHeading>
                    <FlexRow>{mappedSocialIcons}</FlexRow>
                </FlexColumn>
            </FooterContainer>
        </StyledFooter>
    );
};

export default Footer;
