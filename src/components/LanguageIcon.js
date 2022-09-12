import { StyledSvg } from "./styled";

// Simple component to render all the programming language icons
const LanguageIcon = (props) => {
    return <StyledSvg>{props.svg}</StyledSvg>;
};

export default LanguageIcon;
