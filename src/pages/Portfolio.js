import React, { useContext } from "react";
import ProjectContext from "../utils/projectContext";
import ProjectContainer from "../components/ProjectContainer"
import "../App.css";

function Portfolio() {
  
  const { projects } = useContext(ProjectContext);

  return (
      <ProjectContext.Provider value={projects}>
     <ProjectContainer className="projectContainer"/>
     </ProjectContext.Provider>
  );
}

export default Portfolio;