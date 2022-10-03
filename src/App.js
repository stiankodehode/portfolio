import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Content from "./text/content";

import { useState } from "react";

import { AppContainer, BackgroundImage } from "./components/styled";

function App() {
    const [languageEnglish, setLanguageEnglish] = useState(false);

    // Content.language based on languageEnglish state
    const content = languageEnglish ? Content.english : Content.norwegian;

    // toggles the languageEnglish state to true to update the app to english
    const toggleEnglish = () => {
        setLanguageEnglish(true);
    };

    // toggles the languageEnglish state to false to update the app back to norwegian
    const toggleNorwegian = () => {
        setLanguageEnglish(false);
    };

    return (
        <BackgroundImage>
            <Navbar
                english={languageEnglish}
                toggleNorwegian={toggleNorwegian}
                toggleEnglish={toggleEnglish}
                content={content}
            />
            <AppContainer>
                <Hero content={content.hero} />
                <AboutMe content={content.aboutMe} />
                <Projects content={content.projects} />
                <Contact content={content.contact} />
            </AppContainer>
            <Footer content={content.footer} />
        </BackgroundImage>
    );
}

export default App;
