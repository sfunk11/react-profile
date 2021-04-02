import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand className="badge-info text-white " href="#home">Samantha Funk </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Header;