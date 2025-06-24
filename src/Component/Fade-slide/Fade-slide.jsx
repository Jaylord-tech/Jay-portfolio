import React, { useEffect, useRef, useState } from 'react';
import './Fade-slide.css';

const FadeSlide = ({ children, direction = 'fade-up', delay = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-slide ${direction} ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeSlide;
