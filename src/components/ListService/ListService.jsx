import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ListService.css";
import data from "../../data.json";

const ListService = () => {
  return (
    <section className="text-light text-center services" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h3 className="fw-bold">Our Services</h3>
            <p className="fw-bold">
              We feel very strong about skills when it comes to planning,
              designing and coding applications. Here is what we love to do do!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {data.services.map((service) => (
            <Col key={service.title} md={4}>
              <Card
                style={{ width: "25rem" }}
                className="rounded-0 service-card py-5"
              >
                <Card.Img
                  variant="top"
                  src={service.image}
                  className="img-fluid mx-auto"
                  style={{ width: "70px" }}
                />
                <Card.Body className="d-flex flex-column gap-3 align-items-center">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text className="lh-lg">{service.description}</Card.Text>
                  <Button variant="outline border-secondary rounded-0 w-25">
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ListService;
