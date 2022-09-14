import { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu/hamburgerMenu.css";
import { StyledNavLink } from "./Navbar/styled";
import {
    StyledNav,
    StyledDropDown,
    StyledButton,
    StyledImage,
    StyledDropDownContent,
} from "./Navbar/styled";
import DropdownSVG from "../img/dropdown.svg";
const HamurgerMenu = (props) => {
    const [navItems, setNavItems] = useState(props.navItems);
    const [isOpen, setIsOpen] = useState(false);

    // Function for closing the hamburger menu when a link is clicked
    const closeMenu = () => {
        setIsOpen((oldState) => !oldState);
    };

    console.log(props);
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
                    <span>{props.english ? "ENG" : "NOR"}</span>
                    <StyledImage src={DropdownSVG} alt="dropdown arrow" />
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
