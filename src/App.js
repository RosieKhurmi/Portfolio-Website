import React from "react";
import "./index.css";
import {Route, Routes} from "react-router-dom";

import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Portfolio" element = {<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
