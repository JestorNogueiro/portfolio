import { FunctionComponent } from "react";
import { Project } from "../type";

const ProjectCard: FunctionComponent<{
  projectData: Project;
}> = ({
  projectData: { name, description, deployed_url, github_url, category, tech },
}) => {
  return <div></div>;
};

export default ProjectCard;
