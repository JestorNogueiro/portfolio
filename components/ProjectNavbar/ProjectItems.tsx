import React, { FunctionComponent } from "react";
import { Category } from "../../type";

const ProjectItems: FunctionComponent<{
  value: Category | "all";
  handleFilter: Function;
}> = ({ value, handleFilter }) => {
  return (
    <li
      className="cursor-pointer hover:text-green capitalize"
      onClick={handleFilter(value)}
    >
      {value}
    </li>
  );
};

export default ProjectItems;
