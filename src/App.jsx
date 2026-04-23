import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';

import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import BrandSection from './components/brandSection';

import AboutPage from './components/AboutPage';
import HomeGallery from './components/HomeGallery'; // ✅ added

import { Footer } from './components/Footer';

import './index.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState('home');

  const curDot = useRef(null);
  const curRing = useRef(null);
  const backTop = useRef(null);

  const mx = useRef(0), my = useRef(0);
  const fx = useRef(0), fy = useRef(0);

  useEffect(() => {
    const bar = document.getElementById('pre-bar');
    if (bar) requestAnimationFrame(() => { bar.style.width = '100%'; });

    const t = setTimeout(() => {
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => setLoaded(true),
      });
    }, 1900);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const move = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };

    window.addEventListener('mousemove', move);

    let raf;
    const loop = () => {
      fx.current += (mx.current - fx.current) * 0.13;
      fy.current += (my.current - fy.current) * 0.13;

      if (curDot.current) {
        curDot.current.style.left = mx.current + 'px';
        curDot.current.style.top = my.current + 'px';
      }

      if (curRing.current) {
        curRing.current.style.left = fx.current + 'px';
        curRing.current.style.top = fy.current + 'px';
      }

      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;

    const onScroll = () => {
      if (backTop.current) {
        backTop.current.classList.toggle('visible', window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', onScroll);

    gsap.utils.toArray('.gsap-up').forEach(el => {
      if (!el.dataset.gsapDone) {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: 'top 82%' },
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power2.out'
        });
        el.dataset.gsapDone = '1';
      }
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [loaded]);

  return (
    <>
      {!loaded && (
        <div id="preloader" className="preloader">
          <div className="preloader-logo">
            {'Bliizë'.split('').map((ch, i) => (
              <span key={i} style={{
                display: 'inline-block',
                animation: `preCharIn 0.6s both`,
                animationDelay: `${i * 0.07}s`
              }}>
                {ch}
              </span>
            ))}
          </div>
          <div className="preloader-bar-track">
            <div className="preloader-bar" id="pre-bar" />
          </div>
        </div>
      )}

      <div ref={curDot} className="cursor-dot" />
      <div ref={curRing} className="cursor-ring" />

      <Header onNavigate={setPage} />

      <main>
        {page === 'home' ? (
          <>
            <Hero />
            <About />
            <Works />
            <Services />
            <Stats />
            <Testimonials />
            <Team />
            <BrandSection />
          </>
        ) : page === 'about' ? (
          <AboutPage />
        ) : page === 'gallery' ? (   /* ✅ added */
          <HomeGallery />
        ) : null}
      </main>

      <Footer />

      <button
        ref={backTop}
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}
