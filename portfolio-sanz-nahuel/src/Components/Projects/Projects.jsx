import { Container, Row, Col } from "react-bootstrap";
import Particles from "../Particles-background/particles-background";
import ProjectCard from "./ProjectCard";
import mapaMundi from "../../assets/testmapamundi.jpg";
import alohar from "../../assets/alohar.jpg";
import todo from "../../assets/todo.jpg";

function projects() {
  return (
    <Container>
      <div className="particle-container">
        <Particles />
      </div>
      <Container className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={mapaMundi}
              title="Pi Countries"
              description="Individual project using a countries API to extract and display information.
               As well as creating activities for said countries and more."
              ghLink="https://github.com/NahueSanz/Pi-Henry-Paises/tree/master/PI-paises/cr-pi-countries-main"
            ></ProjectCard>
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={alohar}
              title="Alohar"
              description="It's airbnb but for latin america only, as a group we tried to copy their page and got a nice result.
               It uses firebase as a database for the users and railwail for the information about houses."
              ghLink="https://github.com/NahueSanz/pf-grupo12"
              demoLink="https://pf-grupo12-xi.vercel.app/#/"
            ></ProjectCard>
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="ToDo List"
              description="I did a ToDo list for myself and it ended up being quite usefull :D."
              ghLink="https://github.com/NahueSanz/SanzToDoFront"
              demoLink="https://sanz-to-do-front.vercel.app/"
            ></ProjectCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default projects;
