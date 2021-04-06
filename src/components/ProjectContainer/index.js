import React from "react";

import Card from "react-bootstrap/Card";

function ProjectContainer(){
  return(
    <Card bg="info" text="white">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
     <Card.Body>
      <Card.Title >Panel heading with a title</Card.Title>
      <p> Technologies Used: </p>
      <p> comma separated list</p>
      <p> Repository Link</p>
      </Card.Body>
  </Card>
  )

};

export default ProjectContainer;