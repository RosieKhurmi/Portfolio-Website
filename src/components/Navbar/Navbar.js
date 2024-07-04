import "./Navbar.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
    <div className = {color ? "header header-bg": "header"}>
        <Link to = "/">
            <h1>KHURMI.</h1>
        </Link>
        <ul className = {click ? ("nav_menu active") : ("nav_menu")}>
            <li><Link to = "/"> Home </Link></li>
            {/* <li><Link to = "/Experience"> Experience </Link></li> */}
            <li><Link to = "/Projects"> Projects </Link></li>
        </ul>
        <div className = "hamburger" onClick = {handleClick}>
            {click ? (<FaTimes size = {35} sstyle = {{color: "#eae4d7"}}/>
            ) : (<FaBars size = {35} sstyle = {{color: "#eae4d7"}}/>)} 
        </div>
    </div>
    );
};

export default Navbar
