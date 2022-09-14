import {
    StyledButton,
    StyledDropDown,
    StyledDropDownContent,
    StyledNav,
    StyledNavLink,
    StyledNavList,
    StyledNavItems,
    StyledImage,
} from "./Navbar/styled";
import { useState } from "react";
import "./Navbar/navbar.css";
import HamurgerMenu from "./HamburgerMenu";
import DropdownSVG from "../img/dropdown.svg";

const Navbar = (props) => {
    const navItems = props.content;

    // State and event listener for checking screen size, so it can update on the fly.
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    // reapeating link props.
    const linkProps = {
        activeClass: "active",
        spy: true,
        smooth: true,
        offset: -100,
        duration: 150,
    };

    // render the normal navbar if window width is bigger than 900px

    if (windowWidth > 900)
        return (
            <StyledNav>
                <StyledNavList>
                    <StyledDropDown>
                        <span>{props.english ? "ENG" : "NOR"}</span>
                        <StyledImage src={DropdownSVG} alt="dropdown arrow" />
                        <StyledDropDownContent>
                            <StyledButton onClick={props.toggleNorwegian}>
                                Norsk
                            </StyledButton>
                            <StyledButton onClick={props.toggleEnglish}>
                                English
                            </StyledButton>
                        </StyledDropDownContent>
                    </StyledDropDown>
                    <StyledNavItems>
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
                    </StyledNavItems>
                </StyledNavList>
            </StyledNav>
        );

    // render hamburger menu if screen size is less than 900px
    return <HamurgerMenu languageToggle={props} navItems={navItems} />;
};

export default Navbar;
