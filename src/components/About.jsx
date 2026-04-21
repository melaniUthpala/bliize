import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

import imgMain  from '../assets/home/slide-1.jpg';
import imgSmall from '../assets/home/slide-2.jpg';

export default function About() {
  const secRef  = useRef(null);
  const statRef = useRef(null);
  const [count, setCount] = useState(0);
  const [counted, setCounted] = useState(false);

  // CountUp on scroll into view
  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          const end = 23;
          const duration = 2200;
          let startTime = null;
          const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [counted]);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.ab-word-about', {
        scrollTrigger: { trigger: '.ab-word-about', start: 'top 82%' },
        y: '110%', duration: 1.1, ease: 'power3.out',
      });

      gsap.from('.ab-word-bliize', {
        scrollTrigger: { trigger: '.ab-word-bliize', start: 'top 88%' },
        y: '110%', duration: 1.1, ease: 'power3.out', delay: 0.1,
      });

      gsap.from('.ab-img-main', {
        scrollTrigger: { trigger: '.ab-img-main', start: 'top 82%' },
        x: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });

      gsap.from('.ab-img-small', {
        scrollTrigger: { trigger: '.ab-img-small', start: 'top 82%' },
        x: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15,
      });

      gsap.from('.ab-para-block', {
        scrollTrigger: { trigger: '.ab-para-block', start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.9, ease: 'power2.out',
      });

    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about-sec" id="about" ref={secRef}>

      {/*
        LAYOUT (matches sketch exactly):
        ┌──────────────────┬──────────────────┬──────────┐
        │                  │   About          │          │
        │   paragraph      │   Bliize         │ img-small│
        │                  ├──────────────────┤ (tall)   │
        │   [buttons]      │   img-main       │          │
        │                  │   (big square)   │          │
        └──────────────────┴──────────────────┴──────────┘
                    23+  Years of Experience
      */}

      <div className="ab-layout">

        {/* COL 1: Paragraph + buttons (left) */}
        <div className="ab-col-left">
          <div className="ab-para-block">
            <p>
              Blaze is a trailblazing architecture agency renowned for its
              innovative approach to design, where creativity meets functionality.
              From futuristic skyscrapers to timeless cultural landmarks, We
              specializes in crafting spaces that inspire and endure. Blaze pushes
              boundaries, transforming bold concepts into architectural masterpieces.
              Every project reflects a commitment to eco-conscious practices and
              sustainable solutions. Blaze believes architecture is personal.
            </p>
            <div className="ab-btns">
              <a href="#works" className="btn-black">Discover More</a>
              <button className="btn-play">
                <span className="play-circle"><i className="fas fa-play" /></span>
                <span>Watch Videos</span>
              </button>
            </div>
          </div>
        </div>

        {/* COL 2: About/Bliize words + big image (center) */}
        <div className="ab-col-center">
          {/* Words on top */}
          <div className="ab-words">
            <div className="ab-clip"><span className="ab-word ab-word-about">About</span></div>
            <div className="ab-clip"><span className="ab-word ab-word-bliize">Bliize</span></div>
          </div>
          {/* Big main image below words */}
          <img className="ab-img-main" src={imgMain} alt="Modern architecture" />
        </div>

        {/* COL 3: Small tall image (far right strip) */}
        <div className="ab-col-right">
          <img className="ab-img-small" src={imgSmall} alt="Architecture detail" />
        </div>

      </div>

      {/* 23+ CountUp — centered below everything */}
      <div className="ab-stat-wrap" ref={statRef}>
        <div className="stat-num">{count}+</div>
        <div className="stat-lbl">Years Of<br />Experience</div>
      </div>

    </section>
  );
}