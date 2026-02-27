import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home'
import './style.css'

function App() {
  return (
    <div className='app-main-container'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App