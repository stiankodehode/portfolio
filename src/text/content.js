import ProjectImage1 from "../img/tenzies.webp";
import ProjectImage2 from "../img/pokedex.webp";

// All the text content is stored here to avoid cluttering

const textContent = {
    norwegian: {
        hero: {
            navbar: "Hjem",
            text: "Hei, jeg heter Stian. Jeg er en lærevillig Fullstack utvikler som alltid ønsker å utvide min kompetanse.",
            skills: "Kompetanse",
        },
        aboutMe: {
            navbar: "om Meg",
            headline: "om Meg",
            text: [
                "Jeg har alltid vært ineressert i teknologi, og begynnte på AMO frontend kurset Kodehode i april 2022. Koding trives jeg godt med.",
                "Javascript er nok det jeg likte best med frontend utvikling. Dette har gjort at jeg har begynt å bevege meg inn i fullstack verden hvor jeg får større utfordringer og får løse flere logiske problemer.",
                "På fritiden holder jeg på med både kompetitiv og casual gaming. Jeg ønsker alltid å bli bedre og utfordre meg selv så det er nok ikke rart at jeg også trives godt med koding.",
            ],
        },
        contact: {
            navbar: "kontakt Meg",
            headline: "kontakt Meg",
            form: {
                firstName: "Fornavn",
                lastName: "Etternavn",
                email: "Email",
                subject: "Tema",
                message: "Melding",
            },
        },
        projects: {
            navbar: "Prosjekter",
            headline: "Prosjekter",
            projects: [
                {
                    headline: "Tenzies",
                    text: "En Tenzies app som lagrer din beste score i local storage",
                    image: ProjectImage1,
                    github: "https://github.com/stiankodehode/tenzies",
                    githubPages: "https://stiankodehode.github.io/tenzies/",
                },
                {
                    headline: "Pokedex",
                    text: "Et Pokedex med hjelp av PokeAPI som lar deg bla gjennom og finne informasjon om forskjellige pokemon",
                    image: ProjectImage2,
                    github: "https://github.com/stiankodehode/pokedex",
                    githubPages: "https://stiankodehode.github.io/pokedex/",
                },
            ],
        },
        footer: { contact: "Kontakt:", socials: "Sosiale medier:" },
    },
    english: {
        hero: {
            navbar: "Home",
            text: "Hey, my name is Stian. I'm a Fullstack developer who always wants to learn something new.",
            skills: "Skills",
        },
        aboutMe: {
            navbar: "about Me",
            headline: "about Me",
            text: [
                "Technology has always been an interest of mine. I started AMO course Kodehode in april 2022. And i've been ejoying coding since.",
                "Javascript is what I liked the most about frontend development. This is a big reason for me to move towards fullstack development where I get bigger challenges and logic puzzles to solve.",
                "In my free time i spend alot of time playing both competitive and casual games. I always strive to challenge myself and improve, so it's no surprise that I also enjoy coding.",
            ],
        },
        contact: {
            navbar: "contact Me",
            headline: "contact Me",
            form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
            },
        },
        projects: {
            navbar: "Projects",
            headline: "Projects",
            projects: [
                {
                    headline: "Tenzies",
                    text: "A Tenzies app that stores your best score in local storage",
                    image: ProjectImage1,
                    github: "https://github.com/stiankodehode/tenzies",
                    githubPages: "https://stiankodehode.github.io/tenzies/",
                },
                {
                    headline: "Pokedex",
                    text: "A Pokedex with the help of PokeAPI that lets you gather info on different pokemon",
                    image: ProjectImage2,
                    github: "https://github.com/stiankodehode/pokedex",
                    githubPages: "https://stiankodehode.github.io/pokedex/",
                },
            ],
        },
        footer: { contact: "Contact:", socials: "Social media:" },
    },
};

export default textContent;
