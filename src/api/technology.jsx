// technology data...
export const tech = [
  {
    id: 1,
    imgsrc: html,
    title: "HTML",
    description:
      "HTML stands for Hypertext Markup Language. It is the standard markup language used for creating and structuring web pages.",
  },

  {
    id: 2,
    imgsrc: css,
    title: "CSS",
    description:
      "CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and layout of web pages.",
  },

  {
    id: 3,
    imgsrc: js,
    title: "Javascript",
    description:
      "JS stands for JavaScript. It is a programming language used to add interactivity and dynamic behavior to web pages.",
  },

  {
    id: 4,
    imgsrc: tailwind,
    title: "Tailwind",
    description:
      "Tailwind is a popular utility-first CSS framework that simplifies web development by providing pre-built CSS classes that can be applied directly to HTML elements.",
  },

  {
    id: 5,
    imgsrc: react,
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces, focusing on creating reusable UI components.",
  },

  {
    id: 6,
    imgsrc: next,
    title: "NextJS",
    description:
      " Streamline React development with server-side rendering, automatic code splitting, and effortless client-side navigation. Ideal for building fast, interactive, and SEO-friendly web apps.",
  },

  {
    id: 7,
    imgsrc: firebase,
    title: "Firebase",
    description:
      "Firebase is a platform developed by Google that provides various backend services and tools for building and scaling web and mobile applications.",
  },
];

// technology data...
export const tools = [
  {
    id: 1,
    imgsrc: git,
    title: "GIT",
    description:
      "Git is a distributed version control system that allows multiple developers to collaborate on a project, tracking changes and managing code versions.",
  },

  {
    id: 2,
    imgsrc: github,
    title: "Github",
    description:
      "GitHub is a web-based hosting service for Git repositories, providing a platform for developers to store, collaborate, and manage their code.",
  },

  {
    id: 3,
    imgsrc: ai,
    title: "ChatGPT",
    description:
      "ChatGPT is an AI language model developed by OpenAI, designed to generate human-like responses and engage in conversational interactions with users.",
  },
  {
    id: 4,
    imgsrc: postMan,
    title: "Postman",
    description:
      "Postman is a popular API development and testing tool that simplifies the process of building, documenting, and testing APIs. It provides a user-friendly interface for making HTTP requests, enabling developers to interact with APIs easily.",
  },
];

// about data...
export const media = [
  {
    id: 1,
    at: "sIUzyy",
    path: "https://github.com/sIUzyy",
    icon: <AiOutlineGithub size={25} />,
  },

  {
    id: 2,
    at: "Justin Peligro",
    path: "https://www.linkedin.com/in/justin-peligro/",
    icon: <AiFillLinkedin size={25} />,
  },

  {
    id: 3,
    at: "justinpeligro.c04@gmail.com",
    path: "mailto:justinpeligro.c04@gmail.com",
    icon: <AiOutlineMail size={25} />,
  },

  {
    id: 4,
    at: "siuzy.web",
    path: "https://www.instagram.com/siuzy.web/",
    icon: <AiOutlineInstagram size={25} />,
  },
];

// import data from tech
import html from "../assets/html-tech.webp";
import css from "../assets/css-tech.webp";
import js from "../assets/js-tech.webp";
import react from "../assets/react-tech.webp";
import tailwind from "../assets/tailwind.webp";
import next from "../assets/next.png";
import firebase from "../assets/fb-tech.webp";

// import data from tech
import github from "../assets/github.webp";
import ai from "../assets/ai.webp";
import postMan from "../assets/postman.webp";
import git from "../assets/git.webp";

// about icons
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
