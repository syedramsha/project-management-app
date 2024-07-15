import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    });
    const handleProjectSelection = () => {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            };
        });
    }
    let content;
    if (projectState.selectedProjectId === null) {
        content = <NewProject/>
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={() => handleProjectSelection()}/>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={() => handleProjectSelection()}/>
            {content}
        </main>
    );
}

export default App;
