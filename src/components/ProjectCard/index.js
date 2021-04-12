import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ProjectContext from "../../utils/projectContext"
import "../../App.css";

function ProjectCard(){
  const { project } = useContext(ProjectContext);
    return(
      <Card bg="info" text="white">
        <Card.Img variant="top" src={project.image} />
       <Card.Body>
        <Card.Title >{project.name}</Card.Title>
        <p> Technologies Used: </p>
        <p> {project.technologies}</p>
        <a href={project.repoLink}> Repository Link</a>
        </Card.Body>
    </Card>
    ) 
}

export default ProjectCard;