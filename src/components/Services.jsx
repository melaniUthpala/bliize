import './Sections.css';

/* ══════════════════════════════════════════
   SERVICES — 4 column grid, hover black fill
   ══════════════════════════════════════════ */
const SERVICES = [
  { title: 'Custom Solutions', desc: 'Tailored architectural solutions designed to meet your unique vision, space requirements, and aesthetic preferences.' },
  { title: 'Furniture & Decor', desc: 'Curated furniture selections and bespoke decor pieces that complement and elevate your architectural spaces.' },
  { title: 'Interior Design', desc: 'Thoughtful interior compositions that balance beauty with functionality, creating spaces that inspire daily life.' },
  { title: 'Design & Planning', desc: 'Comprehensive design planning from initial concept through detailed documentation and construction oversight.' },
];

const ICONS = [
  /* Building */
  <svg key="0" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="6" y="18" width="20" height="28" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="26" y="10" width="20" height="36" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="24" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="10" y="34" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="32" y="16" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="32" y="26" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="32" y="36" width="5" height="6" stroke="currentColor" strokeWidth="1.2"/>
  </svg>,
  /* Sofa */
  <svg key="1" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="10" y="20" width="32" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="14" y="14" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="14" y1="36" x2="14" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="38" y1="36" x2="38" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="28" x2="6" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="42" y1="28" x2="46" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  /* Drafting table */
  <svg key="2" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="8" y="30" width="36" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="16" y1="34" x2="12" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="36" y1="34" x2="40" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="14" y="12" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="18" y1="23" x2="28" y2="23" stroke="currentColor" strokeWidth="1.2"/>
  </svg>,
  /* Monitor / blueprint */
  <svg key="3" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="8" y="10" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="26" y1="36" x2="26" y2="44" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18" y1="44" x2="34" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="14" y1="25" x2="38" y2="25" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="26" y="14" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
  </svg>,
];

export default function Services() {
  return (
    <section className="services-sec" id="services">
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="svc-card">
            <div className="svc-icon">{ICONS[i]}</div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}