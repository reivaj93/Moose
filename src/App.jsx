import { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moosetry from './pages/Moose';
import Carta from './pages/Carta';
import Referencias from './pages/Referencias'
import Ubicanos from './pages/Ubicanos'
import Blog from './pages/Blog'
import QuienesSomos from './pages/QuienesSomos'
import Title from './assets/title'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
         
       <BrowserRouter>
      <div className="GridRouter">
        <Link to="/" id="Router1">
          <img src="../public/images/Moose vec1.png" alt="Moose"width={"200px "} />
        </Link>
        <Link to="/QuienesSomos" id="Router2">Conocenos</Link>
        <Link to="/Carta" id="Router3">MENÚ</Link>
        <Link to="/Ubicanos" id="Router4">UBICANOS</Link>
      </div>
      <Routes>
        <Route path="/" element={<Moosetry />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Carta" element={<Carta />} />
        <Route path="/Ubicanos" element={<Ubicanos />} />
      </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default App
