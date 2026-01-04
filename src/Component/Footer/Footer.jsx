import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-top">
        <ul className="footer-links">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>License</li>
        </ul>

         <div className="footer-logo ">
        <h2><span>J</span>a y t e c h</h2>
      </div>

        <div className="footer-socials">
          <a  href="https://wa.me/2348109500453?"
              target="blank"
              rel="noopener noreferrer"><FaWhatsapp /></a>

          <a href="https://x.com/oyediranjaydev?s=21"
              target="blank"
              rel="noopener noreferrer"><FaTwitter /></a>

          <a  href="https://www.linkedin.com/in/feranmi-oyediran/"
                  target="_blank"
                  rel="noopener noreferrer"><FaLinkedinIn /></a>

          <a href="https://github.com/Jaylord-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaGithub /></a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} All Rights Reserved | Designed by <span>JAYTECH design</span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
