import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import img from "../../assets/Foto.portfolio.jpeg";

function home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <span className="purple"> Nahuel</span>
            </h1>

            <div style={{ marginTop: "10em" }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow me to<span className="purple"> introduce </span> myself
            </h1>

            <p className="home-about-body">
              My name is
              <i>
                <b className="purple"> Nahuel Sanz </b>
              </i>
              and I am a FullStack developer. I have deep expertise in
              <i>
                <b className="purple"> React and Javascript </b>
              </i>
              along with experience in
              <i>
                <b className="purple"> CSS and SQL</b>
              </i>
              .
              <br />
              <br />
              Currently, I am actively seeking a
              <i>
                <b className="purple"> professional opportunity </b>
              </i>
              to put into practice the knowledge I have been reinforcing and
              acquiring over the past few months.
              <i>
                <b className="purple"> Programming is my passion </b>
              </i>
              and I approach problem-solving pragmatically, always seeking
              effective solutions.
              <br />
              <br />
              Every challenge that comes my way is seen as an
              <i>
                <b className="purple"> opportunity </b>
              </i>
              to learn and grow. I believe in continuous improvement and embrace
              each
              <i>
                <b className="purple"> experience </b>
              </i>
              as a chance to enhance my
              <i>
                <b className="purple"> skills</b>
              </i>
              .
            </p>
          </Col>
          <Col md={5} className="imgContainer">
            <img src={img} alt="imgPerfil" className="imgPerfil"></img>
          </Col>
        </Row>
        <div style={{ marginTop: "5em" }}></div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NahueSanz"
                  target="_blank"
                  rel="noreferrer"
                  className="purple  home-social-icons"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/nahu.sanz.5/"
                  target="_blank"
                  rel="noreferrer"
                  className="purple  home-social-icons"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nahuel-sanz-8a61b2171/"
                  target="_blank"
                  rel="noreferrer"
                  className="purple  home-social-icons"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nahue.sanz/?hl=es-la"
                  target="_blank"
                  rel="noreferrer"
                  className="purple home-social-icons"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default home;
