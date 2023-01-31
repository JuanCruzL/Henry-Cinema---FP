import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Details from './Components/Details/Details.jsx'


function App() {

  return (
    <div className="App">
      <div id="Switch" className="light-mode">
      <Details></Details>

      </div>
    </div>
  )
}

export default App
