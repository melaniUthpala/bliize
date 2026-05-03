import { useState } from 'react';
import './Sections.css';
import main1 from "../assets/projectsingle/1main.webp";
import assembly from "../assets/projectsingle/assembly.webp";
import chairwthvas from "../assets/projectsingle/chairwthvas.webp";
import dremhouseresi from "../assets/projectsingle/dremhouseresi.webp";
import engineers from "../assets/projectsingle/engineers.webp";
import labor from "../assets/projectsingle/labor.webp";
import seaview from "../assets/projectsingle/seaview.webp";
import wpoVideoBg from "../assets/projectsingle/wpo-video-bg-5.jpg";
import BrandSection from './BrandSection';

const YT_URL = 'https://youtu.be/uySn1BZiWWs?si=9zOUmiAdz64Jv2Tp';
const YT_EMBED = 'https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1';

const SOLVES = [
  { img: engineers, title: 'Site Planning' },
  { img: labor, title: 'Construction' },
  { img: chairwthvas, title: 'Interior Finish' },
];

const RELATED = [
  { img: dremhouseresi, title: 'Dream House Residential', cat: 'Building, Apartment' },
  { img: assembly, title: 'Assembly of Rivery', cat: 'Building, Apartment' },
  { img: seaview, title: 'Seaview Residential', cat: 'Building, Apartment' },
];

export default function ProjectSingle() {
  const [open, setOpen] = useState(false);

  return (
    <article className="psg-wrap">
      {/* Hero title */}
      <div className="psg-hero">
        <span className="psg-pill">Service Single</span>
        <h1 className="psg-title">Modern House In UK</h1>
      </div>

      {/* Hero image */}
      <div className="psg-hero-img">
        <img src={main1} alt="Modern House In UK" />
      </div>

      {/* Two-col: title + project info */}
      <div className="psg-container">
        <div className="psg-twocol">
          <div className="psg-left">
            <h2 className="psg-h2">Modern House In UK</h2>
          </div>
          <div className="psg-info">
            <h3 className="psg-info-title">Project Info:</h3>
            <div className="psg-info-rows">
              <div className="psg-row"><span>Project :</span><b>ANT BUilding</b></div>
              <div className="psg-row"><span>Architect :</span><b>Jhonthan<br/>Hayway</b></div>
              <div className="psg-row"><span>Clients :</span><b>David Arham</b></div>
              <div className="psg-row"><span>Duration :</span><b>March 2025</b></div>
              <div className="psg-row"><span>Budget :</span><b>$800.58</b></div>
              <div className="psg-row"><span>Location :</span><b>Austria</b></div>
            </div>
          </div>
        </div>

        {/* Body paragraphs */}
        <div className="psg-body">
          <p className="psg-p">
            <span className="psg-drop">M</span>odern Buildings Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has beening the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a good type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was a
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <p className="psg-p">
            Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium. Nulla thurg varius
            purus bibendum pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh tincidunt tempor proin. Est
            placerat felis pellentesque temupus condimentum consectetur. Faucibus nunc pellentesque ac mus
            posuere aliquam mor augue orci. Egestas donec sit pellentesque lacus.
          </p>
        </div>

        {/* How we solve */}
        <div className="psg-solve">
          <h2 className="psg-h2-big">How We Solve<br/>The Critical Issues?</h2>
          <p className="psg-solve-p">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled.
          </p>
        </div>

        <div className="psg-three">
          {SOLVES.map((s, i) => (
            <div key={i} className="psg-three-item">
              <img src={s.img} alt={s.title} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Project Summary */}
        <div className="psg-solve">
          <h2 className="psg-h2-big">Project Summary<br/>and Solutions</h2>
          <p className="psg-solve-p">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled.
          </p>
        </div>

        {/* Video block */}
        <div className="psg-video" onClick={() => setOpen(true)} role="button" tabIndex={0}
             onKeyDown={(e)=>{ if(e.key==='Enter') setOpen(true); }}>
          <img src={wpoVideoBg} alt="Project video" />
          <a
            href={YT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="psg-play"
            aria-label="Play video"
            onClick={(e) => { e.preventDefault(); setOpen(true); }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </a>
        </div>

        {/* Related Projects */}
        <div className="psg-solve psg-related-head">
          <h2 className="psg-h2-big">Related Project<br/>Only For You</h2>
          <p className="psg-solve-p">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled.
          </p>
        </div>

        <div className="psg-related">
          {RELATED.map((r, i) => (
            <div key={i} className="psg-rel-item">
              <div className="psg-rel-img"><img src={r.img} alt={r.title} loading="lazy" /></div>
              <h3>{r.title}</h3>
              <p>{r.cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube modal */}
      {open && (
        <div className="psg-modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <button className="psg-modal-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          <div className="psg-modal-frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={YT_EMBED}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <BrandSection />
    </article>
  );
}