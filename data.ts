import next from "next";
import { RiComputerLine } from "react-icons/ri";
import { IService, Project } from "./type";

export const servicesProvided: IService[] = [
  {
    title: "Front-end Dev",
    about:
      "I Love to build beautiful web page using <b>HTML</b> , <b>CSS</b>, <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "App Dev",
    about:
      "I can build Native app ( both Android and IOS ) using <b>React Native</b>",
    Icon: RiComputerLine,
  },
];

export const languagesKnown = [
  {
    title: "react",
  },
];

export const project: Project[] = [
  {
    name: "Disney+ clone",
    description: "this is clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "https://disney-clone-ashy.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/disney-clone",
    category: ["next"],
    tech: ["reactjs", "nextjs", "hero Icons", "Tailwind css", "react-player"],
  },
  {
    name: "Airbnb ",
    description: "this is airbnb clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "https://airbnb-jestornogueiro.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/airbnb",
    category: ["next"],
    tech: ["reactjs", "nextjs", "tailwindcss", "hero Icons", "react-map"],
  },
  {
    name: "Tesla",
    description: "this is clone made with react js",
    image_path: "/scene.jpg",
    deployed_url: "https://tesla-clone-flax.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/Tesla-clone",
    category: ["react"],
    tech: ["reactjs", "material UI", "styled-components", "firebase"],
  },
  {
    name: "Netflix",
    description: "this is clone made with react js",
    image_path: "/scene.jpg",
    deployed_url: "https://netflix-clone-129c2.web.app/",
    github_url: "https://github.com/JestorNogueiro/Netflix-Clone",
    category: ["react"],
    tech: ["reactjs", "material UI", "axios", "firebase"],
  },
  {
    name: "Covid Tracker",
    description: "this is clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "https://jestor-covid19-tracker.web.app/",
    github_url: "https://github.com/JestorNogueiro/covid19-tracker",
    category: ["react"],
    tech: [
      "reactjs",
      "material UI",
      "react-leaflet (map)",
      "chartjs",
      "firebase",
    ],
  },
  {
    name: "Covid Tracker",
    description: "this is clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "",
    github_url: "https://github.com/JestorNogueiro/amazon-clone",
    category: ["react"],
    tech: ["reactjs", "material UI", "firebase"],
  },
];
