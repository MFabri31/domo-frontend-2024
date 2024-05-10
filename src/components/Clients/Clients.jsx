import { Col, Container, Row } from "react-bootstrap";
import NikeIcon from "../../assets/icons/nike-icon.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import AirbnbIcon from "../../assets/icons/airbnb-icon.svg";
import TnwIcon from "../../assets/icons/tnw-icon.svg";
import "./Clients.css";

const Clients = () => {
  return (
    <section className="bg-white clients">
      <Container>
        <Row className="text-center ">
          <Col md={12} className="">
            <h3 className="text-body-tertiary fw-bold">clients we worked it</h3>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <img src={TnwIcon} alt="Icon of tnw" className="img-fluid" />
              <img
                src={GoogleIcon}
                alt="Icon of google"
                className="img-fluid"
              />
              <img src={NikeIcon} alt="Icon of nike" className="img-fluid" />
              <img
                src={AirbnbIcon}
                alt="Icon of airbnb"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
