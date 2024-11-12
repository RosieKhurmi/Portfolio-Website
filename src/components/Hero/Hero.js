import "./Hero.css";
import React from 'react';
import RResume from "../../assets/Resume.pdf"

const Hero = () => {

    return (
        <div className = "hero">

            <div className = "intro">
                <h1>ROSIE KHURMI.</h1>
                <div className="typewriter">
                    <p>Computer Science Student</p>
                </div>
                <a href = {RResume} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

            <div className = "social">
                <a className = "icon" href = "https://github.com/" target = "_blank" rel="noreferrer">
                    <i class="uil uil-github"></i>
                </a>
                <a className = "icon" href = "https://www.linkedin.com/in/rosie-khurmi-62b20a210/" target = "_blank" rel="noreferrer">
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>

        </div>
    )
}

export default Hero



