import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { AppContainer, BackgroundImage } from "./components/styled";

function App() {
    return (
        <BackgroundImage>
            <Navbar />
            <AppContainer>
                <Hero />
                <AboutMe />
                <Projects />
                <Contact />
            </AppContainer>
            <Footer />
        </BackgroundImage>
    );
}

export default App;
