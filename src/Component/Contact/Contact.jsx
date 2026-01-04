import React, { useRef } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ru3n6xk",     // your service ID
        "template_nwb0znu",    // your template ID
        formRef.current,
        "XnDNL1ziGxecCNiUl"    // your public key
      )
      .then(
        () => {
          alert("Message sent successfully! 🎉 I will reply shortly.");
          formRef.current.reset(); // clear form
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT — FORM */}
        <div className="contact-form-card">
          <h2>Let’s Work Together</h2>
          <p className="contact-sub">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <form ref={formRef} onSubmit={handleSend}>
            <div className="input-group">
              <input type="text" name="user_name" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" required rows="5"></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="contact-info-card">
          <h3>Contact Information</h3>

          <div className="info-item">
            <FaEnvelope />
            <span>oyediranjay@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+234 810 9500 453</span>
          </div>

          <h4 className="follow-title">Follow Me</h4>
          <div className="social-row">
            <a
              href="https://wa.me/2348109500453?"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a 
              href="https://x.com/oyediranjaydev?s=21"
              target="blank"
              rel="noopener noreferrer"><FaTwitter /></a>

            <a
              href="https://www.linkedin.com/in/feranmi-oyediran/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Jaylord-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
