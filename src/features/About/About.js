import React from 'react';
import "./About.css";
import Description from '../../components/Description/Description';
import Involvement from '../../components/Involvement/Involvement';

const About = () => {
    return (
        <div id="about" className="about">
            <h1>About Me</h1>
            <Description />
            <Involvement />
        </div>
    )
}

export default About;
