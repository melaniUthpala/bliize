import { useState, useEffect } from 'react';
import './Sections.css';
import logo1 from '../assets/brandlogo/1.webp';
import logo2 from '../assets/brandlogo/2.webp';
import logo3 from '../assets/brandlogo/3.webp';
import logo4 from '../assets/brandlogo/4.webp';
import logo5 from '../assets/brandlogo/5.webp';

const LOGOS = [logo1, logo2, logo3, logo4, logo5];

export default function BrandSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % LOGOS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(LOGOS[(idx + i) % LOGOS.length]);
    }
    return result;
  };

  return (
    <section className="partners-sec">
      <div className="partners-track">
        {getVisible().map((src, i) => (
          <div key={i} className="p-logo">
            <img src={src} alt={`Brand ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}