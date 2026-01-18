import React from "react";
import "./About.css";
import myPic from "../../assets/my-image.jpg";
import cvFile from "../../assets/Feranmi-Oyediran-CV.pdf";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-left">
          <div className="image-wrapper">
            <div className="image-border-black"></div>
            <div className="image-frame">
              <img src={myPic} alt="Feranmi Oyediran" />
              <div className="experience-box">
                <h2>6</h2>
                <p>
                  Years<br />Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">


          <p className="about-summary">
           I’m a frontend web developer with 
           6 years of experience building modern, scalable,
            and user-friendly web interfaces using current web technologies. 
            I specialize in turning designs into clean, responsive,
             and high-performance websites and applications.
          </p>

          <p className="about-summary">
           Over the years, I’ve built 40+ functional and well-designed websites, 
           collaborating on meaningful projects and solving real-world problems. 
           I focus on clean code, great user experience, and continuously
            improving my skills to stay aligned with modern web standards.
          </p>

          {/* What I Do */}
          <div className="about-services">
            <div className="service-item">
              <h4>Frontend Development</h4>
              <p>Building responsive and interactive user interfaces.</p>
            </div>
            <div className="service-item">
              <h4>UI Implementation</h4>
              <p>Turning designs into pixel-perfect web experiences.</p>
            </div>
            <div className="service-item">
              <h4>Performance & Accessibility</h4>
              <p>Optimizing speed, usability, and accessibility.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a
              href="mailto:oyediranjay@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Jay,"
              className="btn hire"
            >
              Hire Me
            </a>

            <a
              href={cvFile}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn download"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
