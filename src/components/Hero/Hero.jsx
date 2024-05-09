import { Button, Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="">We build beautiful and realible web solutions</h1>
            <p className="mt-2 mb-4 fw-semibold">
              We strongly believe that communication,trust and transparency{" "}
              <br /> are the essential elements of successful business
              relationship. <br /> Ready for the journey?
            </p>
            <Button
              variant="outline-secondary"
              className="btn btn-learn rounded-0 px-4 fw-semibold"
            >
              Learn more
            </Button>
            <Button className="btn btn-projects rounded-0 px-4 mx-4 fw-semibold">
              Our Projects →
            </Button>
          </Col>
          <Col
            md={5}
            className="bg-img position-absolute top-0 end-0 z-n1 d-none d-md-block"
          ></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
