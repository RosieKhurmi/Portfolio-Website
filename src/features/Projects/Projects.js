import React from 'react';
import './Projects.css';
import ItemList from './Items/ItemList';

const Projects = () => {
    return (
        <div id="projects" className='projects'>
            <h1>Projects</h1>
            <ItemList />
        </div>
    )
}

export default Projects;