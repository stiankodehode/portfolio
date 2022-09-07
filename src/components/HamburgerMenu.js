import { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu/hamburgerMenu.css";
import { StyledNavLink } from "./Navbar/styled";
import { StyledNav } from "./Navbar/styled";

const HamurgerMenu = (props) => {
    const navItems = props.navItems;
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((oldState) => !oldState);
    };

    return (
        <>
            <StyledNav />

            <Menu right isOpen={isOpen} onOpen={toggleIsOpen}>
                <StyledNavLink
                    onClick={toggleIsOpen}
                    to="heroID"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={150}
                >
                    {navItems.hero.navbar}
                </StyledNavLink>
                <StyledNavLink
                    onClick={toggleIsOpen}
                    to="aboutMeID"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={150}
                >
                    {navItems.aboutMe.navbar}
                </StyledNavLink>
                <StyledNavLink
                    onClick={toggleIsOpen}
                    to="projectsID"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={150}
                >
                    {navItems.projects.navbar}
                </StyledNavLink>
                <StyledNavLink
                    onClick={toggleIsOpen}
                    to="contactID"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={150}
                >
                    {navItems.contact.navbar}
                </StyledNavLink>
            </Menu>
        </>
    );
};

export default HamurgerMenu;
