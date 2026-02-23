import React, { useState, useEffect } from "react";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Experience from "./features/Experience/Experience";
import Projects from "./features/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

