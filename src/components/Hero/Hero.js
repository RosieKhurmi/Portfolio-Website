import "./Hero.css";
import React from 'react';

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
                    <p>I am an Honours Computer Science student at Ontario Tech, specializing in Data Science with a minor in Math. My interests lie in software and AI development, and I enjoy exploring new tech and connecting with people to see how those tools can meet real-world needs. I am also passionate about STEM advocacy and making technical knowledge accessible to everyone.</p>
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

                <a href="#projects" className="resume-btn">Projects</a>
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



