import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import "./style.css"

function Header() {
  return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand className="badge-info text-white brand " href="/">Samantha Funk </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/about" className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }>About</Nav.Link>
      <Nav.Link href="/portfolio" className={
              window.location.pathname === "/" || window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }>Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Header;