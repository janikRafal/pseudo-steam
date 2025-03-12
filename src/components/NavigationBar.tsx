import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3">
      <Navbar.Brand as={Link} to="/" className="me-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
        />
        {" Steam Clone"}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-3">
          <Nav.Link
            as={Link}
            to="/"
            className="nav-link"
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textUnderlineOffset = "4px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Store
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="nav-link"
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textUnderlineOffset = "4px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/support"
            className="nav-link"
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textUnderlineOffset = "4px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Support
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/privacy-policy"
            className="nav-link"
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textUnderlineOffset = "4px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Privacy Policy
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
