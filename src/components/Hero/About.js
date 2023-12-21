import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className = 'about'> 
      
      <div className = 'line'></div>

      <h1>About Me</h1>

      <div className = 'content'>

        <div className='des'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Morbi nec erat id massa laoreet sollicitudin in 
          at metus. Nunc pellentesque ultricies est rutrum 
          dignissim. Proin neque tellus, congue in mi in, 
          semper pharetra mauris. Cras luctus eros sit amet 
          mollis aliquam. Ut accumsan urna lacus, id iaculis 
          tellus interdum nec. Quisque tempor erat leo, a 
          consectetur ex ornare eget. Curabitur scelerisque lacinia odio at 
          aliquam. In ac enim non dui feugiat porttitor at mollis orci. Fusce 
          pellentesque placerat sollicitudin.</p>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Morbi nec erat id massa laoreet sollicitudin in 
          at metus. Nunc pellentesque ultricies est rutrum 
          dignissim. Proin neque tellus, congue in mi in, 
          semper pharetra mauris. Cras luctus eros sit amet 
          mollis aliquam. Ut accumsan urna lacus, id iaculis 
          tellus interdum nec. Quisque tempor erat leo, a 
          consectetur ex ornare eget. Curabitur scelerisque lacinia odio at 
          aliquam. In ac enim non dui feugiat porttitor at mollis orci. Fusce 
          pellentesque placerat sollicitudin.</p>
        </div>

        <div className = "skills">

          <h2>Skills</h2>
          <ul>
            <li>Item 1 - Basic</li>
            <li>Item 2 - Basic</li>
            <li>Item 3 - Basic</li>
            <li>Item 4 - Basic</li>
            <li>Item 5 - Basic</li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default About
