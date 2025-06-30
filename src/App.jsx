import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import Hero from './Component/Hero/Hero.jsx'
import About from './Component/About-me/About.jsx'
import Title from './Component/Title/Title.jsx'
import Skill from './Component/Skill/Skill.jsx'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
       <Title title="ABOUT" subTitle="Turning Ideas Into Impactful Web Experiences"/>
      <About/>
      <Title title="SKILLS" subTitle="What I Do"/>
      <Skill/>
      </div>
  )
}

export default App
