import React from "react";
import Container from "react-bootstrap/Container";
import AboutInfo from "../components/AboutInfo";
import ContactInfo from "../components/ContactInfo";


function About() {
  return (
    <Container fluid>
      <AboutInfo/>
      <ContactInfo/>
    </Container>
  );
}

export default About;