import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingBar from './assets/GreetingBar'
import Nav from './assets/nav'
import Title from './assets/title'
import TextBox from './assets/TextBox'
import Carousel from './assets/Carousel'
import LandingMenu from './assets/LandingMenu'
import SocialNet from './assets/SocialNet'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingMenu/>
      <Carousel/>
      <TextBox/>
      <SocialNet/>

      

    </>
  )
}

export default App
