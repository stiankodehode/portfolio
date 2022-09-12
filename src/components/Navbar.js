import { StyledNav, StyledNavLink, StyledNavList } from "./Navbar/styled";
import { useState } from "react";
import "./Navbar/navbar.css";
import HamurgerMenu from "./HamburgerMenu";

const Navbar = (props) => {
    const navItems = props.content;

    // State and event listener for checking screen size, so it can update on the fly.
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    // render the normal navbar if window width is bigger than 900px

    if (windowWidth > 900)
        return (
            <StyledNav>
                <StyledNavList>
                    <StyledNavLink
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
                        to="contactID"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={150}
                    >
                        {navItems.contact.navbar}
                    </StyledNavLink>
                </StyledNavList>
            </StyledNav>
        );

    // render hamburger menu if screen size is less than 900px
    return <HamurgerMenu navItems={navItems} />;
};

export default Navbar;
