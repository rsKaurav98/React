import React from 'react'

import logo from "../assets/images/brand_logo.png"
import { Menu } from './Menu'

const Navigation = () => {
  return (
    <nav>
    <div className="logo">
      <img src={logo} alt="NikeLogo" />
    </div>
   <Menu/>
    <button>Login</button>
    </nav>
  )
}

export default Navigation