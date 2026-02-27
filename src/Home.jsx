import React from 'react'

function Home() {
  return (
    <div className='home-main-container'>
        <div className="home-first-container">
          <div className="home-first-container-img">
            {/* image in round shape */}
          </div>
          <div className="home-first-container-name">
            <h2>Sidhiqul Aflah</h2>
            <h3>Web Developer</h3>
          </div>
        </div>


        <div className="home-second-container">
          <div className="home-second-container-about">
            <div className="home-second-container-about-heading">
              <h1>Heyy!</h1>
              <h3>I'm a MERN Developer</h3>
            </div>
            <div className="home-second-container-about-btn">
              <button>Resume</button>
              <button>Projects</button>
            </div>
            <div className="home-second-container-about-para">
              <h4>Hi i'm a full stack mern developer.currently studying at zoople technologies</h4>
            </div>
          </div>
        </div>


        <div className="home-third-container"></div>


      

    </div>
  )
}

export default Home