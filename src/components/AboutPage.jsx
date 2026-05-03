import './Sections.css';
import About from './About'; // ✅ added
import BrandSection from './BrandSection';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-inner">
          <span className="about-pill">About Us</span>
          <h1 className="about-h">Interior Designer, Expert Architect</h1>
        </div>
      </section>

      {/* ✅ added About section at bottom */}
      <About />
      
      <BrandSection />
    </>
  );
}