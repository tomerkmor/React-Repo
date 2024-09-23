import React from "react";


const Header = ({ project, deleteSelectedProject }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString(
    "he-IL"
  );

  return (
    <div className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl text-stone-600 mb-2">
          {project.title}
        </h1>
        <button 
        className="text-stone-600 hover:text-stone-950"
        onClick={deleteSelectedProject}
        >Delete</button>
      </div>

      <div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="mb-4 text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default Header;
