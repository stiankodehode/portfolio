import "./App.css";
import LandingPage from "./pages/landingPage";
import AboutMePage from "./pages/landingPage/aboutMePage";
import ContactPage from "./pages/landingPage/contactPage";
import { Routes, Route } from "react-router-dom";
import { StyledNav, StyledNavBox, StyledLink } from "./components/components";

function App() {
    return (
        <div className="App">
            <div className="nav-background">
                <StyledNav>
                    <StyledNavBox>
                        <StyledLink to="./pages/landingPage">Home</StyledLink>
                        <StyledLink to="./pages/landingPage/aboutMePage">
                            About Me
                        </StyledLink>
                        <StyledLink to="./pages/landingPage/contactPage">
                            Contact me
                        </StyledLink>
                        <img src="#" alt="icon" />
                    </StyledNavBox>
                </StyledNav>
            </div>
            <div>
                <Routes>
                    <Route path="*" element={<LandingPage />} />
                    <Route
                        path="/pages/landingPage/aboutMePage"
                        element={<AboutMePage />}
                    />
                    <Route
                        path="/pages/landingPage/contactPage"
                        element={<ContactPage />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
