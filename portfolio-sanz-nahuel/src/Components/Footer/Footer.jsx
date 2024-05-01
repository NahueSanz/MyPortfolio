import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nahuel Sanz</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/NahueSanz"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/nahu.sanz.5/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nahuel-sanz-8a61b2171/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nahue.sanz/?hl=es-la"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
