import './Sections.css';
import heroBg from '../../assets/homeinbt/hero.jpg';

/* ══════════════════════════════════════════
   HERO — Big serif headline, dark overlay
   ══════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero-inner">
        <span className="hero-tag">What We Do</span>
        <h1 className="hero-h">
          Creating Landmark<br />
          Spaces, One Blueprint<br />
          at a Time
        </h1>
        <p className="hero-p">
          We blend visionary design with precision engineering to create
          architectural landmarks that stand the test of time. From concept
          to completion, every detail matters.
        </p>
      </div>
    </section>
  );
}