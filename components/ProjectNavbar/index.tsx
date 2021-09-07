import ProjectItems from "./ProjectItems";

const ProjectNavbar = () => {
  return (
    <div className="flex px-3 py-2 space-x-3 ">
      <ProjectItems value="all" />
      <ProjectItems value="react" />
      <ProjectItems value="next" />
      <ProjectItems value="native" />
      {/* <ProjectItems value="others"/> */}
    </div>
  );
};

export default ProjectNavbar;
