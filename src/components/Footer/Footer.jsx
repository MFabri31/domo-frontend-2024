import { Col, Container, ListGroup, Row } from "react-bootstrap";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import DribbleIcon from "../../assets/icons/dribble-icon.svg";
import FacebookIcon from "../../assets/icons/fb-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-light footer">
      <Container>
        <Row className="justify-content-between mb-4">
          <Col md={4} className="mb-3 mb-md-0">
            <p className="text-white brand fw-semibold">compleet labs</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolorum adipisci facere cumque tenetur tempora deleniti ea illum,
              omnis velit sed et
            </p>
            <div className="d-flex gap-3">
              <a href="https://twitter.com/home" target="_blank">
                <img src={TwitterIcon} alt="Icon of twitter" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={FacebookIcon} alt="Icon of facebook" />
              </a>
              <a href="https://dribbble.com/" target="_blank">
                <img src={DribbleIcon} alt="Icon of dribble" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={InstagramIcon} alt="Icon of instagram" />
              </a>
            </div>
          </Col>
          <Col md={2} className="mb-3 mb-md-0">
            <p className="text-uppercase text-white fw-semibold  footer-title">
              sitemap
            </p>
            <ListGroup className="border-0 p-0 m-0">
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Home</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#technology">Technology</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#services">Services</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#about">About</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2} className="mb-3 mb-md-0">
            <p className="text-uppercase text-white fw-semibold footer-title">
              case studies
            </p>
            <ListGroup className="border-0 p-0 m-0">
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Swiss Airlines</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Google</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Apple</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Nike</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={2} className="">
            <p className="text-uppercase text-white fw-semibold footer-title">
              contact
            </p>
            <ListGroup className="border-0 p-0 m-0">
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Jobs</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0">
                <a href="#">Hire us</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <hr />
        <Row className="my-3">
          <Col md={12} className="text-center">
            <p className="text-white">
              Desarrollado por{" "}
              <span className="text-white-50"> Medina Fabricio</span>{" "}
            </p>
            <a
              href="https://www.linkedin.com/in/medina-fabricio-aa81741b5"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="Icon of Linkedin" />
            </a>
            <a
              href="https://github.com/MFabri31"
              target="_blank"
              className="mx-3"
            >
              <img src={GithubIcon} alt="Icon of Github" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
