import React from "react";
import Header from "./Header";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  deleteSelectedProject,
  addTask,
  deleteTask,
  tasks
}) => {
  return (
    <div className="w-[35rem] mt-16">
      <Header deleteSelectedProject={deleteSelectedProject} project={project} />
      <Tasks tasks={tasks} addTask={addTask} deleteTask={deleteTask}/>
    </div>
  );
};

export default SelectedProject;
