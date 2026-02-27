import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import './style.css'
import Navbar from './component/Navbar'
import Resume from './pages/Resume'

function App() {
  return (
    <div className='app-main-container'>
        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </div>
  )
}

export default App