import React from 'react'
import './Description.css'
import Headshot from '../../../assets/Headshot.jpeg'

const Description = () => {

  const BAKING_URL = 'https://www.instagram.com/bakinbytes/';
  const points = [
    "As a computer science student, I have built a strong foundation in theoretical and practical concepts, gaining hands-on experience with different technologies while exploring design principles through various endeavors.",
    "I have worked as a software developer and contributed to research, volunteering, and open-source projects. I am eager to explore new technologies, take on challenges and continue growing as a designer and a developer.",
    <>
      Beyond coding, I enjoy reading, fashion, being active, design and running a baking account on Instagram <> </>
      <a 
        href={BAKING_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        @bakinbytes
      </a>.
    </>,
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
