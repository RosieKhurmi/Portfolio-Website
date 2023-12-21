import React from 'react';
import "./Works.css";
import {useState, useEffect} from 'react'; 
import {projectsData, projectsNav} from "./Data";
import Item from "./Item";

const Works = () => {
  const [item, setItem] = useState({name: 'All'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState (0);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.type === item.name;
      }); 
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent}); 
    setActive(index); 
  }

  return (
    <div className = "portfolio">

        <h1>Portfolio</h1>

      <div className = "works">

        {projectsNav.map((item, index) => {
            return (
              <span onClick = {(e) => {
                handleClick(e, index); 
              }} className = {`${active === index ? 'active_cat' : ''} cat `}  key = {index}>
                {item.name}
              </span>
            )
        })}

      </div>

      <div className = "projects">

        {projects.map((item) => {
            return <Item item = {item} key = {item.id}/>
        })}

      </div>
      
    </div>
  )
}

export default Works
