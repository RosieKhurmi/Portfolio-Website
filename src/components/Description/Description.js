import React from 'react'
import './Description.css'
import Headshot from '../../assets/Headshot.jpg'

const Description = () => {
  return (
      <div className = 'content'>

      <div className='des'>
        <h2>Hi, I am Rosie Khurmi!</h2>
        <p>I am a third-year computer science student at Ontario Tech University with a passion for coding, problem-solving, mathematics and self-development. My journey with programming began in high school, and since then, I have been constantly exploring new ways to use technology to solve complex problems.</p>
        <p>I am passionate about software development and building innovative solutions through code. I am continuously exploring various niche fields in computer science, tackling complex algorithms, experimenting with new technologies, and working on projects that create meaningful impact.</p>
        <p>Beyond coding, I enjoy baking, fashion, and design. I am always eager to learn and collaborate — let’s connect!</p>
      </div>

      <div className="headshot">
        <img src={Headshot} alt="Headshot"></img>
      </div>

    </div>
  )
}

export default Description
