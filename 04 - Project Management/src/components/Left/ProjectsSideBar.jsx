import React from "react";
import { useState } from "react";
import Button from "../Button";

const ProjectsSideBar = ({
  addNewProject,
  projects,
  selectProject,
  selectedProjectId,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <aside className="bg-stone-900 w-1/3 md:w-72 h-full text-stone-50 rounded-r-xl py-16 px-8">
      <h2 className="uppercase mb-8 font-bold md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={addNewProject}>+ Add Project</Button>
      </div>

      <ul className="my-8">
        {projects.map((project) => {

          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          if(project.id === selectedProjectId){
            cssClasses += " bg-stone-800 text-stone-200"
          }else{
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => selectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSideBar;
