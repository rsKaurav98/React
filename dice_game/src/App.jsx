import React, { useState } from 'react'
import LandingPage from "./components/LandingPage"
import './components/landing.css'
import GamePlay from './components/GamePlay';
import "./App.css"


function App() {

  const [isGameStarted , setIsGameStarted] = useState(true);

  const togglePlay = ()=>{
    setIsGameStarted((prev)=> !prev);
  };

  return (
    <main> 
      <div className='top_section'>
      {isGameStarted ? <GamePlay/> : <LandingPage toggle = {togglePlay}/>}
      </div>
    </main>
  )
}

export default App;

