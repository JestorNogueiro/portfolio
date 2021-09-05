import ProjectCard from "../components/ProjectCard";
import { project } from "../data";

function projects() {
  return (
    <div>
      <nav>Navbar</nav>
      <div>
        {project.map((project) => (
          <div key={project.name}>
            <ProjectCard projectData={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
