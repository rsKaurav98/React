import React, { useState } from 'react'
import "./SelectNumber.css"

const SelectNumber = () => {

  const arrNum = [1,2,3,4,5,6];

  const [selectedNumber , setSelectedNumber] = useState('');
 

  return (
    <div >
      <div className='box_parent'>
        {arrNum.map((value , i )=>(
        <div 
        key={i} className={`box ${value === selectedNumber ? 'selected' : ''}`} onClick={()=>setSelectedNumber(value)}>{value}</div>))}   
    </div>
    <p>Selected Number</p>
    </div>
  )
}

export default SelectNumber