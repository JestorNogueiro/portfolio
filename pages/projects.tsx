import ProjectCard from "../components/ProjectCard";
import { project } from "../data";

function projects() {
  return (
    <div
      className="my-2 py-2 px-5 overflow-y-scroll"
      style={{ height: "85vh" }}
    >
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3 ">
        {project.map((project) => (
          <div
            key={project.name}
            className=" col-span-12 p-2 sm:col-span-6 lg:col-span-4  dark:bg-gray-900 bg-gray-100 justify-center"
          >
            <ProjectCard projectData={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
