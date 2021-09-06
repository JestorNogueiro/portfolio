import { FunctionComponent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../type";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
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
      <Image
        src={image_path}
        alt={name}
        height={180}
        width={250}
        onClick={() => setShowDetail(true)}
        className="cursor-pointer transform hover:scale-95 duration-500"
      />
      <p>{name}</p>
      {showDetail && (
        <div className="flex absolute top-0 left-0 bg-white dark:bg-darkback h-auto w-full z-10  p-4 shadow-2xl border-2 rounded-xl dark:border-gray-600">
          <div className="grid md:grid-cols-2">
            <div>
              <Image src={image_path} alt={name} height={180} width={300} />
              <p className="flex mt-4 gap-3 items-center  ">
                <FaGithub className="h-8 w-8" />
                <p> Demo</p>
              </p>
            </div>
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
              <p className="space-x-4">
                {tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </p>
            </div>
            <button onClick={() => setShowDetail(false)}>
              <IoIosClose className="h-8 w-8 absolute top-0 right-0 bg-gray-600 text-white rounded-full dark:bg-gray-400m m-3 transform hover:rotate-90 duration-500 " />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
