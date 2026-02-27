import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    

    <div className='navbar-main-container'>
      <div className="navbar-first-container">
        <h2>Sidhiqul Aflah <span> / Web Developer</span></h2>
      </div>
      <div className='navbar-second-container'>
        <NavLink to='/' end className={({isActive})=>isActive? "nav-link-active":"nav-link"}>About Me</NavLink>
        <NavLink to='/resume' className={({isActive})=>isActive? "nav-link-active":"nav-link"}>Resume</NavLink>
        <NavLink to='/project' className={({isActive})=>isActive? "nav-link-active":"nav-link"}>Project</NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive? "nav-link-active":"nav-link"}>Contact</NavLink>
       
       </div>
    </div>
    
    
  )
}

export default Navbar