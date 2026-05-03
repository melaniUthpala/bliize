import { useState } from 'react';
import './Sections.css';
import productImage from '../assets/shop/Stylish-Wooden-Chair.jpg';

export default function ShopSingle({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="ss-page">
      {/* Hero / Banner */}
      <section className="ss-hero">
        <div className="ss-container">
          <div className="ss-pill">Shop Single</div>
          <h1 className="ss-hero-title">Product Single</h1>
        </div>
      </section>

      {/* Main product */}
      <section className="ss-section">
        <div className="ss-container ss-product-grid">
          <div className="ss-media">
            <img src={productImage} alt="Stylish Wooden Chair" />
          </div>

          <div className="ss-info">
            <h2 className="ss-title">Stylish Wooden Chair</h2>

            <div className="ss-rating">
              <span className="ss-stars">
                <span className="ss-star filled">★</span>
                <span className="ss-star filled">★</span>
                <span className="ss-star filled">★</span>
                <span className="ss-star filled">★</span>
                <span className="ss-star">☆</span>
              </span>
              <span className="ss-reviews">(25 customer reviews)</span>
            </div>

            <div className="ss-price">
              <span className="ss-price-now">220.00</span>
              <span className="ss-price-old">250.00</span>
            </div>

            <p className="ss-desc">
              There are many variations of passages of Lorem Ipsum and available,
              but the majority have suffered alteration in somey form, by injected
              humour, or randomised words which don't look even slightly believable.
            </p>

            <ul className="ss-features">
              <li>Going through the cites of the word in classical.</li>
              <li>There are many variations of passages.</li>
              <li>Making it look like readable and spoken English.</li>
            </ul>

            <button type="button" className="ss-add-btn">Add To Cart</button>

            <div className="ss-meta">
              <p><strong>Categories:</strong> <a href="#">Interior Designer</a></p>
              <p><strong>Tags:</strong> <a href="#">Bedrooms</a>, <a href="#">Sofas</a>, <a href="#">Chandelier</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Description / Review */}
      <section className="ss-section ss-tabs-section">
        <div className="ss-container">
          <div className="ss-tabs">
            <button
              type="button"
              className={`ss-tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              type="button"
              className={`ss-tab ${activeTab === 'review' ? 'active' : ''}`}
              onClick={() => setActiveTab('review')}
            >
              Review
            </button>
          </div>

          <div className="ss-tab-content">
            {activeTab === 'description' && (
              <div className="ss-tab-panel">
                <p>
                  Samsa woke from troubled dreams, he found himself transformed in
                  his bed into a horrible vermin. He lay on his armour-like back,
                  and if he lifted his head a little he could see his brown belly,
                  slightly domed and divided by arches into stiff sections. The
                  bedding was hardly able to cover it and seemed ready to slide off
                  any moment. His many legs, pitifully thin compared with the size
                  of the rest of him.
                </p>
                <p>
                  The bedding was hardly able to cover it and seemed ready to slide
                  off any moment. His many legs, pitifully thin compared with the
                  size of the rest of himSamsa woke from troubled dreams, he found
                  himself transformed in his bed into a horrible vermin.
                </p>
              </div>
            )}

            {activeTab === 'review' && (
              <div className="ss-tab-panel">
                <p>No reviews yet. Be the first to review this product.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
