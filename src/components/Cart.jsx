import { useState } from 'react';
import './Sections.css';

export default function Cart({ onNavigate }) {
  const [items, setItems] = useState([]);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const subPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const vat = 0;
  const ecoTax = 0;
  const delivery = 0;
  const totalPrice = subPrice + vat + ecoTax + delivery;

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="ct-page">
      {/* Hero / Banner */}
      <section className="ct-hero">
        <div className="ss-container">
          <div className="ss-pill">Shop Cart</div>
          <h1 className="ss-hero-title">Interior Designer, Expert Architect</h1>
        </div>
      </section>

      {/* Cart table */}
      <section className="ct-section">
        <div className="ss-container">
          <div className="ct-table">
            <div className="ct-thead">
              <div className="ct-th">Image</div>
              <div className="ct-th">Product Name</div>
              <div className="ct-th">Quantity</div>
              <div className="ct-th">Price</div>
              <div className="ct-th">Total Price</div>
              <div className="ct-th">Action</div>
            </div>

            <div className="ct-tbody">
              {items.length === 0 ? (
                <div className="ct-empty">No items in the cart</div>
              ) : (
                items.map((item) => (
                  <div className="ct-row" key={item.id}>
                    <div className="ct-td">
                      <div className="ct-thumb">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                    <div className="ct-td">{item.title}</div>
                    <div className="ct-td">
                      <div className="ct-qty">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="ct-td">${item.price.toFixed(2)}</div>
                    <div className="ct-td">
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                    <div className="ct-td">
                      <button
                        type="button"
                        className="ct-remove"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="ct-actions">
              <button
                type="button"
                className="ct-btn ct-btn-dark"
                onClick={() => onNavigate && onNavigate('shop')}
              >
                Continue Shopping
              </button>
              <button type="button" className="ct-btn ct-btn-dark">
                Update Cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="ct-summary">
            <div className="ct-sum-row">
              <span>Total Items</span>
              <span>( {totalItems} )</span>
            </div>
            <div className="ct-sum-row">
              <span>Sub Price</span>
              <span>${subPrice.toFixed(0)}</span>
            </div>
            <div className="ct-sum-row">
              <span>Vat</span>
              <span>${vat.toFixed(2)}</span>
            </div>
            <div className="ct-sum-row">
              <span>Eco Tax</span>
              <span>${ecoTax.toFixed(2)}</span>
            </div>
            <div className="ct-sum-row">
              <span>Delivery Charge</span>
              <span>${delivery.toFixed(2)}</span>
            </div>

            <div className="ct-sum-divider" />

            <div className="ct-sum-row ct-sum-total">
              <span>Total Price</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="ct-checkout-wrap">
              <button type="button" className="ct-btn ct-btn-dark">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
