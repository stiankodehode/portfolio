import ProjectImage1 from "../img/tenzies.png";
import ProjectImage2 from "../img/pokedex.png";

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
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros",
        },
        contact: { navbar: "kontakt Meg", headline: "kontakt Meg" },
        projects: {
            navbar: "Prosjekter",
            headline: "Prosjekter",
            projects: [
                {
                    headline: "Tenzies",
                    text: "En Tenzies app som lagrer din beste score i local storage",
                    image: ProjectImage1,
                },
                {
                    headline: "Pokedex",
                    text: "Et Pokedex med hjelp av PokeAPI som lar deg bla gjennom og finne informasjon om forskjellige pokemon",
                    image: ProjectImage2,
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
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros",
        },
        contact: { navbar: "contact Me", headline: "contact Me" },
        projects: {
            navbar: "Projects",
            headline: "Projects",
            projects: [
                {
                    headline: "Tenzies",
                    text: "A Tenzies app that lets you store your hiscore in local storage",
                    image: ProjectImage1,
                },
                {
                    headline: "Pokedex",
                    text: "A Pokedex with the help of PokeAPI that lets you gather info on different pokemon",
                    image: ProjectImage2,
                },
            ],
        },
        footer: { contact: "Contact:", socials: "Social links:" },
    },
};

export default textContent;
