import './Sections.css';
import BrandSection from './BrandSection';

const PLANS = [
  {
    name: 'Basic',
    price: '125',
    features: [
      'Dismantling plan',
      'Measurement of the room',
      'Structure of a project',
      'Scheme of interior finishing',
      '3D-Visualization of premises',
      'Best interior design',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '150',
    features: [
      'Dismantling plan',
      'Measurement of the room',
      'Structure of a project',
      'Scheme of interior finishing',
      '3D-Visualization of premises',
      'Best interior design',
    ],
    featured: true,
  },
  {
    name: 'Platinum',
    price: '350',
    features: [
      'Dismantling plan',
      'Measurement of the room',
      'Structure of a project',
      'Scheme of interior finishing',
      '3D-Visualization of premises',
      'Best interior design',
    ],
    featured: false,
  },
];

export default function PricingPage({ onNavigate }) {
  return (
    <div className="pr-page">
      <section className="pr-hero">
        <span className="about-pill">Pricing</span>
        <h1 className="pr-title">Choose Your Perfect Plan</h1>
        <p className="pr-subtitle">
          Fermentum mus et viverra purus nibh fusce integer. Aenean cursus
          quis pharetra vitae vel sit ac malesuada.
        </p>
      </section>

      <section className="pr-section">
        <div className="pr-grid">
          {PLANS.map((plan) => (
            <article key={plan.name} className={`pr-card ${plan.featured ? 'pr-featured' : ''}`}>
              <h3 className="pr-name">{plan.name}</h3>
              <div className="pr-price-row">
                <span className="pr-price">{plan.price}</span>
                <span className="pr-per">/ Per Month</span>
              </div>
              <div className="pr-divider" />
              <ul className="pr-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`pr-btn ${plan.featured ? 'pr-btn-dark' : 'pr-btn-outline'}`}
                onClick={() => onNavigate && onNavigate('home')}
              >
                Choose Plan
              </button>
            </article>
          ))}
        </div>
        
        <BrandSection />
      </section>
    </div>
  );
}