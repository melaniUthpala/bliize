import { useState } from 'react';
import './Sections.css';
import testiBg from '../assets/homeinbt/lighthome.webp';  

/* ══════════════════════════════════════════
   TESTIMONIALS — Dark overlay, big serif quote
   Prev/Next arrows
   ══════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    quote: 'Their attention to detail and understanding of spatial design transformed our vision into something beyond what we imagined. Every corner of our home tells a story.',
    name: 'Alexandra Chen',
    role: 'Homeowner',
  },
  {
    quote: 'Working with the team on our corporate headquarters was seamless. They delivered a space that inspires creativity and collaboration across every department.',
    name: 'James Mitchell',
    role: 'CEO, TechVentures',
  },
  {
    quote: 'The museum design captures the essence of our collection while creating an unforgettable visitor experience. A masterpiece of modern architecture.',
    name: 'Dr. Sarah Williams',
    role: 'Museum Director',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const go = (dir) => setIdx((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section className="testi-sec">
      <div className="testi-bg" style={{ backgroundImage: `url(${testiBg})` }} />
      <div className="testi-inner">
        <div className="testi-quote-icon">
          <svg width="60" height="44" viewBox="0 0 60 44" fill="none">
            <path
              d="M0 44V26.4C0 19.467 1.867 13.6 5.6 8.8C9.333 4 14.667 1.067 21.6 0L24 5.6C20.267 6.4 17.333 8.267 15.2 11.2C13.067 14.133 12 17.333 12 20.8H22V44H0ZM38 44V26.4C38 19.467 39.867 13.6 43.6 8.8C47.333 4 52.667 1.067 59.6 0L62 5.6C58.267 6.4 55.333 8.267 53.2 11.2C51.067 14.133 50 17.333 50 20.8H60V44H38Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <p className="testi-quote-text">{t.quote}</p>
        <div className="testi-divider" />
        <div className="testi-author-name">{t.name}</div>
        <div className="testi-author-role">{t.role}</div>
      </div>
      <button className="testi-arrow testi-prev" onClick={() => go(-1)} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="testi-arrow testi-next" onClick={() => go(1)} aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}