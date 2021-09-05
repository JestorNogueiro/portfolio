import ProjectCard from "../components/ProjectCard";
import { project } from "../data";

function projects() {
  return (
    <div>
      <nav>Navbar</nav>
      <div>
        {project.map((project) => (
          <div>
            <ProjectCard projectData={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
