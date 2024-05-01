import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ParticlesBackground from "./Components/Particles-background/particles-background";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
