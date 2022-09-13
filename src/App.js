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

    const content = languageEnglish ? Content.english : Content.norwegian;

    const toggleEnglish = () => {
        setLanguageEnglish(true);
    };
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
