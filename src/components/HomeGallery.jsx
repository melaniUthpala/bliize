import './Sections.css';

import modernArchitecture from '../assets/homeinbt/classic-architecture.jpg';
import classicArchitecture from '../assets/homeinbt/classic-architecture-dark.jpg';
import modernArchitectureS2 from '../assets/homeinbt/modern-architecture-s2.jpg';
import classicInteriorDesign from '../assets/homeinbt/classic-interior-design.jpg';
import classicInteriorDesignS2 from '../assets/homeinbt/classic-interior-design-s2.jpg';
import classicInteriorDesignDark from '../assets/homeinbt/classic-interior-design-dark.jpg';
import renovation from '../assets/homeinbt/renovation.jpg';
import modernWoocommerce from '../assets/homeinbt/modern-woocommerce.jpg';
import urbanPlanning from '../assets/homeinbt/urban-planning.jpg';

// ✅ FIXED imports
import construction from '../assets/homeinbt/construction.jpg';
import constructionS2 from '../assets/homeinbt/costruction-s2.jpg';
import minimalWoocommerceS2 from '../assets/homeinbt/minimal-woocommerce-s2.jpg';

import constructionProfile from '../assets/homeinbt/construction-profile.jpg';
import frelancerArchitect from '../assets/homeinbt/frelancer-architect.jpg';

// ❌ REMOVED lighthome import

const demos = [
  { title: 'Modern Architecture', img: modernArchitecture },
  { title: 'Classic Architecture', img: classicArchitecture },
  { title: 'Modern Architecture 02', img: modernArchitectureS2 },
  { title: 'Classic Architecture Dark', img: classicArchitecture },
  { title: 'Classic Interior Design', img: classicInteriorDesign },
  { title: 'Classic Interior Design 02', img: classicInteriorDesignS2 },
  { title: 'Classic Interior Design Dark', img: classicInteriorDesignDark },
  { title: 'Renovation', img: renovation },
  { title: 'Modern Woocommerce', img: modernWoocommerce },

  // ✅ UPDATED
  { title: 'Minimal Woocommerce', img: minimalWoocommerceS2 },

  { title: 'Urban Planning', img: urbanPlanning },

  // ✅ UPDATED
  { title: 'Construction', img: construction },
  { title: 'Construction 02', img: constructionS2 },

  { title: 'Construction Profile', img: constructionProfile },
  { title: 'Freelancer Architect', img: frelancerArchitect },
];

export default function HomeGallery() {
  return (
    <section className="gallery-sec">
      <div className="gallery-head">
        <p className="gallery-tag">Home Demos</p>
        <h1 className="gallery-title">Choose Your Style</h1>
      </div>

      <div className="gallery-grid">
        {demos.map((demo, i) => (
          <div key={i} className="gallery-card">
            <div className="gallery-img">
              <img src={demo.img} alt={demo.title} loading="lazy" />
            </div>
            <div className="gallery-label">{demo.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}