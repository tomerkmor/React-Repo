import { useState } from "react";
import ProjectsSideBar from "./components/Left/ProjectsSideBar";
import NewProject from "./components/RIght/NewProject";
import NoProjectSelected from "./components/Right/NoProjectSelected";
import SelectedProject from "./components/Right/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    // undefined - not newProject nor selectedProject, it's the main preview
    // null - adding new project
    // id - selecting a specific project
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random(10000);
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleCreateNewProject = (projectData) => {
    const projectId = Math.random(100000);
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;
  // undefined - not newProject nor selectedProject, it's the main preview
  // null - adding new project
  // id - selecting a specific project
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        cancelNewProject={handleCancelAddProject}
        createNewProject={handleCreateNewProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected addNewProject={handleAddProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        deleteSelectedProject={handleDeleteProject}
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    );
  }

  return (
    <main className="h-screen flex my-8 gap-8">
      <ProjectsSideBar
        selectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        addNewProject={handleAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
