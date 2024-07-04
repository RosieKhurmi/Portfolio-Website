import React from "react";
import "./index.css";
import {Route, Routes} from "react-router-dom";

import Home from "./routes/Home";
import Projects from "./routes/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Projects" element = {<Projects/>} />
      </Routes>
    </>
  );
}

export default App;

