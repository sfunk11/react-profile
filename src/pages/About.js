import React from "react";
import Container from "react-bootstrap/Container";
import AboutInfo from "../components/AboutInfo";
import ContactInfo from "../components/ContactInfo";
import "../App.css";


function About() {
  return (
    <Container fluid className="mt-5 infoContainer">
      <AboutInfo/>
      <ContactInfo/>
    </Container>
  );
}

export default About;