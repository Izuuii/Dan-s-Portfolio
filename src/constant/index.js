import bootstrap from "../assets/images/bootstrap-original.png";
import css3 from "../assets/images/css3-original.png";
import figma from "../assets/images/figma-original.png";
import git from "../assets/images/git-plain.png";
import html5 from "../assets/images/html5-original.png";
import js from "../assets/images/javascript-original.png";
import react from "../assets/images/react-original.png";
import tailwind from "../assets/images/tailwindcss-plain.png";
import vscode from "../assets/images/vscode-original.png";
import canva from "../assets/images/canva.png";
import expressjs from "../assets/images/express-js.png"
import firebase from "../assets/images/firebase.png"
import mongoDB from "../assets/images/mongoDB.png"
import nodeJS from "../assets/images/nodejs.png";
import Beemo from "../assets/projImage/BeeMo.png";
import BeemoLogo from "../assets/projImage/BeeMoLogo.png";
import AIchatbot from "../assets/projImage/Ai-chatbot.png";
import chatbotLogo from "../assets/projImage/chat-bot.png";
import PitchClone from "../assets/projImage/PitchClone.png";
import PitchLogo from "../assets/projImage/PitchLogo.png";
import blogApp from "../assets/projImage/BlogApp.png";
import Certicode from "../assets/projImage/Certicode.png";
import certicodeLogo from "../assets/AboutImage/CerticodeLogo.png";
import acadflowImg from "../assets/DesignsImage/acadflow.png";
import appliloanImg from "../assets/DesignsImage/Appliloan.png";

export const techIcons = [
  { imgUrl: bootstrap, alt: "Bootstrap" },
  { imgUrl: css3, alt: "CSS3" },
  { imgUrl: figma, alt: "Figma" },
  { imgUrl: git, alt: "Git" },
  { imgUrl: html5, alt: "HTML5" },
  { imgUrl: js, alt: "JavaScript" },
  { imgUrl: react, alt: "React" },
  { imgUrl: tailwind, alt: "Tailwind CSS" },
  { imgUrl: vscode, alt: "VS Code" },
  { imgUrl: canva, alt: "Canva" },
  { imgUrl: expressjs, alt: "ExpressJS" },
  { imgUrl: firebase, alt: "Firebase" },
  { imgUrl: mongoDB, alt: "MongoDB" },
  { imgUrl: nodeJS, alt: "NodeJS" },
];

// ];

export const greetings = [
  
  "Responsiveness",
  "Brainstorming",
  "Ideation",
  "Solution",
  "User Interface",
  "Micro Interaction",
  "Responsiveness",
  "Brainstorming",
  "Ideation",
  "Solution",
  "User Interface",
  "Micro Interaction",
  "Responsiveness",
  "Brainstorming",
  "Ideation",
  "Solution",
  "User Interface",
  "Micro Interaction",
];

