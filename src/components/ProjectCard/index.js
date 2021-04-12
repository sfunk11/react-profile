import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import "../../App.css";

function ProjectCard( props ){
    return(
      <Card bg="info" className="p-3 mt-3 ml-3 mr-3 mb-3"text="white">
        <Card.Img variant="top" src={props.data.project.image} alt={props.data.project.name}/>
       <Card.Body>
        <Card.Title >
          <a href={props.data.project.deployedLink}>{props.data.project.name}</a>
          </Card.Title>
        <p>{props.data.project.description}</p>
        <p> Technologies Used: </p>
        <p> {props.data.project.technologies}</p>
        <a href={props.data.project.repoLink} className="text-light text-bold text-decoration-bold"> Repository Link</a>
        </Card.Body>
    </Card>
    ) 
}

export default ProjectCard;