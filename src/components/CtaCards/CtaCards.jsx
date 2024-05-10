import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./CtaCards.css";
import Devices from "../../assets/images/devices.png";

const CtaCards = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-between">
          <Col md={6}>
            <Card className="rounded-1 cta-card mb-3">
              <Card.Body className="w-50 py-4">
                <Card.Title className="fs-3">Get in touch us</Card.Title>
                <Card.Text className="text-white-50 my-4">
                  Some quick example text to build on the card title and make up
                  the.
                </Card.Text>
                <Button
                  variant="outline-light px-4 fs-6"
                  className="rounded-0 "
                >
                  Hire us
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cta-card">
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body className=" p-4">
                    <Card.Title className="fs-3">Our Projects</Card.Title>
                    <Card.Text className="text-white-50 my-4">
                      Some quick example text to build <br /> on the card title
                      and make up the.
                    </Card.Text>
                    <Button
                      variant="outline-light px-4 fs-6"
                      className="rounded-0 "
                    >
                      See Projects
                    </Button>
                  </Card.Body>
                </Col>
                <Col md={4} className="d-none d-md-block">
                  <img
                    src={Devices}
                    className="img-fluid"
                    alt="Image of devices"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CtaCards;
