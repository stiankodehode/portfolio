import {
    StyledFooter,
    FooterContainer,
    FooterLink,
    FlexColumn,
    StyledHeading,
    FlexRow,
} from "./Footer/styled";

import { socialIcons } from "../img/svgImages";

// mapping the social icons that is brought in externally
const mappedSocialIcons = socialIcons.map((icon, idx) => {
    return (
        <FooterLink key={idx} href={icon.link}>
            {icon.svg}
        </FooterLink>
    );
});

// this copies the textContent of the target to the clipboard
const clipboardCopy = (e) => {
    const copyText = e.target.textContent;
    navigator.clipboard
        .writeText(copyText)
        .then(() => {
            alert("Copied to clipboard");
        })
        .catch("There was an error");
};

const Footer = (props) => {
    const content = props.content;

    return (
        <StyledFooter id="footerID">
            <FooterContainer>
                <FlexColumn>
                    <StyledHeading>{content.contact}</StyledHeading>
                    <FooterLink onClick={clipboardCopy}>
                        stiankodehode@gmail.com
                    </FooterLink>
                    <FooterLink onClick={clipboardCopy}>12345678</FooterLink>
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
