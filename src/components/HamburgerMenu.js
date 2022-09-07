import { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu/hamburgerMenu.css";
import { StyledNavLink } from "./Navbar/styled";
import { StyledNav } from "./Navbar/styled";

const HamurgerMenu = (props) => {
    const [navItems, setNavItems] = useState(props.navItems);
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen((oldState) => !oldState);
    };

    console.log(isOpen);

    return (
        <>
            <StyledNav />

            <Menu
                right
                onOpen={() => {
                    setIsOpen(true);
                }}
                isOpen={isOpen}
            >
                <StyledNavLink
                    onClick={closeMenu}
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
                    onClick={closeMenu}
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
                    onClick={closeMenu}
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
                    onClick={closeMenu}
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
