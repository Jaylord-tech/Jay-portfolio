import React from 'react'
import "./About.css"
import myPic from '../../assets/my-image.jpg'
import { BsChevronRight } from 'react-icons/bs';
import FadeSlide from "../Fade-slide/fade-slide";


const About = () => {
  return (
    <div className='about'>
        <div className="about-img">
         <FadeSlide direction='fade-left' delay={400}>
        <img src={myPic} alt="my profile pic" />
        </FadeSlide>
        <FadeSlide direction='fade-left' delay={500}>
        <button className='btn2'>More About Me</button>
        </FadeSlide>
      </div>

      <div className="about-content">
            <FadeSlide direction='fade-up' delay={400}>
             <h2>
              UI/UX Designer & Web Developer.
            </h2>
            </FadeSlide>
             <FadeSlide direction='fade-up' delay={500}>
            <p>Passionate frontend developer who loves building fast, user-friendly interfaces with clean, responsive design.</p>
            </FadeSlide>
            <div className="personal-details">
                <ul className='section-a'>
                    <FadeSlide direction='fade-up' delay={500}>
                    <li><BsChevronRight className='bullet'/><strong>Birthday:</strong>  16 July 1998</li>
                    <li><BsChevronRight className='bullet'/><strong>Linkedin:</strong>  www.linkedin.com/in/feranmi-oyediran</li>
                    <li><BsChevronRight className='bullet'/><strong>Phone:</strong>  +234 810 950 0453</li>
                    <li><BsChevronRight className='bullet'/><strong>City:</strong>  Ibadan, Nigeria</li>
                    </FadeSlide>
                </ul>
                <ul className='section-b'>
                    <FadeSlide direction='fade-up' delay={500}>
                     <li><BsChevronRight className='bullet'/><strong>Age:</strong>  27</li>
                     <li><BsChevronRight className='bullet'/><strong>Degree:</strong>  Bachelor of Arts</li>
                     <li><BsChevronRight className='bullet'/><strong>Email:</strong>  oyediran904@gmail.com</li>
                     <li><BsChevronRight className='bullet'/><strong>Freelance:</strong>  Available</li>
                     </FadeSlide>
                </ul>
            </div>
            <FadeSlide direction='fade-up' delay={500}>
            <p>Every pixel I push is backed by logic, creativity, and attention to user experience. I aim to create interfaces that feel as good as they look. Every component I build is tested for clarity, speed, and purpose.</p>
            </FadeSlide>
        </div>

    </div>
  )
}

export default About
