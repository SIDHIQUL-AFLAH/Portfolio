import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Home'
import About from './About'
import Project from './Project'

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* Now appears on every page */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  )
}
export default App