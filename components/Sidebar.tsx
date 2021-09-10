import { GoLocation } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import { useTheme } from "next-themes";
function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="my-4">
      <Image
        className="rounded-full mx-auto bg-gray-300 dark:bg-gray-800 "
        src="/jestor-2.png"
        alt="jestor nogueiro"
        height="200"
        width="200"
        objectFit="contain"
      />

      <h2 className="my-3 text-3xl font-medium tracking-wider font-Lobster">
        Jestor Nogueiro
      </h2>
      <p className="bg-gray-200 dark:bg-gray-100 dark:text-black font-semibold my-3 px-2 py-1.5 rounded-full w-8/12 mx-auto ">
        Front-End Developer
      </p>

      <a
        href="/jestor-Resume.pdf"
        download="jestorResume"
        className="bg-gray-200 dark:bg-gray-100 dark:text-black my-3 px-2  py-1.5 rounded-full flex items-center justify-center w-8/12 mx-auto  "
      >
        Download Resume
        <HiDownload className="animate-bounce ml-2 " />
      </a>

      {/* Personal Details */}
      <div>
        <div className="flex align-center justify-center space-x-2">
          <GoLocation />
          <span>Goa, India</span>
        </div>
        <p className="my-2 font-semibold ">jestornogueiro789@gmail.com</p>
        <p className="my-2">+91 9823145824 / +91 6366705572</p>

        {/* Social Media Details */}
        <div className="flex items-center justify-center gap-3.5">
          <a
            href="https://www.facebook.com/jestor.nogueiro/"
            target="_blank "
            rel="noreferrer"
          >
            <FaFacebook className="w-8 h-8 text-blue-700 transform hover:scale-110 duration-500 drop-shadow-xl" />
          </a>
          <a
            href="https://www.instagram.com/jestor_nogueiro/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-8 h-8 text-pink transform hover:scale-110 duration-500 drop-shadow-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="w-8 h-8 text-blue-600 transform hover:scale-110 duration-500 drop-shadow-xl" />
          </a>
          <a
            href="https://github.com/JestorNogueiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="w-8 h-8 transform hover:scale-110 duration-500 drop-shadow-xl" />
          </a>
        </div>
      </div>

      {/* contact */}
      <button
        className="mt-2 w-8/12 bg-gradient-to-r from-green to-blue-400 dark:bg-gray-700 rounded-full my-1.5 py-1.5 text-xl text-white focus:outline-none transform hover:scale-95 duration-500"
        onClick={() => window.open("mailto:jestornogueiro789@gmail.com")}
      >
        Email Me{" "}
      </button>
      <button
        className=" w-8/12 bg-gradient-to-r from-green to-blue-400 rounded-full my-1.5 py-1.5 text-xl text-white mb-4 focus:outline-none transform hover:scale-95 duration-500"
        onClick={changeTheme}
      >
        Toggle Theme{" "}
      </button>
    </div>
  );
}

export default Sidebar;
