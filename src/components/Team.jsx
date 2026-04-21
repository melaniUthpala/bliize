import './Sections.css';
import benzamin from '../../assets/teaminbt/member-1.jpg';
import harvard from '../../assets/teaminbt/member-2.jpg';
import robert from '../../assets/teaminbt/member-3.jpg';

/* ══════════════════════════════════════════
   TEAM — Staggered layout (sm — LG — sm)
   Big "Our Team" serif title above
   ══════════════════════════════════════════ */
const TEAM = [
  { name: 'Benzamin Simon', role: 'Interior Designer', img: benzamin, bw: false, size: 'sm' },
  { name: 'Harvard Bunion', role: 'Partner & CEO',     img: harvard,  bw: true,  size: 'lg' },
  { name: 'Robert Fox',     role: 'Senior Architect',  img: robert,   bw: false, size: 'sm' },
];

export default function Team() {
  return (
    <section className="team-sec" id="team">
      <div className="team-title-wrap">
        <div className="team-big-title">Our Team</div>
      </div>
      <div className="team-grid">
        {TEAM.map((m, i) => (
          <div key={i} className={`tc tc-${m.size}`}>
            <div className="tc-img">
              <img
                src={m.img}
                alt={m.name}
                style={{ filter: m.bw ? 'grayscale(100%)' : 'none' }}
                loading="lazy"
              />
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}