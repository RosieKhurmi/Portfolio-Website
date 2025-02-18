import React from "react";
import "./index.css";

import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>
    </>
  );
}

export default App;

