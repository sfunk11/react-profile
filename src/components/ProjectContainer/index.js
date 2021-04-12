import React from "react";
import ProjectCard from "../ProjectCard";
import ProjectContext from "../../utils/projectContext";
import "../../App.css";

function ProjectContainer(){
  return(
 
    <ProjectContext.Provider value={{
      project: {
      name: "Knowvid-19",
      image: "./assets/images/knowvid-19.png",
      technologies: "HTML, CSS, JSON, MySQL, Sequelize, Express, Handlebars, Axios, NodeJs, Multer, HTTP GET/POST/PUT  requests, and Server-side APIs",
      repoLink: "https://github.com/Smart-Kids-Group/Covid-Project/"
    }}}>
    <ProjectCard />
    </ProjectContext.Provider >
    
  )

};

export default ProjectContainer;