import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className = 'about'> 
      
      <div className = 'line'></div>

      <h1>About Me</h1>

      <div className = 'content'>

        <div className='des'>
          <p>Hi! I am Rosie Khurmi, a third-year computer science 
            student at Ontario Tech University with a 
            passion for coding, problem-solving, mathematics and learning. 
            I have been coding since high school, constantly exploring new ways 
            to use technology to solve complex problems.</p>
          <br></br>
          <p>What excites me most is the thrill of solving challenging problems 
            and finding effective solutions, especially when
            they requre a technical and creative approach. I am passionate 
            about the power of learning and teaching, either to grasp new 
            concepts or share my current knowledge. I am constantly driven 
            by a curiosity for lifelong growth and learning.</p>
        </div>

        <div className = "skills">
          <span role="img" aria-label="waving hand">👋</span>
          {/* <h2>Skills</h2>
          <ul>
            <li>Item 1 - Basic</li>
            <li>Item 2 - Basic</li>
            <li>Item 3 - Basic</li>
            <li>Item 4 - Basic</li>
            <li>Item 5 - Basic</li>
          </ul> */}

        </div>

      </div>

    </div>
  )
}

export default About
