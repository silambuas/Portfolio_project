import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/About";
import Project from "./components/Project";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 7,
                color: "#008000",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Particles
        className="aboutPart"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 7,
                color: "#008000",
              },
            },
          },
        }}
      />
      <AboutMe />
      <Particles
        className="projectpart"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 7,
                color: "#008000",
              },
            },
          },
        }}
      />
      <Project />
      <Contact />
    </>
  );
}

export default App;
