import { FunctionComponent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../type";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
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
    <div className="">
      {/* project image and name */}
      <Image
        src={image_path}
        alt={name}
        height={180}
        width={250}
        onClick={() => setShowDetail(true)}
        className="cursor-pointer transform hover:scale-95 duration-500"
      />
      <p>{name}</p>
      {/* when show detail will true the opacity and background will change  */}
      {showDetail && (
        <div className="absolute inset-0 bg-black opacity-70 h-full w-full z-10" />
      )}
      {/* when it is true the project details will appear */}
      {showDetail && (
        <div className="flex md:absolute sticky top-0 left-0 bg-white dark:bg-darkback h-auto w-full z-20  p-4 shadow-2xl border-2 rounded-xl dark:border-gray-600">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col items-center justify-center py-3">
              <Image src={image_path} alt={name} height={180} width={300} />
              <div className="flex mt-4 gap-3 justify-center ">
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
                  className="bg-gray-200 dark:bg-gray-900 mr-2   h-8
                  min-w-max flex items-center py-2 px-3"
                >
                  <AiFillProject />
                  <span>Demo</span>
                </a>
              </div>
            </div>
            <div className=" flex flex-col">
              <h2>{name}</h2>
              <p>{description}</p>
              <div className="space-x-4 ">
                {tech.map((item) => (
                  <span
                    className="bg-gray-200 dark:bg-gray-900 px-3 py-1 gap-3 my-4"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {/* button to close the project details */}
            <button onClick={() => setShowDetail(false)}>
              <IoIosClose className="h-8 w-8 absolute top-0 right-0 bg-gray-600 text-white rounded-full dark:bg-gray-700 m-3 transform hover:rotate-90 duration-500 " />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
