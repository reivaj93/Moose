import { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moosetry from './pages/Moose';
import Carta from './pages/Carta';
import Ubicanos from './pages/Ubicanos';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

          <BrowserRouter>
          <nav>
          <Link to="/">Moose</Link> |
          <Link to="/Carta">Acerca de</Link> |
          <Link to="/Ubicanos">Contacto</Link>
          </nav>
          <Routes>
          <Route path="/" element={<Moosetry />} />
          <Route path="/Carta" element={<Carta/>} />
          <Route path="/Ubicanos" element={<Ubicanos />} />
          </Routes>
        </BrowserRouter>

  
      

      

    </>
  )
}

export default App
