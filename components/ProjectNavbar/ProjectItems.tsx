import React, { FunctionComponent } from "react";
import { Category } from "../../type";

const ProjectItems: FunctionComponent<{ value: Category | "all" }> = ({
  value,
}) => {
  return (
    <div className="cursor-pointer hover:text-green capitalize">{value}</div>
  );
};

export default ProjectItems;
