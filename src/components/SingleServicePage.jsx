import './Sections.css';
import excavatorIcon from '../assets/servicespageicon/excavator.23003798.svg';
import contractorIcon from '../assets/servicespageicon/contractor.2eb1d954.svg';
import propertyIcon from '../assets/servicespageicon/property.eddc46ff.svg';
import BrandSection from './BrandSection';
const SERVICES_LIST = [
  { slug: 'custom-solutions',   title: 'Custom Solutions',   icon: excavatorIcon,  desc: 'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { slug: 'house-renovation',   title: 'House Renovation',   icon: contractorIcon, desc: 'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { slug: 'general-contractor', title: 'General Contractor', icon: excavatorIcon,  desc: 'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { slug: 'city-landmarks',     title: 'City Landmarks',     icon: propertyIcon,   desc: 'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
];

const DATA = Object.fromEntries(SERVICES_LIST.map(s => [s.slug, s]));

export default function SingleServicePage({ slug, onNavigate }) {

  // ── GRID VIEW (Services page) ──
  if (!slug) {
    return (
      <section className="services-page">
        <div className="services-page-hero">
          <span className="about-pill">Services</span>
          <h1 className="services-page-title">What's part of the service</h1>
        </div>
        <div className="services-page-grid">
          {SERVICES_LIST.map((s) => (
            <div
              key={s.slug}
              className="services-page-card"
              onClick={() => onNavigate(`service-single:${s.slug}`)}
            >
              <div className="services-page-icon">
                <img src={s.icon} alt={s.title} />
              </div>
              <h3 className="services-page-card-title">{s.title}</h3>
              <p className="services-page-card-desc">{s.desc}</p>
              <span className="services-page-more">Discover More...</span>
            </div>
          ))}
        </div>
        
          {/* ── BRAND SECTION (reuse) ── */}
          <BrandSection />
      </section>
    );
  }

  // ── SINGLE SERVICE VIEW ──
  const s = DATA[slug] || SERVICES_LIST[0];
  return (
    <section className="ssp-hero">
      <div>
        <span className="about-pill">Services</span>
        <div className="ssp-icon">
          <img src={s.icon} alt={s.title} />
        </div>
        <h1 className="ssp-title">{s.title}</h1>
        <p className="ssp-sub">
          Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ marginTop: '40px' }}>
          <button
            className="sp-more"
            onClick={() => onNavigate('services')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            ← Back to Services
          </button>
        </p>
      </div>
      <BrandSection />
      
    </section>
  );
}