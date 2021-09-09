import { FunctionComponent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../type";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";
const ProjectCard: FunctionComponent<{
  projectData: Project;
}> = ({
  projectData: {
    name,
    description,
    deployed_url,
    github_url,
    category,
    tech,
    image_path,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      {/* project image and name */}
      <Image
        src={image_path}
        alt={name}
        height={180}
        width={300}
        layout="responsive"
        onClick={() => setShowDetail(true)}
        className="cursor-pointer transform hover:scale-95 duration-500 "
      />
      <p className="text-center mt-3 text-lg tracking-wider ">{name}</p>
      {/* when show detail will true the opacity and background will change  */}
      {showDetail && (
        <div className="absolute inset-0 bg-black opacity-70 h-full w-full z-10" />
      )}
      {/* when it is true the project details will appear */}
      {showDetail && (
        <div className="flex md:absolute sticky top-0 left-0 bg-white dark:bg-darkback h-auto w-full z-20  p-4 shadow-2xl border-2 rounded-xl dark:border-gray-600">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 grid-cols-1 "
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center py-3"
            >
              <Image
                src={image_path}
                alt={name}
                height={180}
                width={300}
                className="bg-gray-800"
                // layout="responsive"
              />
              <motion.div
                variants={fadeInUp}
                className="flex mt-4 gap-3 justify-center "
              >
                <a
                  href={github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-gray-900  h-8
                  min-w-max flex items-center py-2 px-3 "
                >
                  <FaGithub className="h-6 w-6 text-center" />
                </a>
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-gray-900 ml-2   h-8
                  min-w-max flex items-center py-2 px-3"
                >
                  <AiFillProject />
                  <span>Demo</span>
                </a>
              </motion.div>
            </motion.div>
            {/* project details */}
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="mx-4 mt-3 "
            >
              <h2 className="mb-3 text-xl font-semibold md:text-2xl border-b border-gray-800 ">
                {name}
              </h2>
              <motion.p variants={fadeInUp} className="mb-3 font-medium">
                {description}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className=" flex flex-wrap mt-5 space-x-2 tracking-wider "
              >
                {tech.map((item) => (
                  <span
                    className="bg-gray-200 dark:bg-gray-900 px-3 py-1 my-4"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            {/* button to close the project details */}
            <button onClick={() => setShowDetail(false)}>
              <IoIosClose className="h-8 w-8 absolute top-0 right-0 bg-gray-600 text-white rounded-full dark:bg-gray-700 m-3 transform hover:rotate-90 duration-500 " />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
