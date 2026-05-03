import { useState } from 'react';
import './Sections.css';

import modernWoodenChair   from '../assets/shop/Modern-Wooden-Chair.png';
import pinkVelvetSofa      from '../assets/shop/Pink-Velvet-Sofa.png';
import relaxationChair     from '../assets/shop/Relaxation-Chair.jpg';
import stylishChandelier   from '../assets/shop/Stylish-Chandelier.jpg';
import stylishGreenChair   from '../assets/shop/Stylish-Green-Chair.png';
import stylishMiniTables   from '../assets/shop/Stylish-Mini-Tables.jpg';
import stylishMiniTables1  from '../assets/shop/Stylish-Mini-tables1.jpg';
import stylishWoodenChair2 from '../assets/shop/Stylish-Wooden-Chair.jpg';
import tableLamp           from '../assets/shop/Table-Lamp.jpg';
import tableWithVase       from '../assets/shop/Table-With-Vase.jpg';
import uniqueDesignChair   from '../assets/shop/Unique-Design-Chair.png';
import woodenChair         from '../assets/shop/Wooden-Chair.png';
import woodenMiniRack      from '../assets/shop/Wooden-Mini-Rack.jpg';
import yellowChair         from '../assets/shop/Yellow-Chair.png';
import BrandSection from './BrandSection';

const ALL_PRODUCTS = [
  // page 1
  { slug: 'stylish-wooden-chair',  title: 'Stylish Wooden Chair',  oldPrice: '$250.00', price: '$220.00', img: stylishWoodenChair2  },
  { slug: 'table-with-vase',       title: 'Table With Vase',       oldPrice: '$400.00', price: '$380.00', img: tableWithVase       },
  { slug: 'table-lamp',            title: 'Table Lamp',            oldPrice: '$220.00', price: '$200.00', img: tableLamp           },
  { slug: 'stylish-mini-tables',   title: 'Stylish Mini Tables',   oldPrice: '$420.00', price: '$400.00', img: stylishMiniTables   },
  { slug: 'stylish-chandelier',    title: 'Stylish Chandelier',    oldPrice: '$380.00', price: '$320.00', img: stylishChandelier   },
  { slug: 'wooden-mini-rack',      title: 'Wooden Mini Rack',      oldPrice: '$200.00', price: '$150.00', img: woodenMiniRack      },
  // page 2
  { slug: 'relaxation-chair',      title: 'Relaxation Chair',      oldPrice: '$150.00', price: '$120.00', img: relaxationChair     },
  { slug: 'stylish-mini-tables-1', title: 'Stylish Mini Tables',   oldPrice: '$160.00', price: '$130.00', img: stylishMiniTables1  },
  { slug: 'stylish-green-chair',   title: 'Stylish Green Chair',   oldPrice: '$280.00', price: '$320.00', img: stylishGreenChair   },
  { slug: 'modern-wooden-chair',   title: 'Modern Wooden Chair',   oldPrice: '$380.00', price: '$400.00', img: modernWoodenChair   },
  { slug: 'yellow-chair',          title: 'Yellow Chair',          oldPrice: '$180.00', price: '$220.00', img: yellowChair         },
  { slug: 'pink-velvet-sofa',      title: 'Pink Velvet Sofa',      oldPrice: '$380.00', price: '$240.00', img: pinkVelvetSofa      },
  // page 3
  { slug: 'wooden-chair',          title: 'Wooden Chair',          oldPrice: '$380.00', price: '$240.00', img: woodenChair         },
  { slug: 'unique-design-chair',   title: 'Unique Design Chair',   oldPrice: '$380.00', price: '$240.00', img: uniqueDesignChair   },
  { slug: 'classic-wooden-chair',  title: 'Classic Wooden Chair',  oldPrice: '$250.00', price: '$200.00', img: stylishWoodenChair2 },
];

const PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(ALL_PRODUCTS.length / PER_PAGE);

export default function Shop({ onNavigate }) {
  const [page, setPage]    = useState(1);
  const [wished, setWished] = useState({});

  const products = ALL_PRODUCTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const toggleWish = (slug, e) => {
    e.stopPropagation();
    setWished(w => ({ ...w, [slug]: !w[slug] }));
  };

  return (
    <section className="shp-sec">
      {/* Hero */}
      <div className="shp-hero">
        <span className="about-pill">Shop</span>
        <h1 className="shp-title">Interior Designer, Expert Architect</h1>
      </div>

      {/* Grid */}
      <div className="shp-grid">
        {products.map(p => (
          <article key={p.slug} className="shp-card"
            onClick={() => onNavigate && onNavigate(`shop-single:${p.slug}`)}>

            {/* Image + hover overlay */}
            <div className="shp-img-wrap">
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="shp-overlay">
                <button
                  className={`shp-wish${wished[p.slug] ? ' wished' : ''}`}
                  onClick={e => toggleWish(p.slug, e)}
                  aria-label="Wishlist"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24"
                    fill={wished[p.slug] ? 'currentColor' : 'none'}
                    stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button className="shp-atc"
                  onClick={e => { e.stopPropagation(); }}>
                  Add to cart
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="shp-info">
              <h3 className="shp-name">{p.title}</h3>
              <p className="shp-price">
                <span className="shp-old">{p.oldPrice}</span>
                <span className="shp-new">{p.price}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="shp-pagination">
        <button className="shp-pg-btn shp-pg-arrow"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}>
          ‹
        </button>
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(n => (
          <button key={n}
            className={`shp-pg-btn${page === n ? ' active' : ''}`}
            onClick={() => setPage(n)}>
            {n}
          </button>
        ))}
        <button className="shp-pg-btn shp-pg-arrow"
          onClick={() => setPage(p => Math.min(TOTAL_PAGES, p + 1))}
          disabled={page === TOTAL_PAGES}>
          ›
        </button>
      </div>

      <BrandSection />
    </section>
  );
}