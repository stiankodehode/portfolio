import ProjectImage1 from "../img/tenzies.png";
import ProjectImage2 from "../img/pokedex.png";

// All the text content is stored here to avoid cluttering

const textContent = {
    norwegian: {
        hero: {
            navbar: "Hjem",
            text: "Hei, jeg heter Stian. Jeg er en lærevillig Frontend utvikler som alltid ønsker å utvide min kompetanse",
            skills: "Kompetanse",
        },
        aboutMe: {
            navbar: "om Meg",
            headline: "om Meg",
            text: [
                "Teknologi har alltid vært en stor interesse for meg. Når jeg begynte på Kodehode AMO frontend kurset fant jeg fort ut at koding er noe jeg trives med, og har også brukt noe av fritiden min på det.",
                "På fritiden er den store tingen competitive gaming og spill som er designet rundt at man kan spille hundrevis av timer. Jeg har lært meg å takle press og kritikk for å oppnå høyere rangering, eller vinne turneringer.",
                "Frontend utvikling gir meg mestringsfølelse. Hvis jeg har gjort noe riktig, ser jeg resultatet med en gang. Å se utviklingen min og finne løsninger på problemer driver meg.",
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
        footer: { contact: "Kontakt:", socials: "Sosiale media:" },
    },
    english: {
        hero: {
            navbar: "Home",
            text: "Hey, my name is Stian. I'm a Frontend developer who always wants to learn something new",
            skills: "Skills",
        },
        aboutMe: {
            navbar: "about Me",
            headline: "about Me",
            text: [
                "Technology has always been one of my big interests. When I started the Kodehode AMO frontend course I quickly realised coding is something I enjoy doing and can also do on my free time.",
                "In my free time I spend a lot of time playing competitive games or games that are designed to be played for several hundred hours or more. I’ve learned to deal with pressure and critique to achieve higher ranks or winning tournaments.",
                "Frontend development gives me a feeling of mastery. When I do something right, I can immediately see the results. Seeing my own results and solving problems along the way as I develop is a very special feeling.",
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
