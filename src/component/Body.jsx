import React from 'react'
import './Body.css'
import programmer from '../assets/programmer_cartoon.png'
import Navbar from './Navbar'

function Body() {
  return (
    <div>
   
        <div className="first-container">
            
            
            {/* ///////////////////////////////// */}

            <div class="animated-text">
              I'm  <span></span>
            </div>

            {/* ///////////////////////////////// */}
            
      
          <div className='img1 '>
            <img src={programmer} alt="" />

          </div>

        </div>


      </div>

  )
}

export default Body