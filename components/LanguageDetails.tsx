import { motion } from "framer-motion";
import { fadeInUp } from "../animation";
function LanguageDetails({ title, Icon }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group cursor-pointer  m-2 p-2 flex flex-col flex-1 text-center items-center justify-center h-24 w-28 bg-gray-100 dark:bg-gray-500 rounded-t-xl dark:text-darkcolor"
    >
      <Icon className="h-16 w-16 dark:group-hover:text-white group-hover:text-blue-600 transition transform hover:scale-110 duration-300 mb-2 " />

      <h2 className="text-lg font-bold capitalize opacity-0 group-hover:opacity-100 transition transform duration-500 hover:scale-105 -m-2 hover:translate-y-2 ">
        {title}
      </h2>
    </motion.div>
  );
}

export default LanguageDetails;
