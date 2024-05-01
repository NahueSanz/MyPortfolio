import { Row, Col } from "react-bootstrap";
import { DiVisualstudio, DiEclipse } from "react-icons/di";
import { SiSlack, SiTrello, SiPostman } from "react-icons/si";

function techStack() {
  return (
    <Row className="techRow">
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default techStack;
