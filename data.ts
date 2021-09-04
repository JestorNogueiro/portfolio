import { RiComputerLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface IService {
  title: string;
  about: string;
  icon: IconType;
}

export const servicesProvided: IService[] = [
  {
    title: "Front-end Dev",
    about: "lorem23",
    icon: RiComputerLine,
  },
  {
    title: "ghjkl",
    about: "lorem23",
    icon: RiComputerLine,
  },
];
