import React from 'react'
import './Home.css'
import Body from './component/Body'

function Home() {
  return (
    <div className="home-container">
      <main className="hero-section">
        <Body />
        <div className="cta-buttons">
          <a href="/project" className="btn-primary">View My Work</a>
          <a href="/About" className="btn-secondary">Technical Skills</a>
        </div>
      </main>
      
      {/* Optional: Add a subtle background decoration */}
      <div className="background-blur"></div>
    </div>
  )
}

export default Home