import "./Hero.css";
import React from 'react';
import RResume from "../../assets/Resume.pdf"

const Hero = () => {

    const BAKING_URL = 'https://www.instagram.com/bakinbytes/';

    return (
        <div className = "hero">

            <div className = "intro">
                <h1>ROSIE KHURMI.</h1>
                <div className="typewriter">
                    <p>Computer Science Student @Ontario Tech</p>
                </div>
                
                <div className="about-content">
                    <p>Hey everyone, I'm a software engineer focused on creating everything from full-stack applications and AI to games and simulations. My goal is to master complex system architecture and develop the skills to build robust software from start to finish.</p>
                    <p>Beyond coding, I enjoy watching movies and TV shows, reading, fashion, fitness, art and design and documenting my baking journey on Instagram{' '}
                        <a 
                            href={BAKING_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'underline' }}
                        >
                            @bakinbytes
                        </a>
                    </p>
                </div>

                <a href = {RResume} target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a>
            </div>

            <div className = "social">
                <a className = "icon" href = "https://github.com/RosieKhurmi" target = "_blank" rel="noreferrer">
                    <i class="uil uil-github"></i>
                </a>
                <a className = "icon" href = "https://www.linkedin.com/in/rosie-khurmi-62b20a210/" target = "_blank" rel="noreferrer">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a className="icon" href="mailto:khurmirosie@gmail.com" rel="noreferrer">
                     <i class="uil uil-envelope"></i>
                </a>
            </div>

        </div>
    )
}

export default Hero



