import { Col, Container, Row } from "react-bootstrap";
import "./Technologies.css";
import HtmlIcon from "../../assets/icons/html-icon.svg";
import CssIcon from "../../assets/icons/css-icon.svg";
import SassIcon from "../../assets/icons/sass-icon.svg";
import NodeJsIcon from "../../assets/icons/nodejs-icon.svg";
import AngularIcon from "../../assets/icons/angular-icon.svg";
import PythonIcon from "../../assets/icons/python-icon.svg";

const Technologies = () => {
  return (
    <section className="text-white technologies" id="technology">
      <Container>
        <Row
          md={12}
          className="justify-content-between align-items-center text-center text-md-start"
        >
          <Col xs={12} md={5} className="mb-5 mb-md-0">
            <h3 className="mb-3 fs-3">We use cutting edge technology</h3>
            <p className="text-white-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              libero eaque harum, tenetur vitae voluptates aspernatur labore
              consectetur maiores dolorum soluta sint, quasi neque magni,
              quisquam error non at tempora!. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae odit tempore quis sint
              officia pariatur dolorem non illo commodi maiores, nam repudiandae
              voluptate vitae ducimus.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <div className="icons">
              <img src={HtmlIcon} alt="Icon of html" />
              <img src={CssIcon} alt="Icon of css" />
              <img src={SassIcon} alt="Icon of sass" />
              <img src={NodeJsIcon} alt="Icon of node js" />
              <img src={AngularIcon} alt="Icon of angular" />
              <img src={PythonIcon} alt="Icon of python" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
