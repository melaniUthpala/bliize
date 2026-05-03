import './Sections.css';
import member1 from '../assets/teaminbt/member-1.jpg';
import member2 from '../assets/teaminbt/member-2.jpg';
import member3 from '../assets/teaminbt/member-3.jpg';
import BrandSection from './BrandSection';

const TEAM = [
  { name: 'Robert Fox',     role: 'Senior Architect',  img: member3, bw: false },
  { name: 'Harvard Bunion', role: 'Partner & CEO',     img: member2, bw: true  },
  { name: 'Benzamin Simon', role: 'Interior Designer', img: member1, bw: false },
  { name: 'Robert Fox',     role: 'Senior Architect',  img: member2, bw: true  },
];

export default function TeamPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-inner">
          <span className="about-pill">Team</span>
          <h1 className="about-h">Interior Designer, Expert Architect</h1>
        </div>
      </section>

      <section className="tp-grid-sec">
        <div className="tp-grid">
          {TEAM.map((m, i) => (
            <div key={i} className="tp-card">
              <div className="tp-img">
                <img
                  src={m.img}
                  alt={m.name}
                  style={{ filter: m.bw ? 'grayscale(100%)' : 'none' }}
                  loading="lazy"
                />
              </div>
              <h3 className="tp-name">{m.name}</h3>
              <p className="tp-role">{m.role}</p>
            </div>
          ))}
        </div>

          
        <BrandSection />
      </section>
    </>
  );
}