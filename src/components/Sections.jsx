import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES, STATS, TESTIMONIALS, TEAM, BLOGS, IMAGES } from '../data/siteData';
import './Sections.css';
gsap.registerPlugin(ScrollTrigger);

/* ── Bliize SVG Logo ── */
function BliizeLogo({ color = 'white', width = 100 }) {
  return (
    <svg width={width} viewBox="0 0 129 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.55 50V15H17.25C19.7167 15 21.7667 15.3833 23.4 16.15C25.0667 16.9167 26.3167 17.9833 27.15 19.35C27.9833 20.6833 28.4 22.2333 28.4 24C28.4 25.7667 28.0167 27.25 27.25 28.45C26.4833 29.65 25.4667 30.5667 24.2 31.2C22.9667 31.8333 21.6167 32.2167 20.15 32.35L20.9 31.8C22.4667 31.8333 23.8667 32.25 25.1 33.05C26.3667 33.85 27.3667 34.9 28.1 36.2C28.8333 37.4667 29.2 38.8833 29.2 40.45C29.2 42.2833 28.75 43.9333 27.85 45.4C26.9833 46.8333 25.7 47.9667 24 48.8C22.3 49.6 20.2167 50 17.75 50H3.55ZM9.55 45.1H16.85C18.8167 45.1 20.35 44.6333 21.45 43.7C22.55 42.7667 23.1 41.4667 23.1 39.8C23.1 38.1333 22.5333 36.8167 21.4 35.85C20.2667 34.85 18.7167 34.35 16.75 34.35H9.55V45.1ZM9.55 29.8H16.4C18.3333 29.8 19.8 29.3667 20.8 28.5C21.8 27.6 22.3 26.3667 22.3 24.8C22.3 23.2667 21.8 22.0667 20.8 21.2C19.8 20.3 18.3167 19.85 16.35 19.85H9.55V29.8ZM34.7465 50V14H40.7465V50H34.7465ZM47.6918 50V24.8H53.6918V50H47.6918ZM50.6918 20.8C49.5918 20.8 48.6751 20.4667 47.9418 19.8C47.2418 19.1 46.8918 18.25 46.8918 17.25C46.8918 16.2167 47.2418 15.3833 47.9418 14.75C48.6751 14.0833 49.5918 13.75 50.6918 13.75C51.7918 13.75 52.6918 14.0833 53.3918 14.75C54.1251 15.3833 54.4918 16.2167 54.4918 17.25C54.4918 18.25 54.1251 19.1 53.3918 19.8C52.6918 20.4667 51.7918 20.8 50.6918 20.8ZM60.8754 50V24.8H66.8754V50H60.8754ZM63.8754 20.8C62.7754 20.8 61.8587 20.4667 61.1254 19.8C60.4254 19.1 60.0754 18.25 60.0754 17.25C60.0754 16.2167 60.4254 15.3833 61.1254 14.75C61.8587 14.0833 62.7754 13.75 63.8754 13.75C64.9754 13.75 65.8754 14.0833 66.5754 14.75C67.3087 15.3833 67.6754 16.2167 67.6754 17.25C67.6754 18.25 67.3087 19.1 66.5754 19.8C65.8754 20.4667 64.9754 20.8 63.8754 20.8ZM72.159 50V45.15L85.209 29.8H72.359V24.8H92.109V29.65L78.909 45.05H92.359V50H72.159ZM109.681 50.6C107.181 50.6 104.981 50.0667 103.081 49C101.181 47.9 99.6979 46.3667 98.6313 44.4C97.5646 42.4333 97.0313 40.1667 97.0313 37.6C97.0313 34.9333 97.5479 32.6 98.5813 30.6C99.6479 28.6 101.131 27.0333 103.031 25.9C104.965 24.7667 107.198 24.2 109.731 24.2C112.198 24.2 114.348 24.75 116.181 25.85C118.015 26.95 119.431 28.4333 120.431 30.3C121.431 32.1333 121.931 34.2 121.931 36.5C121.931 36.8333 121.931 37.2 121.931 37.6C121.931 38 121.898 38.4167 121.831 38.85H101.331V35H115.881C115.815 33.1667 115.198 31.7333 114.031 30.7C112.865 29.6333 111.415 29.1 109.681 29.1C108.448 29.1 107.315 29.3833 106.281 29.95C105.248 30.5167 104.431 31.3667 103.831 32.5C103.231 33.6 102.931 35 102.931 36.7V38.15C102.931 39.7167 103.215 41.0667 103.781 42.2C104.381 43.3333 105.181 44.2 106.181 44.8C107.215 45.3667 108.365 45.65 109.631 45.65C111.031 45.65 112.181 45.35 113.081 44.75C114.015 44.15 114.698 43.35 115.131 42.35H121.231C120.765 43.9167 119.998 45.3333 118.931 46.6C117.865 47.8333 116.548 48.8167 114.981 49.55C113.415 50.25 111.648 50.6 109.681 50.6Z" fill={color}/>
      <g clipPath="url(#lc0)"><path d="M117.006 23.7061L115.93 23.0361C117.06 21.8453 118.389 19.3945 116.842 15.0584C116.842 15.0584 111.259 16.3934 110.672 19.7614L109.19 18.8389C108.029 15.7265 108.515 10.6438 121.542 7.781C121.542 7.781 126.047 21.6348 117.006 23.7061Z" fill={color}/></g>
      <g clipPath="url(#lc1)"><path d="M100.67 23.7061L101.746 23.0361C100.615 21.8453 99.2867 19.3945 100.834 15.0584C100.834 15.0584 106.417 16.3934 107.004 19.7614L108.485 18.8389C109.647 15.7265 109.161 10.6438 96.1338 7.781C96.1338 7.781 91.6292 21.6348 100.67 23.7061Z" fill={color}/></g>
      <defs>
        <clipPath id="lc0"><rect width="16.7536" height="16.7536" fill="white" transform="translate(114.532 2.92215) rotate(31.9131)"/></clipPath>
        <clipPath id="lc1"><rect width="16.7536" height="16.7536" fill="white" transform="matrix(-0.848851 0.528632 0.528632 0.848851 103.144 2.92215)"/></clipPath>
      </defs>
    </svg>
  );
}