export const PROJECTS = [
  {
    logo: BeemoLogo,
    logoAlt: "BeeMo Logo",
    logoText: "BeeMo",
    title: "BeeMo: An IoT-Enabled Web-Based Stingless Beehive Management System with Real-Time Temperature, Humidity, Weight Monitoring",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "IoT"],
    description:
      "BeeMo is an IoT-enabled web system that continuously monitors temperature, humidity, and weight inside stingless beehives. It provides real-time data, automatic alerts, and analytics to help beekeepers maintain optimal hive conditions and improve honey yields.",
    image: Beemo,
    imageAlt: "BeeMo Screenshot",
    buttonText: "View Website",
    buttonLink: "#",
    buttonDisabled: true,
    role: "Frontend Developer / UI/UX Designer", // <-- added
  },

  {
    logo: certicodeLogo,
    logoAlt: "Certicode Logo",
    logoText: "Certicode",
    title: "Certicode",
    techStack: ["React", "Tailwind CSS", "Larvel", "MySQL"],
    description:
      "Certicode is a platform for seamless certificate creation and delivery. It empowers organizations to generate professional certificates in seconds, automate sending to attendees, and maintain secure, reliable distribution. Alongside certificate management, Certicode offers expert-led seminars and self-paced learning opportunities to help users gain valuable skills and recognized certifications anywhere, anytime.",
    image: Certicode,
    imageAlt: "Certocode Screenshot",
    buttonText: "View Website",
    buttonLink: "https://certicode.tech",
    buttonDisabled: false,
    role: "Frontend Developer / UI/UX Designer", // <-- added
  },

  {
    logo: "",
    logoAlt: "Blog App",
    logoText: "",
    title: "Blog App Website",
    techStack: ["React", "ExpressJs", "NodeJs", "MongoDB", "AWS S3", "Tailwind CSS"],
    description:
      "A full-stack blog application built with the MERN stack and Tailwind CSS. It supports user authentication using bcrypt and JWT, allowing secure registration, login, and protected routes. This project also features responsive layouts, AWS S3 image uploads, and clean component-based architecture for managing blog posts efficiently.",
    image: blogApp,
    imageAlt: "Blog App Screenshot",
    buttonText: "View Website",
    buttonLink: "",
    buttonDisabled: true,
    role: "Full Stack Developer", // <-- added
  },

  {
    logo: chatbotLogo,
    logoAlt: "Chatbot Logo",
    logoText: "AI Chatbot",
    title: " AI Chatbot Built with ChatGPT, Gemini, Deepseek ",
    techStack: ["React", "Tailwind CSS", "FlowBite", "APIs"],
    description:
      "An advanced AI chatbot that integrates ChatGPT, Gemini, and Deepseek to deliver intelligent, context-aware conversations. It assists users with real-time answers, creative support, and task automation, providing a smooth and engaging experience across multiple domains.",
    image: AIchatbot,
    imageAlt: "AI Chatbot Screenshot",
    buttonText: "View Website",
    buttonLink: "https://react-ai-chatbot-k7ci.vercel.app",
    buttonDisabled: false,
    role: "Full Stack Developer", // <-- added
  },

  {
    logo: PitchLogo,
    logoAlt: "Pitch Logo",
    logoText: "",
    title: "Pitch Clone Website",
    techStack: ["React", "Tailwind CSS"],
    description:
      "A responsive clone of the Pitch website built with React and Tailwind CSS. This project was created to practice modern layouts, component structures, and adaptive design techniques while improving skills in building clean, professional interfaces.",
    image: PitchClone,
    imageAlt: "PitchClone Screenshot",
    buttonText: "View Website",
    buttonLink: "https://pitch-clone.vercel.app",
    buttonDisabled: false,
    role: "Frontend Developer", // <-- added
  },
  // Add more project objects here as needed
];

export const COMMISSIONS = [
  {
    logo: "",
    logoAlt: "AppliLoan Logo",
    logoText: "AppliLoan",
    title: "AppliLoan: A Web-Based Information Management System using Descriptive Analytics for Sariaya Multi-Purpose Cooperative General Merchandise/Appliances Center",
    techStack: ["React", "Tailwind CSS", "Daisy UI", "Laravel", "MySQL", "Zustand"],
    description:
      "Designed and developed a web-based system that improves the service of the Sariaya Multi-Purpose Cooperative General Merchandise/Appliances Center and incorporates descriptive analytics capabilities, enabling the administrator to gain valuable insight from gathered data.",
    image: appliloanImg,
    imageAlt: "AppliLoan Screenshot",
    buttonText: "View Website",
    buttonLink: "https://appliloan.com",
    buttonDisabled: false,
    role: "Team Leader | Freelance Frontend Developer | Remote | July 2025 - Present",
  },
  {
    logo: "",
    logoAlt: "AcadFlow Logo",
    logoText: "AcadFlow",
    title: "AcadFlow: A Centralized Web-Based Platform for Academic Records Management and School Form Digitization for Castañas National High School",
    techStack: ["React", "Tailwind CSS", "Laravel", "MySQL", "Zustand"],
    description:
      "Developed a centralized web-based portal that digitizes and modernize the preparation of DepEd School Forms (SF 1–SF 10), automates reporting and certificate generation, and provides secure access to academic records and school data for teachers, students, and parents.",
    image: acadflowImg,
    imageAlt: "AcadFlow Screenshot",
    buttonText: "View Website",
    buttonLink: "https://acad-flow.com",
    buttonDisabled: false,
    role: "Team Leader | Freelance Frontend Developer | Remote | July 2025 - Present",
  },
];