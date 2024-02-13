import React from 'react'
import './landing.css'
import Dicemain from "../assets/images/dicemain.png"


const landingpage = ({toggle}) => {
  return (
    <div >
        <div className='parent'>
         <div className='image'>
            <img src={Dicemain} alt="Dice-Image" />
         </div>
         <div className='text'>
           <h1>DICE GAME</h1>
           <button onClick={toggle}>Play Game</button>
         </div>
        </div>
    </div>
  )
}

export default landingpage