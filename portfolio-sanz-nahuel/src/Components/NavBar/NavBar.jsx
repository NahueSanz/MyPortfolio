import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import megumin from "../../assets/megumin.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expand="lg" className="navbarContainer" fixed="top">
      <Container>
        <Navbar.Brand className="navBrand" href="/">
          <img src={megumin} alt="imgMegumin" className="imgLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <i className="bi bi-house icon"></i>
              Home
            </Nav.Link>

            <Nav.Link href="/about">
              <i className="bi bi-person icon"></i>About
            </Nav.Link>
            <Nav.Link href="/projects">
              <i className="bi bi-tv icon"></i>Projects
            </Nav.Link>
            <Nav.Link href="/resume">
              <i className="bi bi-file-text icon"></i>Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
