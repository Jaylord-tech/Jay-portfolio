import React, { useRef, useEffect, useState } from "react";
import "./Testimonial.css";
import test1 from "/src/assets/test-pix.jpg";
import test2 from "/src/assets/profilePic-5.jpg"
import test3 from "/src/assets/profilePic-3.jpg"
import test4 from "/src/assets/profilePic-4.jpg"

const testimonials = [
  {
    img: test1,
    name: "Michael Adeshina",
    feedback:
      "Amazing work! My leads doubled after the website upgrade. Clean, fast, and beautifully designed.",
  },
  {
    img:test2,
    name: "Akintade Vincent",
    feedback:
      "Your attention to detail is insane. You turned my designs into a flawless, responsive UI.",
  },
  {
    img:test4,
    name: "Obatomi Bunmi",
    feedback:
      "You made my app feel premium. Smooth UI, perfect animations, and delivered ahead of time.",
  },
  {
    img: test3,
    name:  "Sarahjane",
    feedback:
      "You built more than a website, you built my brand. Clean, bold, and incredibly fast.",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    name: "David Kim",
    feedback:
      "As a developer, I'm picky, but your work impressed me. Clean code and perfect performance.",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const sliderRef = useRef(null);

  // Duplicate testimonials for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Calculate card width and visible cards based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        let cards = 3;
        let gap = 30;

        if (window.innerWidth >= 1200) {
          cards = 3;
          gap = 30;
        } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
          cards = 2;
          gap = window.innerWidth >= 769 ? 24 : 20;
        } else {
          cards = 1;
          gap = window.innerWidth >= 481 ? 18 : 16;
        }

        setVisibleCards(cards);
        
        // Calculate card width: (container width - total gaps) / number of cards
        const totalGaps = (cards - 1) * gap;
        const width = (sliderWidth - totalGaps) / cards;
        setCardWidth(width);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Auto-scroll continuously from right to left
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset position when reaching end (infinite loop effect)
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        });
      }, 500);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        });
      }, 500);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Calculate transform in pixels (like Owl Carousel)
  const getTransformValue = () => {
    if (cardWidth === 0) return 0;
    
    let gap = 30;
    if (window.innerWidth >= 769 && window.innerWidth < 1200) {
      gap = 24;
    } else if (window.innerWidth >= 600 && window.innerWidth < 769) {
      gap = 20;
    } else if (window.innerWidth >= 481 && window.innerWidth < 600) {
      gap = 18;
    } else if (window.innerWidth < 481) {
      gap = 16;
    }
    
    // Calculate pixel offset: (cardWidth + gap) * currentIndex
    return (cardWidth + gap) * currentIndex;
  };

  return (
    <section className="testimonial-section">
      <header className="testimonial-header">
        <h2 className="section-title">Our Customer Feedback</h2>
        <p className="section-subtitle">
          Feedback that reflects the quality and care behind every project.
        </p>
      </header>

      <div className="slider-wrapper">
        <div className="testimonial-slider" ref={sliderRef}>
          <div 
            ref={trackRef}
            className="testimonial-track"
            style={{
              transform: `translate3d(-${getTransformValue()}px, 0px, 0px)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <article 
                className="testimonial-card" 
                key={index}
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : 'auto' }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="profile-img"
                  loading="lazy"
                />

                <h3 className="name">{item.name}</h3>
                <p className="role">{item.role}</p>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ff007f">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <svg className="quote-icon" width="30" height="30" viewBox="0 0 24 24" fill="#ddd">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="feedback">{item.feedback}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="nav-buttons-container">
          <button
            className="nav-btn left"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            className="nav-btn right"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;