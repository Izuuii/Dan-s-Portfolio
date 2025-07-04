// import bootstrap from "../assets/images/bootstrap-original.png";
// import css3 from "../assets/images/css3-original.png";
// import figma from "../assets/images/figma-original.png";
// import git from "../assets/images/git-plain.png";
// import html5 from "../assets/images/html5-original.png";
// import js from "../assets/images/javascript-original.png";
// import react from "../assets/images/react-original.png";
// import tailwind from "../assets/images/tailwindcss-plain.png";
// import vscode from "../assets/images/vscode-original.png";
// import canva from "../assets/images/canva.png";
// import expressjs from "../assets/images/express-js.png"
// import firebase from "../assets/images/firebase.png"
// import mongoDB from "../assets/images/mongoDB.png"
// import NodeJS from "../assets/images/nodeJS.png";
import Beemo from "../assets/projImage/BeeMo.png";
import BeemoLogo from "../assets/projImage/BeeMoLogo.png";
import AIchatbot from "../assets/projImage/Ai-chatbot.png";
import chatbotLogo from "../assets/projImage/chat-bot.png";
import PitchClone from "../assets/projImage/PitchClone.png";
import PitchLogo from "../assets/projImage/PitchLogo.png";

// export const techIcons = [
//   { imgUrl: bootstrap },
//   { imgUrl: css3 },
//   { imgUrl: figma },
//   { imgUrl: git },
//   { imgUrl: html5 },
//   { imgUrl: js },
//   { imgUrl: react },
//   { imgUrl: tailwind },
//   { imgUrl: vscode },
//   { imgUrl: canva },
//   { imgUrl: expressjs },
//   { imgUrl: firebase },
//   { imgUrl: mongoDB },



//   { imgUrl: bootstrap },
//   { imgUrl: css3 },
//   { imgUrl: figma },
//   { imgUrl: git },
//   { imgUrl: html5 },
//   { imgUrl: js },
//   { imgUrl: react },
//   { imgUrl: tailwind },
//   { imgUrl: vscode },
//   { imgUrl: canva },
//   { imgUrl: expressjs },
//   { imgUrl: firebase },
//   { imgUrl: mongoDB },


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
    image:
      Beemo,
    imageAlt: "BeeMo Screenshot",
    buttonText: "View Website",
    buttonLink: "#",
    buttonDisabled: true, // <--- add this
  },
    {
    logo: chatbotLogo,
    logoAlt: "Chatbot Logo",
    logoText: "AI Chatbot",
    title: " AI Chatbot Built with ChatGPT, Gemini, Deepseek ",
    techStack: ["React", "Tailwind CSS", "FlowBite", "APIs"],
    description:
      "An advanced AI chatbot that integrates ChatGPT, Gemini, and Deepseek to deliver intelligent, context-aware conversations. It assists users with real-time answers, creative support, and task automation, providing a smooth and engaging experience across multiple domains.",
    image:
      AIchatbot,
    imageAlt: "AI Chatbot Screenshot",
    buttonText: "View Website",
    buttonLink: "https://react-ai-chatbot-k7ci.vercel.app",
    buttonDisabled: false, // <--- add this
  },
    {
    logo: PitchLogo,
    logoAlt: "Pitch Logo",
    logoText: "",
    title: "Pitch Clone Website",
    techStack: ["React", "Tailwind CSS"],
    description:
      "A responsive clone of the Pitch website built with React and Tailwind CSS. This project was created to practice modern layouts, component structures, and adaptive design techniques while improving skills in building clean, professional interfaces.",
    image:
      PitchClone,
    imageAlt: "PitchClone Screenshot",
    buttonText: "View Website",
    buttonLink: "https://pitch-clone.vercel.app",
    buttonDisabled: false, // <--- add this
  },
  // Add more project objects here as needed
];