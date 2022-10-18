import {
    StyledButton,
    StyledDropDown,
    StyledDropDownContent,
    StyledNav,
    StyledNavLink,
    StyledNavList,
    StyledNavItems,
    StyledImage,
    FlexRow,
} from "./navbar/styled";
import { useState } from "react";
import "./navbar/navbar.css";
import HamurgerMenu from "./HamburgerMenu";
import DropdownSVG from "../img/dropdown.svg";
import languageSVG from "../img/languageSVG.svg";

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
        duration: 300,
    };

    // render the normal navbar if window width is bigger than 900px

    if (windowWidth > 950)
        return (
            <StyledNav>
                <StyledNavList>
                    <StyledDropDown>
                        <FlexRow>
                            <StyledImage
                                src={languageSVG}
                                alt="language icon"
                            />
                            <span>{props.english ? "ENG" : "NO"}</span>
                            <StyledImage
                                src={DropdownSVG}
                                alt="dropdown arrow"
                            />
                        </FlexRow>
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
    return (
        <HamurgerMenu
            english={props.english}
            languageToggle={props}
            navItems={navItems}
        />
    );
};

export default Navbar;
