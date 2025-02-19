import React from "react";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;

