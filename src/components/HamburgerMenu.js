import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu/hamburgerMenu.css";
import { StyledNavLink } from "./Navbar/styled";
import { StyledNav } from "./Navbar/styled";

const HamurgerMenu = () => {
    return (
        <>
            <StyledNav />

            <Menu right>
                <StyledNavLink
                    to="heroID"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Hjem
                </StyledNavLink>
                <StyledNavLink
                    to="aboutMeID"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    om Meg
                </StyledNavLink>
                <StyledNavLink
                    to="projectsID"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Prosjekter
                </StyledNavLink>
                <StyledNavLink
                    to="contactID"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Kontakt
                </StyledNavLink>
            </Menu>
        </>
    );
};

export default HamurgerMenu;
