import { useState } from 'react';
import './Sections.css';

import img1 from '../assets/servicesingle/1.webp';
import bathrm from '../assets/servicesingle/bathrm.webp';
import jone from '../assets/servicesingle/jone.webp';
import leslie from '../assets/servicesingle/leslie.webp';
import pathokseti from '../assets/servicesingle/pathokseti.webp';
import tblchair from '../assets/servicesingle/tblchair.webp';
import tvlonflwr from '../assets/servicesingle/tvlonflwr.webp';
import videoThumb from '../assets/servicesingle/wpo-video.jpg';
import BrandSection from './BrandSection';

const TESTIMONIALS = [
  {
    quote: '"Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained."',
    name: 'Leslie Alexander',
    role: 'Marketing Coordinator',
    img: leslie,
  },
  {
    quote: '"Bliize next level flexitarian yr bicycle rights waistcoat bit austin tofu-daa glossier whatever scenester snack wave literally can shaman grained."',
    name: 'John Abraham',
    role: 'Web Developer',
    img: jone,
  },
];

export default function ServiceSingle({ onNavigate }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <article className="ss-wrap">

      {/* ── Hero heading ── */}
      <div className="ss-hero-head">
        <span className="about-pill">Service Single</span>
        <h1 className="ss-hero-title">Custom Solutions</h1>
      </div>

      {/* ── Hero image ── */}
      <div className="ss-hero-img">
        <img src={img1} alt="Architecture planning" />
      </div>

      <div className="ss-container">

        {/* ── Intro ── */}
        <div className="ss-intro-grid">
          <div className="ss-intro-left">
            <h2 className="ss-h2">Custom Solutions</h2>
          </div>

          <div className="ss-intro-right">
            <div className="ss-twocol-content">
              <div className="ss-text-col">
                <p className="ss-p-drop">
                  <span className="ss-dropcap">M</span>odern Buildings Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has beening the industry's standard dummy text
                  ever since the 1500s.
                </p>
                <p className="ss-p">
                  Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim
                  situt id amet cyrium. Nulla thurg varius purus bibendum
                  pellentesque eu sit nascetur vitae.
                </p>
              </div>

              <div className="ss-video-col">
                <div className="ss-video-thumb">
                  <img src={videoThumb} alt="Modern house" />
                  {/* ✅ onClick add කළා */}
                  <button
                    className="ss-play"
                    aria-label="Play video"
                    onClick={() => setVideoOpen(true)}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ── Making section ── */}
<div className="ss-making-grid">
  <div className="ss-making-text">
    <h2 className="ss-making-title">
      Making Your<br />Dream True!
    </h2>
    <p className="ss-p">
      Simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and
      scrambled.Lorem ipsum dolor sit amet consectetur. Sit aliquam
      dignissim situt id amet cyrium. Nulla thurg varius purus bibendum
      pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh tincidunt
      tempor proin. Est placerat felis pellentesque temupus condimentum
      consectetur. Faucibus nunc pellentesque ac mus posuere aliquam mor
      augue orci. Egestas donec sit pellentesque lacus.
    </p>
  </div>
  <div className="ss-making-images">
    <img src={tblchair}   alt="Room 2" />
    <img src={tvlonflwr} alt="Interior 3" />
  </div>
</div>

        {/* ── Dream section ── */}
        <div className="ss-dream-grid">
          <div className="ss-dream-left">
            <h2 className="ss-dream-title">
              Your Dream Our<br />Endless Passion
            </h2>
          </div>
          <div className="ss-dream-right">
  <p className="ss-p">
    Simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled.
  </p>
</div>
        </div>
{/* ── Three images ── */}
<div className="ss-three">
  
  <img src={pathokseti} alt="Interior 2" />
  <img src={bathrm}    alt="Interior 1" />
  
</div>


        {/* ── Testimonials ── */}
        <div className="ss-tgrid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="ss-tcard">
              <p className="ss-tquote">{t.quote}</p>
              <div className="ss-tperson">
                <img src={t.img} alt={t.name} />
                <div>
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Back button ── */}
        <div style={{ marginTop: '60px', paddingBottom: '60px' }}>
          <button
            className="sp-more"
            onClick={() => onNavigate('services')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            ← Back to Services
          </button>
        </div>

      </div>

      {/* ✅ Video Modal */}
      {videoOpen && (
        <div className="ss-video-modal" onClick={() => setVideoOpen(false)}>
          <div className="ss-video-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="ss-video-close" onClick={() => setVideoOpen(false)}>✕</button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1"
              title="Architectural Animation"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
       <BrandSection />
    </article>
  );
}