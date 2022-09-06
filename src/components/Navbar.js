import {
    StyledButton,
    StyledNav,
    StyledNavLink,
    StyledNavList,
} from "./Navbar/styled";
import { useState } from "react";
import { hamburgerMenu } from "../img/svgImages";



const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    if (windowWidth > 900)
        return (
            <StyledNav>
                <StyledNavList>
                    <StyledNavLink>Hjem</StyledNavLink>
                    <StyledNavLink>om Meg</StyledNavLink>
                    <StyledNavLink>Prosjekter</StyledNavLink>
                    <StyledNavLink>Kontakt</StyledNavLink>
                </StyledNavList>
            </StyledNav>
        );
    return (
        <StyledNav>
            <StyledNavList>
                <StyledButton>{hamburgerMenu}</StyledButton>
            </StyledNavList>
        </StyledNav>
    );
};

export default Navbar;
