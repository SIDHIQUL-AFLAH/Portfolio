import React from 'react'
import Navbar from './component/Navbar'
import './About.css'
import cartoon from './assets/about-cartoon.png'

function About() {
  return (
    <div className="about-page">
        <Navbar/>
        <div className="about-body">
            <div className="text-content">
                <h1>Professional Profile</h1>
                <p className='para-about'>
                    I am <span>Sidhiqul Aflah</span>, a dedicated <span>MERN Stack Developer</span> based in Kerala, India. 
                    With a Bachelor of Engineering in Computer Science from DS Engineering College, I combine 
                    technical engineering principles with modern web technologies to build scalable applications.
                </p>
                <p className='para-about'>
                    Currently refining my expertise at Zoople, my work focuses on creating seamless user 
                    experiences and robust backend architectures. My long-term goal is to bridge the gap between 
                    engineering and business as a <span>Product Manager</span>, leveraging my technical foundation 
                    to lead impactful digital products.
                </p>
            </div>
            <img className='cartoon-img' src={cartoon} alt="Professional Avatar" />
        </div>

        <div className="skills-section">
          <h2>Technical Stack</h2>
          
          <div className="skills-category">
              <h3>Frontend</h3>
              <div className="btn-about-container">
                  <button className='btn-about'>React.js</button>
                  <button className='btn-about'>JavaScript (ES6+)</button>
                  <button className='btn-about'>HTML5/CSS3</button>
                  <button className='btn-about'>Tailwind CSS</button>
              </div>
          </div>

          <div className="skills-category">
              <h3>Backend & Database</h3>
              <div className="btn-about-container">
                  <button className='btn-about'>Node.js</button>
                  <button className='btn-about'>Express.js</button>
                  <button className='btn-about'>MongoDB</button>
                  <button className='btn-about'>RESTful APIs</button>
              </div>
          </div>

          <div className="skills-category">
              <h3>Tools & Architecture</h3>
              <div className="btn-about-container">
                  <button className='btn-about'>Git/GitHub</button>
                  <button className='btn-about'>Mongoose ODM</button>
                  <button className='btn-about'>Vite</button>
                  <button className='btn-about'>Postman</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About