import React from 'react';
import './Skill.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaFigma,
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaBug,
  FaChrome,
  FaSitemap,
  FaServer,
  FaKeyboard,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaTerminal
} from 'react-icons/fa';
import FadeSlide from "../Fade-slide/fade-slide";

const Skill = () => {
  return (
    <section className="skills-section">
         <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Frontend Technologies</h3>
        <ul>
          <li><FaHtml5 /> HTML5</li>
          <li><FaCss3Alt /> CSS3</li>
          <li><FaJsSquare /> JavaScript (ES6+)</li>
          <li><FaLaptopCode /> Responsive Design</li>
          <li><FaKeyboard /> Mobile-First Development</li>
        </ul>
      </div>
     </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li><FaReact /> React.js</li>
          <li><FaVuejs /> Vue.js</li>
          <li><FaNodeJs /> Context API</li>
          <li><FaServer /> Redux</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Tools & Build Systems</h3>
        <ul>
          <li><FaGitAlt /> Git & GitHub</li>
          <li><FaTools /> Vite / Webpack</li>
          <li><FaCogs /> VS Code</li>
          <li><FaChrome /> Chrome DevTools</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>UI/UX & Design</h3>
        <ul>
          <li><FaFigma /> Figma</li>
          <li><FaCode /> Component-Based Design</li>
          <li><FaSitemap /> UX Principles</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>APIs & Integration</h3>
        <ul>
          <li><FaDatabase /> REST APIs / Axios</li>
          <li><FaNodeJs /> Firebase (symbolic)</li>
          <li><FaTerminal /> Data Fetching</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Testing & Debugging</h3>
        <ul>
          <li><FaBug /> Debugging</li>
          <li><FaTools /> Performance Tuning</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Browser Optimization</h3>
        <ul>
          <li><FaChrome /> Chrome DevTools</li>
          <li><FaCode /> SEO Basics</li>
          <li><FaCogs /> Cross-Browser Compatibility</li>
        </ul>
      </div>
      </FadeSlide>

       <FadeSlide direction='fade-up' delay={300}>
      <div className="skills-group">
        <h3>Soft Skills</h3>
        <ul>
          <li><FaUsers /> Team Collaboration</li>
          <li><FaLightbulb /> Problem Solving</li>
          <li><FaComments /> Communication</li>
        </ul>
      </div>
      </FadeSlide>
    </section>
  );
};

export default Skill;
