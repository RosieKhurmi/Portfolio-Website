import React from 'react';
import './Projects.css';
import Works from '../../components/Works/Works';
import Involvement from '../../components/Involvement/Involvement';

const Projects = () => {
    return (
        <div id="projects" className='projects'>
            <h1>Portfolio</h1>
            <Works />
            <Involvement />
        </div>
    )
}

export default Projects;