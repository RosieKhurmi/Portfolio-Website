import React from 'react'
import './Description.css'
import Headshot from '../../../assets/Headshot.jpeg'

const Description = () => {

  const BAKING_URL = 'https://www.instagram.com/bakinbytes/';
  const points = [
    "I am a software engineer building AI, Simulation and software solutions. I am focused on mastering the architecture of complex systems to develop the transferable skills necessary for building robust systems.",
    <>
      Beyond coding, I enjoy watching movies and TV shows, reading, fashion, fitness, art and design and documenting my baking journey on Instagram <> </>
      <a 
        href={BAKING_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        @bakinbytes
      </a>
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
