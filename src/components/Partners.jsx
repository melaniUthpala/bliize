import './Sections.css';

/* ══════════════════════════════════════════
   PARTNERS — Row of muted brand logos
   ══════════════════════════════════════════ */
const PARTNERS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 14L14 4L25 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="5" y="14" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="19" width="8" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    name: 'SIMPLE HOUSE', sub: 'PREMIUM QUALITY',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 15L14 5L24 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="6" y="15" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="11" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    name: 'HOUSELUX', sub: '',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 15L14 5L24 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="6" y="15" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="11" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    name: 'SIMPLE HOUSE', sub: 'PREMIUM QUALITY',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="4" y1="14" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="14" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    name: 'FURNITURE', sub: 'MINIMALIST',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="14" y1="4" x2="14" y2="9" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="14" y1="19" x2="14" y2="24" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="4" y1="14" x2="9" y2="14" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="19" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    name: 'INTERIOR', sub: 'DESIGN',
  },
];

export default function Partners() {
  return (
    <section className="partners-sec">
      <div className="partners-track">
        {PARTNERS.map((p, i) => (
          <div key={i} className="p-logo">
            {p.icon}
            <div className="p-logo-text">
              <span className="p-name">{p.name}</span>
              {p.sub && <span className="p-sub">{p.sub}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}