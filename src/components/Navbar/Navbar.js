import "./Navbar.css";
import React, { useState, useEffect} from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const [activeNav, setActiveNav] = useState("");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(id);
      window.history.replaceState(null, null, ' ');
    }
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <button onClick={() => scrollToSection("home")} className="nav_logo">Khurmi.</button>
      <ul className={click ? "nav_menu active" : "nav_menu"}>
        <li>
          <button onClick={() => scrollToSection("home")} className={activeNav === "home" ? "active" : ""}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")} className={activeNav === "about" ? "active" : ""}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")} className={activeNav === "projects" ? "active" : ""}>Projects</button>
        </li>
      </ul>
      <div className="nav-controls">
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode} 
          disabled={click}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun size={22}/> : <FaMoon size={22}/>}
        </button>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={35}/> : <FaBars size={35}/>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
