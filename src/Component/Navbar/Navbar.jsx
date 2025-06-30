import React, { useState, useRef, useEffect } from 'react';
import '../Navbar/Navbar.css';
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => setMenuToggle(!menuToggle);

  // 🔁 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuToggle(false);
      }
    };

    if (menuToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuToggle]);

  return (
    <nav className="navbar">
      <div className="logo fade-in">
        <h3>JAYLORD</h3><h2>TECH</h2>
      </div>

      {/* Wrap nav in ref for outside click */}
      <ul
        ref={menuRef}
        className={`navbar-menu ${menuToggle ? '' : 'hide-nav'} fade-in`}
      >
        <li onClick={() => setMenuToggle(false)}>Home</li>
        <li onClick={() => setMenuToggle(false)}>About Me</li>
        <li onClick={() => setMenuToggle(false)}>Skills</li>
        <li onClick={() => setMenuToggle(false)}>Project</li>
        <li onClick={() => setMenuToggle(false)}>Contact</li>
      </ul>

      <div className="social-icon">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
      </div>

      {menuToggle ? (
        <FaTimes onClick={handleToggle} className="toggle close-icon" />
      ) : (
        <FaBars onClick={handleToggle} className="toggle" />
      )}
    </nav>
  );
};

export default Navbar;
