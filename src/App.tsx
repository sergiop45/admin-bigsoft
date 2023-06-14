import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import './style.css'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      
      <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
