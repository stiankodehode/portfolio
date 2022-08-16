import { StyledColumn } from "../components/components";

const LandingPage = () => {
    return (
        <div className="container flex-row">
            <StyledColumn>
                <h1>Stian Taule</h1>
                <h3>Front End Developer</h3>
            </StyledColumn>
            <div className="image-placeholder"></div>
        </div>
    );
};

export default LandingPage;
