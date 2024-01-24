import React from 'react'
import './HeroSection.css'
import shoe_img from "../assets/images/shoe_image.png"

const HeroSection = () => {
  return (
    <div className='main '>
        <div className='left'>
          <h1> YOUR FEET DESERVE THE BEST </h1>
          <p >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
            <button className='shop'>Shop Now</button>
            <button className='cat'>Category</button>
        </div>
        <div className='shopping'>
        <p>Also Available at </p>
        </div>

        </div>
        <div className='right'>
         <img src={shoe_img} alt="shoe image" />
        </div>
        
    </div>
  )
}

export default HeroSection