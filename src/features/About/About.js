import React from 'react';
import "./About.css";
import Description from './Description/Description';
import Experience from './Experience/Experience';

const About = () => {
    return (
        <div id="about" className="about">
            <h1>About Me</h1>
            <Description />
            <Experience />
        </div>
    )
}

export default About;
