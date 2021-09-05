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
    deployed_url: "/xdfvd",
    github_url: "fdbfdb",
    category: ["next"],
    tech: ["react", "next", "hero Icons"],
  },
  {
    name: "Covid Tracker",
    description: "this is clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "/xdfvd",
    github_url: "fdbfdb",
    category: ["react"],
    tech: ["react", "material UI", "firebase"],
  },
  {
    name: "Airbnb ",
    description: "this is clone made with next js",
    image_path: "/scene.jpg",
    deployed_url: "/xdfvd",
    github_url: "fdbfdb",
    category: ["next"],
    tech: ["react", "next", "hero Icons"],
  },
];
