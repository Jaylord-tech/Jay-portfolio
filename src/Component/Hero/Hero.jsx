import React from 'react'
import '../Hero/Hero.css'
import { FaArrowRight, FaReact } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import whatsapp from '../../assets/whatsapp.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-container">
        <div className='hero-content'>
            <p className='my-name'>JOHN OYEDIRAN</p>
      <h1 className='heading fade-in'>Hi, I’m JOHN.</h1>
        <h1 className='subheading'>
      {' '}
      <span style={{ color: '#00BFFF', fontWeight: 'bold' }}>
        <Typewriter
          words={['WEB DEVELOPER', 'FRONTEND ENGINEER', 'REACT DEVELOPER']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>      
      <p>I'm a frontend developer passionate about creating visually appealing and responsive web experiences.</p>
       <p>I focus on crafting clean, user-friendly interfaces that not only look great but also work seamlessly across all devices.</p>
       <p>With tools like HTML, CSS, JavaScript, and React, I bring ideas to life through interactive and engaging websites.</p>
      </div>
      <div className='in-touch'>
      <button className='btn'>GET IN TOUCH <FaArrowRight/> </button>
      <div className="social">
        <div className='social-container'>
        <a href="https://wa.me/2348109500453?text=Frontend%20dev%20here.%20Currently%20fighting%20with%20CSS%20and%20(barely).%20Be%20right%20with%20you!"
           target='blank'
           rel='noopener noreferrer'>
            <img src={whatsapp}/></a>
            <p className='social-name'>whatsapp</p>
          </div>
          
          <div className="social-container">
            <a href="https://www.linkedin.com/in/feranmi-oyediran/"
               target='blank'
               rel='noopener noreferrer' >
                <img src={linkedin}/></a>
                <p className='social-name'>Linkedin</p>
              </div>

           <div className="social-container">
            <a href="https://github.com/Jaylord-tech"
                  target='blank'
                  rel='noopener noreferrer'>
                  <img src={github}
                  style={{background:"#FFF",borderRadius:"40px"}}/></a>
                  <p className='social-name'>Github</p>
               </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
