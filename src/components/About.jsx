import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
gsap.registerPlugin(ScrollTrigger);

const IMG_MAIN = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85';
const IMG_SUB  = 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=85';

export default function About() {
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Big title word reveal
    gsap.from(titleRef.current.querySelectorAll('.ab-w span'), {
      scrollTrigger: { trigger: titleRef.current, start: 'top 78%' },
      y: '110%', stagger: 0.07, duration: 1.1, ease: 'power3.out',
    });
    // Content reveals
    ref.current.querySelectorAll('.r-up, .r-right').forEach(el => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 84%' },
        y: 0, x: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
      });
    });
  }, []);

  return (
    <section className="about-sec" id="about" ref={ref}>
      {/* Giant "About Bliize" title */}
      <div className="about-title-row" ref={titleRef}>
        <div className="about-big-wrap">
          <div className="about-big"><div className="ab-w"><span>About</span></div></div>
          <div className="about-big about-big-2"><div className="ab-w"><span>Bliize</span></div></div>
        </div>

        {/* Images overlap the title */}
        <div className="about-imgs-wrap">
          <img className="ab-img-main r-right" src={IMG_MAIN} alt="Architecture building" />
          <img className="ab-img-sub"  src={IMG_SUB}  alt="Construction detail" />
        </div>
      </div>

      {/* Content below */}
      <div className="about-content">
        <div className="about-text r-up">
          <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure.</p>
          <p>Blaze pushes boundaries, transforming bold concepts into architectural masterpieces. Every project reflects a commitment to eco-conscious practices and sustainable solutions. Blaze believes architecture is personal.</p>
          <div className="about-btns">
            <a href="#works" className="btn-black">Discover More</a>
            <button className="btn-play">
              <span className="play-ring"><i className="fas fa-play" /></span>
              Watch Videos
            </button>
          </div>
        </div>
        <div className="about-exp r-up">
          <div className="exp-num">23+</div>
          <div className="exp-lbl">Years Of Experience</div>
        </div>
      </div>
    </section>
  );
}
