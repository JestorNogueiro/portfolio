import React, { FunctionComponent } from "react";
import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { title, about, Icon },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="bg-gray-300 p-2 rounded-2xl flex items-center space-x-4">
      <Icon className="h-12 w-12 " />
      <div className=" ml-3 text-left ">
        <h1 className="text-xl font-bold">{title}</h1>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
