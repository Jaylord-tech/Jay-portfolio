import React, { useState } from "react";
import "./Portfolio.css";
import { FiExternalLink, FiZoomIn, FiX } from "react-icons/fi";

// IMPORT PNG IMAGES
import img1 from "/src/assets/portfolio-1.png";
import img2 from "/src/assets/portfolio-2.png";
import img3 from "/src/assets/portfolio-3.png";
import img4 from "/src/assets/portfolio-4.png";
import img5 from "/src/assets/portfolio-5.png";
import img6 from "/src/assets/portfolio-6.png";

const portfolioData = [
  { 
    img: img1, 
    link: "https://www.tanglcapitalpartners.com/",
    desc: "Built a high-end, institutional-grade investment platform using React. Implemented responsive UI, interactive dashboards, secure data-room components, and performance optimization with lazy loading and code splitting."
  },
  { 
    img: img2, 
    link: "https://www.lji.io/",
    desc: "Developed a sleek modern landing and app UI with modular React components. Added micro-interactions, responsive layouts, and clean visual structure to enhance user flow and startup branding."
  },
  { 
    img: img3, 
    link: "https://www.edusity.com/",
    desc: "Built a complete LMS frontend with React including dashboards, course pages, quizzes, role switching, uploads, and certificate UI. Optimized performance and ensured full accessibility and responsiveness."
  },
  { 
    img: img4, 
    link: "https://paxful.com/",
    desc: "Recreated key user flows for a peer-to-peer crypto marketplace using React. Added real-time offer updates, secure form validation, mobile-first UI, overlays, transitions, and UX improvements for trading interactions."
  },
  { 
    img: img5, 
    link: "https://ricebyrice.com/",
    desc: "Built a clean, brand-focused website with React featuring scroll animations, product sections, and optimized image loading. Ensured consistent visual identity with reusable components and SEO-friendly structure."
  },
  { 
    img: img6, 
    link: "https://www.outsydfashion.com/",
    desc: "Developed a high-end fashion e-commerce platform emphasizing strong brand presence and seamless user experience. Implemented responsive, mobile-first interfaces, interactive product showcases, and intuitive navigation. Optimized performance using lazy loading and code splitting to deliver fast, smooth browsing across all devices."
  }
];

function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="portfolio-section">
      <div className="portfolio-grid">
        {portfolioData.map((item, i) => (
          <div className="portfolio-item" key={i}>
            <img src={item.img} alt={`portfolio-${i}`} />

            <div className="portfolio-overlay">
              {/* LEFT ICON — ZOOM / DESCRIPTION */}
              <FiZoomIn 
                className="portfolio-icon left"
                onClick={() => setSelected(item)}
              />

              {/* RIGHT ICON — EXTERNAL LINK */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="portfolio-icon right" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div 
          className="portfolio-modal"
          onClick={() => setSelected(null)}   // CLICK OUTSIDE CLOSES
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}   // PREVENT CLOSE WHEN CLICKING INSIDE
          >
            <FiX className="modal-close" onClick={() => setSelected(null)} />

            <img src={selected.img} alt="preview" className="modal-img" />

            <p className="modal-desc">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
