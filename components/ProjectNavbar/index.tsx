import { FunctionComponent } from "react";
// import ProjectItems from "./ProjectItems";
import { Category } from "../../type";

const ProjectItems: FunctionComponent<{
  value: Category | "all";
  filterData: Function;
}> = ({ value, filterData }) => {
  const filterCat = () => filterData();
  return (
    <li
      onClick={filterCat}
      className="cursor-pointer hover:text-green capitalize list-none"
    >
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{ filterData: Function }> = ({
  filterData,
}) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto ">
      <ProjectItems value="all" filterData={filterData} />
      <ProjectItems value="react" filterData={filterData} />
      <ProjectItems value="next" filterData={filterData} />
      <ProjectItems value="native" filterData={filterData} />
      {/* <ProjectItems value="others"/> */}
    </div>
  );
};

export default ProjectNavbar;
