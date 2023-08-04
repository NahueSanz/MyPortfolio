import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ParticlesBackground from "./Components/Particles-background/particles-background";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
