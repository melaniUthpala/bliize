import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/siteData';
import './Works.css';
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id:1, title:'Modern House In UK',   cat:'Building, Apartment', img: IMAGES.project1 },
  { id:2, title:'Art Museum In Dubai',  cat:'Building, Apartment', img: IMAGES.project2 },
  { id:3, title:'Alexa Complex',        cat:'Building, Apartment', img: IMAGES.project3 },
  { id:4, title:'Bentila Palace',       cat:'Building, Apartment', img: IMAGES.project4 },
];

export default function Works() {
  const gridRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    // Heading reveal
    gsap.to(headRef.current.querySelectorAll('.gsap-up'), {
      scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
      y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power2.out',
    });
    // Cards stagger
    gsap.from(gridRef.current.querySelectorAll('.wc'), {
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      y: 70, opacity: 0, stagger: 0.12, duration: 0.85, ease: 'power2.out',
    });
  }, []);

  return (
    <section className="works-sec" id="works">
      {/* Heading */}
      <div className="works-head" ref={headRef}>
        <span className="sec-tag">Our Portfolio</span>
        <div className="sec-big gsap-up">Our Works</div>
      </div>

      {/* 2×2 Grid */}
      <div className="works-grid" ref={gridRef}>
        {/* Row 1 — equal halves */}
        <div className="wc wc-half">
          <img
            src={PROJECTS[0].img}
            alt={PROJECTS[0].title}
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80'; }}
          />
          <div className="wc-info">
            <h3>{PROJECTS[0].title}</h3>
            <p>{PROJECTS[0].cat}</p>
          </div>
        </div>
        <div className="wc wc-half">
          <img
            src={PROJECTS[1].img}
            alt={PROJECTS[1].title}
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80'; }}
          />
          <div className="wc-info">
            <h3>{PROJECTS[1].title}</h3>
            <p>{PROJECTS[1].cat}</p>
          </div>
        </div>
        {/* Row 2 — 60/40 split */}
        <div className="wc wc-wide">
          <img
            src={PROJECTS[2].img}
            alt={PROJECTS[2].title}
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1100&q=80'; }}
          />
          <div className="wc-info">
            <h3>{PROJECTS[2].title}</h3>
            <p>{PROJECTS[2].cat}</p>
          </div>
        </div>
        <div className="wc wc-narrow">
          <img
            src={PROJECTS[3].img}
            alt={PROJECTS[3].title}
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80'; }}
          />
          <div className="wc-info">
            <h3>{PROJECTS[3].title}</h3>
            <p>{PROJECTS[3].cat}</p>
          </div>
        </div>
      </div>

      {/* See All Projects — center, below grid */}
      <div className="works-foot">
        <a href="#" className="btn-see-all gsap-up">
          See All Projects <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
}
