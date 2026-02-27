import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className='app-main-container'>
      <routes>
        <Route path='/'/>
      </routes>
    </div>
  )
}

export default App