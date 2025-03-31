import React from 'react'
import './Description.css'
import Headshot from '../../../assets/Headshot.jpg'

const Description = () => {

  const points = [
    "As a computer science student, I have built a strong foundation in theoretical and practical concepts, gaining hands-on experience with various technologies.",
    "I have worked as a software developer and contributed to research, volunteering, and open-source projects. I am eager to explore new technologies, take on challenges and continue growing as a developer.",
    "Beyond coding, I enjoy baking, reading, fashion, and design. I am actively seeking opportunities to refine my skills and grow within the industry.",
  ]

  return (
      <div className = 'content'>

      <div className='des'>
        <h2>Hi, I am Rosie Khurmi.</h2>
          <div>
            {points.map((item, index) => (
              <p key={index}>{item}</p> 
            ))}
        </div>
      </div>

      <div className="headshot">
        <img src={Headshot} alt="Headshot"></img>
      </div>

    </div>
  )
}

export default Description
