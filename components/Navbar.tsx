import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItems: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-green cursor-pointer"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-extrabold text-xl border-b-4 border-green">
        {activeItem}
      </span>
      <div className="flex space-x-3">
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/"
          name="About"
        />
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/projects"
          name="Projects"
        />
        <NavItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/resume"
          name="Resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
