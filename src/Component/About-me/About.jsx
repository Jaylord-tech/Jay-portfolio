import React from "react";
import "./About.css";
import myPic from "../../assets/my-image.jpeg";
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
          <p className="about-intro">
            I’m a frontend web developer focused on building modern, scalable,
            and user-friendly web interfaces using current technologies.
          </p>

          <p className="about-summary">
            I specialize in translating designs into clean, responsive, and
            high-performance web applications. My approach combines attention
            to detail, clean code practices, and a strong understanding of user
            experience.
          </p>

          <p className="about-summary">
            I enjoy collaborating on meaningful projects, solving real-world
            problems, and continuously improving my skills to stay aligned with
            modern web standards and best practices.
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
