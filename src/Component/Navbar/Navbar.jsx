import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
const handburger = () => setMenuToggle(!menuToggle);



  return (
    <nav className='navbar'>
      <div className="logo">
        <h3>JAYLORD</h3><h2>TECH</h2>
      </div>

        <ul className={`navbar-menu ${menuToggle ? '' : 'hide-nav'}`}>
            <li>Home</li>
            <li>About Me</li>
            <li>Project</li>
            <li>Experience</li>
            <li className='btn'>Contact</li>
        </ul>

          {menuToggle ? (
              <FaTimes onClick={handburger} className='toggle close-icon' />
            ) : (
              <FaBars onClick={handburger} className='toggle' />
            )}
    </nav>
  )
}

export default Navbar
