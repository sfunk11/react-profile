import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import AboutInfo from "../components/AboutInfo";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header"
import ProjectContext from "../utils/projectContext"
import "../App.css";


function About() {

  const { aboutheader } = useContext(ProjectContext)

  return (
    <>
    <Header header={aboutheader}/> 
   <Container fluid className="mt-5 infoContainer">
      <AboutInfo/>
      <ContactInfo/>
    </Container>
    </>
  );
}

export default About;