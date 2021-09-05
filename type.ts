import { IconType } from "react-icons";
export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  tech: string[];
}

export type Category = "react" | "next" | "native";
