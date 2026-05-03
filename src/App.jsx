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
import HomeGallery from './components/HomeGallery';
import SingleServicePage from './components/SingleServicePage';
import ServiceSingle from './components/ServiceSingle';

// ✅ NEW IMPORTS
import TeamPage from './components/TeamPage';
import TeamSinglePage from './components/TeamSinglePage';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Contactsus from './components/Contactsus';
import Privacy from './components/Privacy';
import TermsPage from './components/TermsPage';
import NotFoundPage from './components/NotFoundPage';
import Projectssingle from './components/Projectssingle';
import Shop from './components/Shop';
import ShopSingle from './components/ShopSingle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Wishlist from './components/Wishlist';
import Blogrightsidebar from './components/Blogrightsidebar';
import Blogleftsidebar from './components/Blogleftsidebar';
import Blogfullwidth from './components/Blogfullwidth';

import { Footer } from './components/Footer';

import './index.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState('original-home');

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
        curDot.current.style.top  = my.current + 'px';
      }
      if (curRing.current) {
        curRing.current.style.left = fx.current + 'px';
        curRing.current.style.top  = fy.current + 'px';
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

  const [pageType, pageSlug] = page.includes(':')
    ? page.split(':')
    : [page, null];

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

      <div ref={curDot}  className="cursor-dot"  />
      <div ref={curRing} className="cursor-ring" />

      <Header onNavigate={setPage} />

      <main>
        {pageType === 'original-home' ? (
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
        ) : pageType === 'home' ? (
          <HomeGallery onNavigate={setPage} />
        ) : pageType === 'about' ? (
          <AboutPage />
        ) : pageType === 'services' ? (
          <SingleServicePage onNavigate={setPage} />
        ) : pageType === 'service-single' ? (
          <ServiceSingle onNavigate={setPage} />
        ) : pageType === 'team' ? (
          <TeamPage onNavigate={setPage} />
        ) : pageType === 'team-single' ? (
          <TeamSinglePage onNavigate={setPage} />
        ) : pageType === 'pricing' ? (
          <Pricing onNavigate={setPage} />
        ) : pageType === 'login' ? (
          <Login onNavigate={setPage} />
        ) : pageType === 'contact' ? (
          <Contactsus onNavigate={setPage} />
        ) : pageType === 'privacy' ? (
          <Privacy onNavigate={setPage} />
        ) : pageType === 'terms' ? (
          <TermsPage onNavigate={setPage} />
        ) : pageType === '404' ? (
          <NotFoundPage onNavigate={setPage} />
        ) : pageType === 'projects' ? (
          <Projectssingle onNavigate={setPage} />
        ) : pageType === 'project-single' ? (
          <Projectssingle onNavigate={setPage} />
        ) : pageType === 'shop' ? (
          <Shop onNavigate={setPage} />
        ) : pageType === 'shop-single' ? (
          <ShopSingle onNavigate={setPage} />
        ) : pageType === 'cart' ? (
          <Cart onNavigate={setPage} />
        ) : pageType === 'checkout' ? (
          <Checkout onNavigate={setPage} />
        ) : pageType === 'wishlist' ? (
          <Wishlist onNavigate={setPage} />
        ) : pageType === 'blog-right' ? (
          <Blogrightsidebar onNavigate={setPage} />
        ) : pageType === 'blog-left' ? (
          <Blogleftsidebar onNavigate={setPage} />
        ) : pageType === 'blog-full' ? (
          <Blogfullwidth onNavigate={setPage} />
        ) : pageType === 'blog-details' ? (
          <Blogrightsidebar onNavigate={setPage} />
        ) : pageType === 'blog-details-right' ? (
          <Blogrightsidebar onNavigate={setPage} />
        ) : pageType === 'blog-details-left' ? (
          <Blogleftsidebar onNavigate={setPage} />
        ) : pageType === 'blog-details-full' ? (
          <Blogfullwidth onNavigate={setPage} />
        ) : (
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '160px',
            fontFamily: 'sans-serif',
            color: '#555'
          }}>
            <h2>Page: <strong>{page}</strong> — coming soon</h2>
          </div>
        )}
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