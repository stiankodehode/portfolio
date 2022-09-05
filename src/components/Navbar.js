import { StyledNav, StyledNavLink, StyledNavList } from "./Navbar/styled";

const Navbar = () => {
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
};

export default Navbar;
