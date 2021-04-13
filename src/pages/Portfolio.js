import React, { useContext } from "react";
import ProjectContainer from "../components/ProjectContainer";
import Header from "../components/Header";
import ProjectContext from "../utils/projectContext"
import "../App.css";

function Portfolio() {
 
  const { projectHeader } = useContext(ProjectContext)
  return (
    <>
    <Header header={projectHeader}/>
    <ProjectContainer className="projectContainer"/>
    </>
  );
}

export default Portfolio;