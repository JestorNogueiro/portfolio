import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimate, stagger } from "../animation";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { project } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projectFilter, setProjectFilter] = useState(project);
  const [activeItem, setActiveItem] = useState("all");

  // filtering projects
  const handleFilter = (category: Category | "all") => {
    if (category === "all") {
      setProjectFilter(project);
      setActiveItem(category);
      return;
    } else {
      const newFilter = project.filter((singleProject) =>
        singleProject.category.includes(category)
      );
      setProjectFilter(newFilter);
      setActiveItem(category);
    }
  };
  return (
    <motion.div
      variants={routeAnimate}
      initial="initial"
      animate="animate"
      exit="exit"
      className="my-2 py-2 px-5 overflow-y-scroll"
      style={{ height: "85vh" }}
    >
      {/* project filter */}
      <ProjectNavbar filterData={handleFilter} />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3 "
      >
        {project.map((pro) => (
          <motion.div
            variants={fadeInUp}
            key={pro.name}
            className=" col-span-12  sm:col-span-6 lg:col-span-4  dark:bg-gray-900 bg-gray-100 justify-center p-4"
          >
            <ProjectCard projectData={pro} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
