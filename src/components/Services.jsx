import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ctaBg from '../assets/srvcbg/service-bg.webp';
import './Sections.css';
import icon1 from '../assets/srvcbg/buildings1.1ec4e90a.svg';
import icon2 from '../assets/srvcbg/dining-room1.cd04f239.svg';
import icon3 from '../assets/srvcbg/living-room1.22cd85ce.svg';
import icon4 from '../assets/srvcbg/planning1.e933d662.svg';

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════
   SERVICES — overlaps hero, 4 column grid
   ══════════════════════════════════════════ */
const SERVICES = [
  { title: 'Custom Solutions', desc: 'Tailored architectural solutions designed to meet your unique vision, space requirements, and aesthetic preferences.' },
  { title: 'Furniture & Decor', desc: 'Curated furniture selections and bespoke decor pieces that complement and elevate your architectural spaces.' },
  { title: 'Interior Design', desc: 'Thoughtful interior compositions that balance beauty with functionality, creating spaces that inspire daily life.' },
  { title: 'Design & Planning', desc: 'Comprehensive design planning from initial concept through detailed documentation and construction oversight.' },
];

const ICONS = [
  <img key="0" src={icon1} alt="Custom Solutions" width="52" height="52" />,
  <img key="1" src={icon2} alt="Furniture & Decor" width="52" height="52" />,
  <img key="2" src={icon3} alt="Interior Design" width="52" height="52" />,
  <img key="3" src={icon4} alt="Design & Planning" width="52" height="52" />,
];

export default function Services() {
  const secRef = useRef(null);

  useEffect(() => {
    gsap.to(secRef.current.querySelectorAll('.svc-card'), {
      scrollTrigger: { trigger: secRef.current, start: 'top 80%' },
      y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out',
    });
    gsap.to('.cta-bg-img', {
      scrollTrigger: { trigger: secRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      y: 80,
    });
  }, []);

  return (
    <>
      {/* ── CTA Banner (hero overlap section) ── */}
      <section className="cta-banner" ref={secRef}>
        <div className="cta-bg-img" style={{ backgroundImage: `url(${ctaBg})` }} />
        <div className="cta-inner">
          <span className="sec-tag">What We Do</span>
          <h2 className="cta-h">Creating Landmark<br />Spaces, One Blueprint<br />at a Time</h2>
          <p className="cta-p">We blend visionary design with precision engineering to create architectural landmarks that stand the test of time. From concept to completion, every detail matters.</p>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="services-sec" id="services">
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="svc-card">
              <div className="svc-icon">{ICONS[i]}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}