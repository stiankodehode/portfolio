import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

import { AppContainer, BackgroundImage } from "./components/styled";

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
