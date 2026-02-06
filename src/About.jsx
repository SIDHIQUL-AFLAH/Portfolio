import React from 'react'
import Navbar from './component/Navbar'
import './About.css'
import cartoon from './assets/about-cartoon.png'

function About() {
  return (
    <div>
        <Navbar/>
        <div className="body">
            <p className='para-about'>
                Hi everyone! I’m <span>Sidhiqul Aflah</span> from Kerala, India.
                I’m currently studying <span>Web Development</span> at Zoople.
                I hold an Bachelor of Engineering (B.E) in Computer Science Engineering from DS Engineering College,Perambalur.
            </p>
            <img className='cartoon-img' src={cartoon} alt="" />
        </div>

        <div className="skills">
          <h2>Skills</h2>

          <div className="btn-about-container">
              <button className='btn-about'>HTML</button>
              <button className='btn-about'>CSS</button>
              <button className='btn-about'>JS</button>
              <button className='btn-about'>React</button>
          </div>
          <div className="empty-space">
            
          </div>
        </div>

    </div>
  )
}

export default About