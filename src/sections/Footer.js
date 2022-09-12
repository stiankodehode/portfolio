import {
    StyledFooter,
    FooterContainer,
    FooterLink,
    FlexColumn,
    StyledHeading,
} from "./Footer/styled";

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
                    <FooterLink href="#">stiankodehode@gmail.com</FooterLink>
                    <FooterLink href="#">12345678</FooterLink>
                </FlexColumn>
            </FooterContainer>
        </StyledFooter>
    );
};

export default Footer;
