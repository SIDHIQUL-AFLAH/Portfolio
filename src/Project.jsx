import React from 'react'
import Navbar from './component/Navbar'
import './Project.css'

function Project() {
  return (
    <div>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="container">
            <center><h2>Recent Works</h2></center>
        </div>

        <div className="second-container">

            <div className="cards">
                <center><img src="" alt="image" /></center>
                <center><h5>Portfolio Page</h5></center>
                <p>My personal Portfolio page build with Node.js and  Css</p>
            </div>

            <div className="cards">
                <center><img src="" alt="image" /></center>
                <center><h5>AI chat bot</h5></center>
                <p>I created a personal AI chat bot to arrange my daily routines and schedule my meeting</p>
            </div>

            <div className="cards">
                <center><img src="" alt="image" /></center>
                <center><h5></h5></center>
                <p></p>
            </div>

            <div className="cards">
                <center><img src="" alt="image" /></center>
                <center><h5></h5></center>
                <p></p>
            </div>

        </div>
    </div>
  )
}

export default Project