import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NAVIGATION_ITEMS = [
  { path: "/pseudo-steam", label: "Store" },
  { path: "/pseudo-steam/about", label: "About" },
  { path: "/pseudo-steam/support", label: "Support" },
  { path: "/pseudo-steam/privacy-policy", label: "Privacy Policy" },
];

const NavigationBar = (): JSX.Element => {
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
          {NAVIGATION_ITEMS.map((item) => (
            <Nav.Link
              key={item.path}
              as={Link}
              to={item.path}
              className="nav-link"
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
