import "./Hero.css";
import React from 'react';
const Hero = () => {

    return (
        <div className = "hero">

            <div className = "intro">
                <h1>ROSIE KHURMI.</h1>
                <p>Computer Science Student</p>
                <button href  download>Resume</button>
            </div>

            <div className = "social">
                <a className = "icon" href = "https://github.com/" target = "_blank">
                    <i class="uil uil-github"></i>
                </a>
                <a className = "icon" href = "https://www.linkedin.com/in/rosie-khurmi-62b20a210/" target = "_blank">
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>

        </div>
    )
}

export default Hero



