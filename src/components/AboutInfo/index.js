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
      <Image className="float-left mr-3 mb-3" id="bio-image" src="/1536061001183.jpeg" alt="Sam Funk" rounded responsive/>
      <p> Web Developer with years of experience managing relationship and internal cross functional program for Fortune 500 client. Experienced with both optimizing caller experience design and technical design considerations. Consistent history of guiding teams through difficult challenges, serving as a trusted client advisor, and maintaining high quality standards. I live in Indianapolis, IN with my family and our four corgis.</p>
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
    <p>My portfolio is growing every week!  Check back frequently to see the newer things I have been up to. Send me a note or check me out on social media!</p>
    </Col>
  </Row>
</Container>
    </Wrapper>
    )
}

export default AboutInfo;