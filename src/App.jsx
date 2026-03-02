import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import './style.css'
import Navbar from './component/Navbar'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='app-main-container'>
        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* The 404 Catch-All */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App