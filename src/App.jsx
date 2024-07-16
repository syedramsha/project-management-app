import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined, projects: [], tasks: []
    });

    const handleAddTask = (text) => {
        setProjectState(prevState => {
            const taskId = Math.random()
            const newTask = {
                text: text, projectId: prevState.selectedProjectId, id: taskId
            }
            return {
                ...prevState, tasks: [...prevState.tasks, newTask]
            }
        })
    }

    const handleDeleteTask = (id) => {
        setProjectState(prevState => {
            return {
                ...prevState, tasks: prevState.tasks.filter((task) => task.id !== id)
            };
        });

    }
    const handleProjectSelection = () => {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: null
            };
        });
    }
    const handleAddNewProject = (projectData) => {
        setProjectState(prevState => {
            const newProject = {
                ...projectData, id: Math.random()
            }
            return {
                ...prevState, selectedProjectId: undefined, projects: [...prevState.projects, newProject]
            }
        })
    }

    const handleCancelProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: undefined
            };
        });
    }

    const handleSelectProject = (id) => {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: id
            };
        });
    }

    const handleDeleteProject = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
            };
        });

    }
    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
    let content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
    />;
    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddNewProject} onCancel={handleCancelProject}/> //why
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={() => handleProjectSelection()}/>
    }
    return (<main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onSelect={handleSelectProject}
                         onStartAddProject={() => handleProjectSelection()}
                         projects={projectState.projects}
                         selectedProjectId={projectState.selectedProjectId}
        />
        {content}
    </main>);
}

export default App;
