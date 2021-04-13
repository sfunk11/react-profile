import React, { useContext } from "react";
import ProjectCard from "../ProjectCard";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import ProjectContext from "../../utils/projectContext";
import "../../App.css";


function ProjectContainer(){
  const { projects } = useContext(ProjectContext)

  return(
    <Container className="main">
      <Row>
       
        {projects
            ? projects.map((project, i) => (
              <ProjectCard 
                key={i}
                data={project}
                />    
            ))
            : null}
      
            </Row>
    </Container>
  
  )

};

export default ProjectContainer;