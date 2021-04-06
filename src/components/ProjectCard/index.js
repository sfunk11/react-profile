import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function ProjectCard(){
  return (
  <Card bsStyle="info">
    <Card.Heading>
      <Card.Title componentClass="h3">Panel heading with a title</Card.Title>
    </Card.Heading>
    <Card.Body>
      <Image className="float-left mr-3 mb-3" id="bio-image" src="/1536061001183.jpeg" alt="Sam Funk" rounded responsive/>
      <h4> Technologies Used: </h4>
      <p> comma separated list</p>
      <p> Repository Link</p>
      </Card.Body>
  </Card>
  ) 
}

export default ProjectCard;