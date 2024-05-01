import { Container, Row, Col } from "react-bootstrap";
import Particles from "../Particles-background/particles-background";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";

function about() {
  return (
    <section>
      <Container className="about-section">
        <div className="particle-container">
          <Particles />
        </div>
        <Container>
          <Row className="row-more-myself">
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                More about <strong className="purple">myself</strong>
              </h1>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Hello everyone! I'm{" "}
                  <span className="purple">Nahuel Sanz </span>
                  from <span className="purple"> Buenos Aires, Argentina.</span>
                  <br /> I've recently graduated from Henry Academy as a full
                  stack developer.
                  <br />
                  Currently, I am actively seeking opportunities as a software
                  developer.
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li className="about-activity">Playing Games</li>
                  <li className="about-activity">Going to the gym</li>
                  <li className="about-activity">Travelling</li>
                </ul>

                <p style={{ color: "rgb(155 126 172)" }}>
                  "Strive to build things that make a difference!"{" "}
                </p>
                <footer className="blockquote-footer">Nahuel</footer>
              </blockquote>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <TechStack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <ToolStack />
        </Container>
      </Container>
    </section>
  );
}

export default about;
