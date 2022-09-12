import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Content from "./text/content";

import { useState } from "react";

import { AppContainer, BackgroundImage, Spacer } from "./components/styled";

function App() {
    const [textContent, setTextContent] = useState(Content);
    const [languageEnglish, setLanguageEnglish] = useState(false);

    const content = languageEnglish
        ? textContent.english
        : textContent.norwegian;

    return (
        <BackgroundImage>
            <Navbar content={content} />
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