/* ── CTA Banner ── */
export function CtaBanner() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current.querySelectorAll('.gsap-up'), {
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power2.out',
    });
    gsap.to('.cta-bg-img', {
      scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      y: 80,
    });
  }, []);
  return (
    <section className="cta-banner" ref={ref}>
      <div className="cta-bg-img" style={{ backgroundImage: `url(${IMAGES.ctaBg})` }} />
      <div className="cta-inner">
        <span className="sec-tag">What We Do</span>
        <h2 className="cta-h gsap-up">Creating Landmark<br />Spaces, One Blueprint<br />at a Time</h2>
        <p className="cta-p gsap-up">Cras nisl nibh commodo ullamcorper aliquet. Gravida orci laoreet eros platea curabitur scelerisque quis cras scelerisque. Fermentum mus et viverra purus nibh fusce integer. Aenean cursus quis pharetra vitae vel sit ac malesuada.</p>
      </div>
    </section>
  );
}

/* ── Services ── */
export function Services() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.querySelectorAll('.svc-card').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 86%' },
        y: 40, opacity: 0, duration: 0.7, delay: i * 0.08, ease: 'power2.out',
      });
    });
  }, []);

  const icons = [
    /* Custom Solutions - building icon */
    <svg key="0" width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="6" y="18" width="20" height="28" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="26" y="10" width="20" height="36" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="24" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/><rect x="10" y="34" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/><rect x="32" y="16" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/><rect x="32" y="26" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/><rect x="32" y="36" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/></svg>,
    /* Furniture & Decor - chair/sofa icon */
    <svg key="1" width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="10" y="20" width="32" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="14" y1="36" x2="14" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="38" y1="36" x2="38" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="28" x2="6" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="42" y1="28" x2="46" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    /* Interior Design - drafting/table icon */
    <svg key="2" width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="8" y="30" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="34" x2="12" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="36" y1="34" x2="40" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="14" y="12" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/><line x1="18" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="1.2"/><line x1="18" y1="23" x2="28" y2="23" stroke="currentColor" strokeWidth="1.2"/></svg>,
    /* Design & Planning - blueprint/monitor icon */
    <svg key="3" width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="8" y="10" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="26" y1="36" x2="26" y2="44" stroke="currentColor" strokeWidth="1.5"/><line x1="18" y1="44" x2="34" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1.2"/><line x1="14" y1="25" x2="38" y2="25" stroke="currentColor" strokeWidth="1.2"/><rect x="26" y="14" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>,
  ];

  return (
    <section className="services-sec" id="services" ref={ref}>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="svc-card">
            <div className="svc-icon">{icons[i]}</div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Stats — white bg, giant numbers ── */
export function Stats() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.querySelectorAll('.stat-n').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 82%', once: true,
        onEnter: () => {
          const target = +el.dataset.target;
          gsap.to({ val: 0 }, {
            val: target, duration: 2.2, ease: 'power1.out',
            onUpdate: function () { el.textContent = Math.round(this.targets()[0].val) + '+'; },
          });
        },
      });
    });
    gsap.from(ref.current.querySelectorAll('.stat-item'), {
      scrollTrigger: { trigger: ref.current, start: 'top 82%' },
      y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out',
    });
  }, []);

  const statsData = [
    { num: 215, label: 'CURRENT CLIENTS' },
    { num: 550, label: 'PROJECTS COMPLETE' },
    { num: 21,  label: 'YEARS OF EXPERIENCE' },
    { num: 25,  label: 'OFFICES WORLDWIDE' },
  ];

  return (
    <section className="stats-sec" ref={ref}>
      <div className="stats-grid">
        {statsData.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-n" data-target={s.num}>0+</div>
            <div className="stat-l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Testimonials — full width dark bg, centered big quote ── */
export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const quoteRef = useRef(null);

  const testimonials = [
    { quote: 'Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet. Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.', name: 'Leslie Alexander', role: 'Marketing Coordinator' },
    { quote: 'Blize next level flexitarian yr bicycle rights waistcoat bit austin tofu-das glossier whatever scenester snack wave literally can shaman grained.', name: 'John Abraham', role: 'Web Developer' },
    { quote: 'Architecture is not just about buildings. It\'s about creating experiences that transform how people live, work, and interact with their environment.', name: 'Sarah Williams', role: 'Creative Director' },
  ];

  const go = (next) => {
    const el = quoteRef.current;
    gsap.to(el, {
      opacity: 0, y: 20, duration: 0.25,
      onComplete: () => {
        setIdx((next + testimonials.length) % testimonials.length);
        gsap.to(el, { opacity: 1, y: 0, duration: 0.4 });
      },
    });
  };

  const t = testimonials[idx];
  return (
    <section className="testi-sec">
      <div className="testi-bg" style={{ backgroundImage: `url(${IMAGES.ctaBg})` }} />
      <div className="testi-inner" ref={quoteRef}>
        <div className="testi-quote-icon">
          <svg width="60" height="44" viewBox="0 0 60 44" fill="none">
            <path d="M0 44V26.4C0 19.467 1.867 13.6 5.6 8.8C9.333 4 14.667 1.067 21.6 0L24 5.6C20.267 6.4 17.333 8.267 15.2 11.2C13.067 14.133 12 17.333 12 20.8H22V44H0ZM38 44V26.4C38 19.467 39.867 13.6 43.6 8.8C47.333 4 52.667 1.067 59.6 0L62 5.6C58.267 6.4 55.333 8.267 53.2 11.2C51.067 14.133 50 17.333 50 20.8H60V44H38Z" fill="white" fillOpacity="0.3"/>
          </svg>
        </div>
        <p className="testi-quote-text">{t.quote}</p>
        <div className="testi-divider" />
        <div className="testi-author-name">{t.name}</div>
        <div className="testi-author-role">{t.role}</div>
      </div>
      <button className="testi-arrow testi-prev" onClick={() => go(idx - 1)}>
        <i className="fas fa-arrow-left" />
      </button>
      <button className="testi-arrow testi-next" onClick={() => go(idx + 1)}>
        <i className="fas fa-arrow-right" />
      </button>
    </section>
  );
}

/* ── Team — staggered heights, exact screenshot layout ── */
export function Team() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current.querySelectorAll('.tc'), {
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power2.out',
    });
  }, []);

  // From screenshot: left=Benzamin(brown jacket), center=Harvard(BW, taller), right=Robert(grey suit)
  const team = [
    { name: 'Benzamin Simon', role: 'Interior Designer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85', bw: false, size: 'sm' },
    { name: 'Harvard Bunion',  role: 'Partner & CEO',     img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=85', bw: true,  size: 'lg' },
    { name: 'Robert Fox',      role: 'Senior Architect',  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85', bw: false, size: 'sm' },
  ];

  return (
    <section className="team-sec" id="team" ref={ref}>
      <div className="team-title-wrap">
        <div className="team-big-title">Our Team</div>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className={`tc tc-${m.size}`}>
            <div className="tc-img">
              <img src={m.img} alt={m.name}
                style={{ filter: m.bw ? 'grayscale(100%)' : 'none' }}
                loading="lazy" />
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Partners — exact from screenshot ── */
export function Partners() {
  const partners = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M3 14L14 4L25 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="5" y="14" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="10" y="19" width="8" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>,
      name: 'SIMPLE HOUSE', sub: 'PREMIUM QUALITY'
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 15L14 5L24 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="6" y="15" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="11" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>,
      name: 'HOUSELUX', sub: ''
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 15L14 5L24 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="6" y="15" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="11" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>,
      name: 'SIMPLE HOUSE', sub: 'PREMIUM QUALITY'
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><line x1="4" y1="14" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="14" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>,
      name: 'FURNITURE', sub: 'MINIMALIST'
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2" fill="none"/><line x1="14" y1="4" x2="14" y2="9" stroke="currentColor" strokeWidth="1.2"/><line x1="14" y1="19" x2="14" y2="24" stroke="currentColor" strokeWidth="1.2"/><line x1="4" y1="14" x2="9" y2="14" stroke="currentColor" strokeWidth="1.2"/><line x1="19" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2"/></svg>,
      name: 'INTERIOR', sub: 'DESIGN'
    },
  ];

  return (
    <section className="partners-sec">
      <div className="partners-track">
        {partners.map((p, i) => (
          <div key={i} className="p-logo">
            {p.icon}
            <div className="p-logo-text">
              <span className="p-name">{p.name}</span>
              {p.sub && <span className="p-sub">{p.sub}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Blog ── */
export function Blog() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current.querySelectorAll('.bc'), {
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      y: 50, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
    });
  }, []);
  return (
    <section className="blog-sec" id="blog">
      <div className="blog-head">
        <span className="sec-tag">Latest News</span>
        <div className="sec-big gsap-up">Our Blog</div>
      </div>
      <div className="blog-grid" ref={ref}>
        {BLOGS.map((b, i) => (
          <div key={i} className="bc">
            <div className="bc-img"><img src={b.img} alt={b.title} loading="lazy" /></div>
            <div className="bc-cat">{b.cat} • {b.date}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <a href="#" className="bc-link">Read More <i className="fas fa-arrow-right" /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-logo-wrap"><BliizeLogo color="white" width={110} /></div>
          <p className="footer-about">Elit commodo nec urna erat morbi at hac turpis aliquam. In tristique elit nibh turpis. Lacus volutpat ipsum convallis tellus pellentesque etiam.</p>
          <div className="footer-social">
            {['fa-facebook-f','fa-twitter','fa-linkedin-in','fa-instagram'].map((ic,i)=>(
              <a key={i} href="#" className="f-soc"><i className={`fab ${ic}`}/></a>
            ))}
          </div>
        </div>
        <div>
          <div className="f-head">Contact</div>
          <div className="f-contact-row"><i className="fas fa-envelope"/>bliize@gmail.com</div>
          <div className="f-contact-row"><i className="fas fa-phone"/>+(208) 555-0112</div>
          <div className="f-contact-row"><i className="fas fa-map-marker-alt"/>4517 Washington Ave.<br/>Manchter, Kentucky 495</div>
        </div>
        <div>
          <div className="f-head">Quick Link</div>
          <ul className="f-links">
            {['About Us','Services','Projects','Blog','Contact'].map((l,i)=>(
              <li key={i}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-head">Newsletter</div>
          <div className="nl-wrap">
            <input type="email" className="nl-input" placeholder="Your Email..."/>
            <button className="nl-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <p>Copyright © 2025 Bliize. All Rights Reserved.</p>
        <div className="footer-btm-links">
          {['privacy & Policy','Terms','About us','Login'].map((l,i)=>(
            <a key={i} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
