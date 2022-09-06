import { StyledNav, StyledNavLink, StyledNavList } from "./Navbar/styled";
import { useState } from "react";
import "./Navbar/navbar.css";
import HamurgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    const activeStyle = { backgroundColor: "#a287af" };

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
                        duration={100}
                    >
                        Hjem
                    </StyledNavLink>
                    <StyledNavLink
                        to="aboutMeID"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                    >
                        om Meg
                    </StyledNavLink>
                    <StyledNavLink
                        to="projectsID"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                    >
                        Prosjekter
                    </StyledNavLink>
                    <StyledNavLink
                        to="contactID"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={100}
                    >
                        Kontakt
                    </StyledNavLink>
                </StyledNavList>
            </StyledNav>
        );

    return <HamurgerMenu />;
};

export default Navbar;
