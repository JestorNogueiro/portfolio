import { RiComputerLine } from "react-icons/ri";
import { IService, Project } from "./type";

export const servicesProvided: IService[] = [
  {
    title: "Front-end Dev",
    about:
      "I Love to build beautiful web page using <b>HTML</b> , <b>CSS</b>,<b>JavaScript</b>, <b>React.js</b>, <b>Next.js</b> ",
    Icon: RiComputerLine,
  },
  {
    title: "App Dev",
    about:
      "I can build Native app ( both Android and IOS ) using <b>React Native</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Responsive website ",
    about:
      "I can built <b>Responsive</b> website which can work on both <b> Desktop</b> and <b>mobile</b> ",
    Icon: RiComputerLine,
  },
  {
    title: "Quick Learner",
    about:
      "I am a quick learner, I can learn and adapt new <b> Technology </b>and <b>Framework</b> easily ",
    Icon: RiComputerLine,
  },
];

// Project Details
export const project: Project[] = [
  {
    name: "Disney+ clone",
    description:
      "In this you can view different movies and the Tv series, you can view there details and also view trailer of the particular movie and see no of  seasons available  ",
    image_path: "/project/disney.jpg",
    deployed_url: "https://disney-clone-ashy.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/disney-clone",
    category: ["next"],
    tech: ["react.js", "next.js", "hero Icons", "Tailwind css", "react-player"],
  },
  {
    name: "Airbnb ",
    description:
      "It is static website, you can search any country and select the date and other details and search the place, also map is implemented (map only can be viewed on desktop) Note:Only London data is implemented statically   ",
    image_path: "/project/airbnb.jpg",
    deployed_url: "https://airbnb-jestornogueiro.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/airbnb",
    category: ["next"],
    tech: ["react.js", "next.js", "tailwindCss", "hero Icons", "react-map"],
  },
  {
    name: "Tesla",
    description:
      "In this you will see only UI of the Tesla website, and some animation and also the menu list is available",
    image_path: "/project/tesla.jpg",
    deployed_url: "https://tesla-clone-flax.vercel.app/",
    github_url: "https://github.com/JestorNogueiro/Tesla-clone",
    category: ["react"],
    tech: ["react.js", "material UI", "styled-components", "firebase"],
  },
  {
    name: "Netflix",
    description:
      "This is netflix like website inspired with its UI ,In this project the movie poster will display with different genre available like Netflix original, Horror, Action, etc. And also view the trailer. (Named as JestFlix)",
    image_path: "/project/netflix.jpg",
    deployed_url: "https://netflix-clone-129c2.web.app/",
    github_url: "https://github.com/JestorNogueiro/Netflix-Clone",
    category: ["react"],
    tech: ["react.js", "material UI", "axios", "firebase"],
  },
  {
    name: "Covid Tracker",
    description:
      "Its Covid19 tracker, you can select different country available from the dropdown items, also you can view the map with the total number of cases, recovered cases and total number of deaths by country ",
    image_path: "/project/covid.jpg",
    deployed_url: "https://jestor-covid19-tracker.web.app/",
    github_url: "https://github.com/JestorNogueiro/covid19-tracker",
    category: ["react"],
    tech: [
      "react.js",
      "material UI",
      "react-leaflet (map)",
      "chart.js",
      "firebase",
    ],
  },
  {
    name: "Amazon clone",
    description:
      "its an e-commerce website, Inspired with the Amazon website   ",
    image_path: "/project/amazon.jpg",
    deployed_url: "",
    github_url: "https://github.com/JestorNogueiro/amazon-clone",
    category: ["react"],
    tech: ["react.js", "contextAPI", "material UI", "firebase"],
  },
  {
    name: "Burger website",
    description:
      " It is Responsive website (only Front end included), which works perfectly on Mobile browser",
    image_path: "/project/burger.jpg",
    deployed_url: "https://jestornogueiro.github.io/responsive_burger_website/",
    github_url: "https://github.com/JestorNogueiro/responsive_burger_website",
    category: ["react"],
    tech: ["react.js", " Styled component"],
  },
];
