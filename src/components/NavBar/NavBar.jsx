import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Technology",
    href: "#technology",
  },
  {
    label: "Case studies",
    href: "#case-studies",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Hire us",
    href: "#hire-us",
  },
];

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="position-absolute w-100 py-4 bg-transparent z-1"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand className="fw-bold text-light" href="#home">
          compleet labs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {LINKS.map((link) => (
              <Nav.Link key={link.label} className="nav-link" href={link.href}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
