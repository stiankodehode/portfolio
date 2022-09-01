import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";

import { AppContainer, BackgroundImage } from "./components/StyledComponents";

function App() {
    return (
        <BackgroundImage>
            <Navbar />
            <AppContainer>
                <Hero />
                <AboutMe />
            </AppContainer>
        </BackgroundImage>
    );
}

export default App;
