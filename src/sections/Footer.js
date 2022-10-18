import {
    StyledFooter,
    FooterContainer,
    FooterLink,
    FlexColumn,
    StyledHeading,
    FooterButton,
} from "./Footer/styled";

import { socialIcons, contactSvgs } from "../img/svgImages";

// mapping the social icons that is brought in externally
const mappedSocialIcons = socialIcons.map((icon, idx) => {
    return (
        <FooterLink target={"_blank"} key={idx} href={icon.link}>
            {icon.svg}
            <span>{icon.text}</span>
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
                    <FooterButton onClick={clipboardCopy}>
                        {contactSvgs.mail}
                        <span>stiant.kodehode@gmail.com</span>
                    </FooterButton>
                    <FooterLink onClick={clipboardCopy}>
                        {contactSvgs.phone}
                        <span>41 68 67 78</span>
                    </FooterLink>
                </FlexColumn>
                <FlexColumn>
                    <StyledHeading>{content.socials}</StyledHeading>
                    <FlexColumn>{mappedSocialIcons}</FlexColumn>
                </FlexColumn>
            </FooterContainer>
        </StyledFooter>
    );
};

export default Footer;
