import React from 'react'
import './Description.css'
import Headshot from '../../../assets/Headshot.jpeg'

const Description = () => {

  const BAKING_URL = 'https://www.instagram.com/bakinbytes/';
  const points = [
    "I'm a fa software engineer focused on creating everything from full-stack applications and AI to games and simulations. My goal is to master complex system architecture and develop the skills to build robust software from start to finish.",
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
        <h2>Hey, I'm Rosie!</h2>
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
