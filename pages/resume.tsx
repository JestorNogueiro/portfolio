import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiJquery,
  SiNextDotJs,
  SiStyledComponents,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import LanguageDetails from "../components/LanguageDetails";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation";
function resume() {
  return (
    <div className="px-4 py-2">
      <div className="grid md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mx-2 border-r"
        >
          <h2 className="text-2xl font-bold my-3 ml-4">Education</h2>
          <div className="text-left px-3">
            <h2 className="font-bold text-xl my-2 border-b-2">
              Master Of Computer Applications
            </h2>
            <p className="font-medium">Year 2018-20</p>
            <p>
              Did MCA in Jain college of engineering, Balagavi Karnataka India
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mx-2"
        >
          <h2 className="text-2xl font-bold my-3 ml-4">Experience</h2>
          <p className="font-bold text-xl my-2 ">
            <a
              href="https://www.tmits.in/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 "
            >
              <i className="text-blue-900 font-semibold">
                {" "}
                Technominds IT Solutions
              </i>{" "}
            </a>
          </p>
          <p className="mb-1">
            10<small>th</small> Jan 2020 - 10<small>th</small> july 2020
          </p>
          <p>
            worked as Front-end Developer and PHP Developer for 6 months with
            the project.
          </p>
          <p>
            Worked in
            <a
              href="https://www.tmits.in/"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 "
            >
              <i className="text-blue-900 font-semibold">
                {" "}
                Technominds IT Solutions,
              </i>{" "}
            </a>
            Belgaum karnataka.
          </p>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 my-6 mx-4">
        <div className="border-r mr-4">
          <h1 className="text-2xl font-bold my-3">Languages & Framework</h1>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-wrap space-x-3 p-2"
          >
            {/* Images */}
            {/* react */}
            <LanguageDetails title="HTML" Icon={FaHtml5} />
            <LanguageDetails title="CSS" Icon={FaCss3} />
            <LanguageDetails title="javaScript" Icon={IoLogoJavascript} />
            <LanguageDetails title="reactjs" Icon={FaReact} />
            <LanguageDetails title="nextjs" Icon={SiNextDotJs} />
            <LanguageDetails title="reactNative" Icon={FaReact} />
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h2 className="text-2xl font-bold my-3">Other Tools & Tech</h2>
          <div className=" flex flex-wrap">
            <LanguageDetails title="jquery" Icon={SiJquery} />

            <LanguageDetails title="TS" Icon={SiTypescript} />
            <LanguageDetails title="sass" Icon={FaSass} />

            <LanguageDetails title="tailwind css" Icon={SiTailwindcss} />
            <LanguageDetails
              title="styledComponents"
              Icon={SiStyledComponents}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default resume;
