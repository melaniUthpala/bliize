import { useState } from 'react';
import './Sections.css';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    service: '',
    message: '',
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook into your contact handler here
  };

  return (
    <div className="cu-page">
      {/* Hero */}
      <section className="ct-hero">
        <div className="ss-container">
          <div className="ss-pill">Contact Us</div>
        </div>
      </section>

      {/* Info cards */}
      <section className="cu-info-section">
        <div className="ss-container cu-info-grid">
          <div className="cu-info-card">
            <div className="cu-icon">📍</div>
            <h3 className="cu-info-title">Address</h3>
            <p>7 Green Lake Street Crawfordsville,</p>
            <p>IN 47933</p>
          </div>

          <div className="cu-info-card">
            <div className="cu-icon">✉️</div>
            <h3 className="cu-info-title">Email Us</h3>
            <p>bliize@gmail.com</p>
            <p>bliize@gmail.com</p>
          </div>

          <div className="cu-info-card">
            <div className="cu-icon">📞</div>
            <h3 className="cu-info-title">Call Now</h3>
            <p>+1 800 123 456 789</p>
            <p>+1 800 123 654 987</p>
          </div>
        </div>
      </section>

      {/* Question / form */}
      <section className="cu-form-section">
        <div className="ss-container">
          <div className="cu-head">
            <h2 className="cu-title">Have Any Question?</h2>
            <p className="cu-subtitle">
              It is a long established fact that a reader will be distracted
              <br />
              content of a page when looking.
            </p>
          </div>

          <form className="cu-form" onSubmit={handleSubmit}>
            <div className="cu-row-2">
              <input
                type="text"
                placeholder="Your Name*"
                value={form.name}
                maxLength={100}
                onChange={(e) => update('name', e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                value={form.email}
                maxLength={255}
                onChange={(e) => update('email', e.target.value)}
                required
              />
            </div>

            <div className="cu-row-2">
              <input
                type="text"
                placeholder="Address"
                value={form.address}
                maxLength={200}
                onChange={(e) => update('address', e.target.value)}
              />
              <select
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option value="">Services</option>
                <option value="interior">Interior Design</option>
                <option value="architecture">Architecture</option>
                <option value="construction">Construction</option>
                <option value="renovation">Renovation</option>
              </select>
            </div>

            <textarea
              placeholder="Message..."
              rows={6}
              value={form.message}
              maxLength={1000}
              onChange={(e) => update('message', e.target.value)}
            />

            <div className="cu-submit-wrap">
              <button type="submit" className="cu-submit">Get In Touch</button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="cu-map">
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=New+York,NY,USA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
