import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import { FaBars } from 'react-icons/fa'

const [menuToggle,setMenuToggle]=useState(false)
const handburgerMenu =()=>{
  menuToggle? setMenuToggle(true): setMenuToggle(false)
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h3>JAYLORD</h3><h2>TECH</h2>
      </div>
      <div className="navbar-link">
        <ul className={menuToggle?'' :"hide-nav" }>
            <li>Home</li>
            <li>About Me</li>
            <li>Project</li>
            <li>Experience</li>
            <li className='btn'>Contact</li>
        </ul>
        <div className="toggle">
          <FaBars  onClick={handburgerMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
