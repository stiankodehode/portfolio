import { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu/hamburgerMenu.css";
import { FlexRow, StyledNavLink } from "./Navbar/styled";
import {
    StyledNav,
    StyledDropDown,
    StyledButton,
    StyledImage,
    StyledDropDownContent,
} from "./Navbar/styled";
import DropdownSVG from "../img/dropdown.svg";
import languageSVG from "../img/languageSVG.svg";

const HamurgerMenu = (props) => {
    const navItems = props.navItems;
    const [isOpen, setIsOpen] = useState(false);

    // Function for closing the hamburger menu when a link is clicked
    const closeMenu = () => {
        setIsOpen((oldState) => !oldState);
    };
    const linkProps = {
        onClick: closeMenu,
        activeClass: "active",
        spy: true,
        smooth: true,
        offset: -100,
        duration: 150,
    };

    return (
        <>
            <StyledNav />

            <Menu
                right
                onOpen={() => {
                    setIsOpen(true);
                }}
                onClose={() => {
                    setIsOpen(false);
                }}
                isOpen={isOpen}
            >
                <StyledNavLink {...linkProps} to="heroID">
                    {navItems.hero.navbar}
                </StyledNavLink>
                <StyledNavLink {...linkProps} to="aboutMeID">
                    {navItems.aboutMe.navbar}
                </StyledNavLink>
                <StyledNavLink {...linkProps} to="projectsID">
                    {navItems.projects.navbar}
                </StyledNavLink>
                <StyledNavLink {...linkProps} to="contactID">
                    {navItems.contact.navbar}
                </StyledNavLink>
                <StyledDropDown>
                    <FlexRow>
                        <StyledImage src={languageSVG} alt="language icon" />
                        <span>{props.english ? "ENG" : "NO"}</span>
                        <StyledImage src={DropdownSVG} alt="dropdown arrow" />
                    </FlexRow>
                    <StyledDropDownContent>
                        <StyledButton
                            onClick={props.languageToggle.toggleNorwegian}
                        >
                            Norsk
                        </StyledButton>
                        <StyledButton
                            onClick={props.languageToggle.toggleEnglish}
                        >
                            English
                        </StyledButton>
                    </StyledDropDownContent>
                </StyledDropDown>
            </Menu>
        </>
    );
};

export default HamurgerMenu;
