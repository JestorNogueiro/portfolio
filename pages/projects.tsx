import ProjectCard from "../components/ProjectCard";
import { project } from "../data";

function projects() {
  return (
    <div className="my-2 p-2">
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3 ">
        {project.map((project) => (
          <div
            key={project.name}
            className=" col-span-12 p-2 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard projectData={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
