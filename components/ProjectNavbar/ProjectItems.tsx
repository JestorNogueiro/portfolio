import React, { FunctionComponent } from "react";
import { Category } from "../../type";

const ProjectItems: FunctionComponent<{ value: Category | "all" }> = ({
  value,
}) => {
  return <div>{value}</div>;
};

export default ProjectItems;
