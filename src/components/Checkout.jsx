import { useState } from 'react';
import './Sections.css';

const PAYMENT_LOGOS = [
  { name: 'Visa',       text: 'VISA',       color: '#1a1f71' },
  { name: 'MasterCard', text: 'MasterCard', color: '#eb001b' },
  { name: 'Skrill',     text: 'Skrill',     color: '#862165' },
  { name: 'PayPal',     text: 'PayPal',     color: '#003087' },
];

export default function Checkout({ onNavigate }) {
  const [payMethod, setPayMethod]     = useState('card');
  const [couponOpen, setCouponOpen]   = useState(false);
  const [billingOpen, setBillingOpen] = useState(false);
  const [payOpen, setPayOpen]         = useState(true);
  const [card, setCard] = useState({ name: '', number: '', cvv: '', expire: '' });

  const totalItem = 0, subPrice = 0, totalPrice = 0;

  return (
    <div className="chk-page">
      <section className="chk-hero">
        <span className="ss-pill">Checkout</span>
        <h1 className="ss-hero-title">Interior Designer, Expert Architect</h1>
      </section>

      <div className="chk-layout">
        {/* ── Left accordion ── */}
        <div className="chk-accordion">

          {/* Coupon */}
          <div className="chk-acc-item">
            <div className="chk-acc-header" onClick={() => setCouponOpen(o => !o)}>
              <span>Have A Coupon ? Click Here To Enter Your Code.</span>
              <div className="chk-acc-toggle">{couponOpen ? '−' : '+'}</div>
            </div>
            {couponOpen && (
              <div className="chk-acc-body">
                <div className="chk-card-grid" style={{ gridTemplateColumns: '1fr auto' }}>
                  <div className="chk-field"><input type="text" placeholder="Coupon code" /></div>
                  <button className="ct-btn ct-btn-dark" style={{ borderRadius: '4px', padding: '14px 28px' }}>Apply</button>
                </div>
              </div>
            )}
          </div>

          {/* Billing Address */}
          <div className="chk-acc-item">
            <div className="chk-acc-header" onClick={() => setBillingOpen(o => !o)}>
              <span>Billing Address</span>
              <div className="chk-acc-toggle">{billingOpen ? '−' : '+'}</div>
            </div>
            {billingOpen && (
              <div className="chk-acc-body">
                <div className="chk-card-grid">
                  <div className="chk-field"><input type="text" placeholder="First Name" /></div>
                  <div className="chk-field"><input type="text" placeholder="Last Name" /></div>
                  <div className="chk-field"><input type="email" placeholder="Email" /></div>
                  <div className="chk-field"><input type="tel" placeholder="Phone" /></div>
                  <div className="chk-field" style={{ gridColumn: '1/-1' }}>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="chk-field"><input type="text" placeholder="City" /></div>
                  <div className="chk-field"><input type="text" placeholder="Zip Code" /></div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="chk-acc-item">
            <div className="chk-acc-header" onClick={() => setPayOpen(o => !o)}>
              <span>Payment Method</span>
              <div className="chk-acc-toggle">{payOpen ? '−' : '+'}</div>
            </div>
            {payOpen && (
              <div className="chk-acc-body">
                <div className="chk-pay-radios">
                  <label>
                    <input type="radio" name="pay" value="card"
                      checked={payMethod === 'card'} onChange={() => setPayMethod('card')} />
                    Payment By Card
                  </label>
                  <label>
                    <input type="radio" name="pay" value="cod"
                      checked={payMethod === 'cod'} onChange={() => setPayMethod('cod')} />
                    Cash On delivery
                  </label>
                </div>

                <div className="chk-logos">
                  {PAYMENT_LOGOS.map(l => (
                    <div key={l.name} className="chk-logo-box">
                      <span style={{ fontWeight: 700, fontSize: '15px', color: l.color }}>{l.text}</span>
                    </div>
                  ))}
                </div>

                {payMethod === 'card' && (
                  <div className="chk-card-grid">
                    <div className="chk-field">
                      <input type="text" placeholder="Card holder Name"
                        value={card.name} onChange={e => setCard(c => ({ ...c, name: e.target.value }))} />
                    </div>
                    <div className="chk-field">
                      <input type="text" placeholder="Card Number"
                        value={card.number} onChange={e => setCard(c => ({ ...c, number: e.target.value }))} />
                    </div>
                    <div className="chk-field">
                      <input type="text" placeholder="CVV"
                        value={card.cvv} onChange={e => setCard(c => ({ ...c, cvv: e.target.value }))} />
                    </div>
                    <div className="chk-field">
                      <input type="date"
                        value={card.expire} onChange={e => setCard(c => ({ ...c, expire: e.target.value }))} />
                    </div>
                  </div>
                )}

                <button type="button" className="chk-submit">PROCEED TO CHECKOUT</button>
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Cart Total ── */}
        <div className="chk-summary">
          <h3 className="chk-sum-title">Cart Total</h3>
          <div className="chk-sum-row"><span>Total Item</span><span>{totalItem}</span></div>
          <div className="chk-sum-row"><span>Sub Price</span><span>${subPrice}</span></div>
          <div className="chk-sum-row total"><span>Total Price</span><span>${totalPrice}</span></div>
        </div>
      </div>
    </div>
  );
}