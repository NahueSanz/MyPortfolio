import { Viewer, Worker } from "@react-pdf-viewer/core";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particles from "../Particles-background/particles-background";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../assets/Resume_NahuelSanz.pdf";

function resume() {
  return (
    <Container className="resume-container">
      <div className="particle-container">
        <Particles />
      </div>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          href={pdf}
          target="_blank"
          className="button"
        >
          &nbsp;Download CV
        </Button>
      </Row>
      <Row className="resume">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdf} />
        </Worker>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          href={pdf}
          target="_blank"
          className="button"
        >
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default resume;
