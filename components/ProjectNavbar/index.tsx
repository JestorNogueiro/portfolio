import ProjectItems from "./ProjectItems";

const ProjectNavbar = () => {
  return (
    <div>
      <ProjectItems value="all" />
      <ProjectItems value="react" />
      <ProjectItems value="next" />
      <ProjectItems value="native" />
      {/* <ProjectItems value="others"/> */}
    </div>
  );
};

export default ProjectNavbar;
