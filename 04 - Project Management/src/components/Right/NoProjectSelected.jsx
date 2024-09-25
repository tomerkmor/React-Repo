import React from "react";
import img from "../../assets/no-projects.png";
import Button from "../Button";

const NoProjectSelected = ({addNewProject}) => {
  const classes = "flex flex-col items-center h-screen w-screen gap-3";
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={img}
        className="w-16 h-16 object-contain mx-auto"
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">Select a project or create new one</p>
      <Button onClick={addNewProject}>Create new project</Button>
    </div>
  );
};

export default NoProjectSelected;
