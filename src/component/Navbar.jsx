import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='main-container'>
        <nav>

            <div className="icon">logo</div>

            <ul className="menu">
                <li className="menu-item">
                    <a href="/" className="link">Home</a>
                </li>
                <li className="menu-item">
                    <a href="/About" className="link">About</a>
                </li>
                <li className="menu-item">
                    <a href="/project " className="link">Project</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="link">Resume</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar