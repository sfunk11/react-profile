import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Wrapper from "../Wrapper"
import "../../App.css";

function AboutInfo () {
    return (
  <Wrapper className="card">
        <h2 className="text-info font-weight-bold p-3 border-bottom border-info">
          About Me
        </h2>
        <Container>
  <Row>
    <Col xs={12}>
      <Image className="float-left mr-3 mb-3" id="bio-image" src="/1536061001183.jpeg" alt="Sam Funk" rounded />
      <p> Full Stack Web Developer leveraging a ​background in program management and client services. Recognized for effective management and in depth technical knowledge of client systems. ​Completing a Certificate in Web Development from Butler University in April 2021. Excellent interpersonal communication skills. Collaborator who works well on team-based projects as well as independently. Recognized for proven complex problem-solving abilities to contribute effectively as a part of a fast-paced, quality-driven team.</p>
      
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
    <h5> Technical Skills & Languages: </h5>
    <p> ReactJS, Node.Js, Express, JavaScript, jQuery, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap & React Bootstrap, Foundation CSS, APIs, Heroku, Terminal, Inquirer, AJAX, Axios, Multer, Restful API, ES6, JSON, Sequelize</p>
    <br />
    <p> Check back frequently to see the newer things I have been up to. Send me a note or check me out on social media!</p>
    </Col>
  </Row>
</Container>
    </Wrapper>
    )
}

export default AboutInfo;