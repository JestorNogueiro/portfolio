import { GoLocation } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
function Sidebar() {
  return (
    <div className="my-4">
      <Image
        className="rounded-full mx-auto  "
        src="/jestor.jpg"
        alt="jestor nogueiro"
        height="200"
        width="200"
        objectFit="contain"
      />

      <h2 className="my-3 text-3xl font-medium tracking-wider font-Lobster">
        Jestor Nogueiro
      </h2>
      <p className="bg-gray-200 font-semibold my-3 px-2 py-1.5 rounded-full">
        Front-End Developer
      </p>

      <a
        href="/jestor.jpg"
        download="jestorResume"
        className="bg-gray-200 my-3 px-2  py-1.5 rounded-full flex items-center justify-center  "
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
            <FaFacebook className="w-8 h-8 text-blue-700 " />
          </a>
          <a
            href="https://www.instagram.com/jestor_nogueiro/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-8 h-8 text-pink-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="w-8 h-8 text-blue-600" />
          </a>
          <a
            href="https://github.com/JestorNogueiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* contact */}
      <button
        className="mt-2 w-8/12 bg-gradient-to-r from-green to-blue-400 rounded-full my-1.5 py-2 text-xl text-white focus:outline-none"
        onClick={() => window.open("mailto:jestornogueiro789@gmail.com")}
      >
        Email Me{" "}
      </button>
      <button className=" w-8/12 bg-gradient-to-r from-green to-blue-400 rounded-full my-1.5 py-2 text-xl text-white mb-4 focus:outline-none">
        Toggle Theme{" "}
      </button>
    </div>
  );
}

export default Sidebar;
