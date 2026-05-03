import { useState } from 'react';
import './Sections.css';
import termsImg from '../assets/terms/termsmain.webp';
import privacy1 from '../assets/terms/terms1.webp';
import privacy2 from '../assets/terms/terms2.webp';

const FAQS = [
  { q: 'What is the cost of a construction project?', a: 'The cost of a construction project depends on its scope, materials, and labor requirements. We provide detailed estimates after an initial consultation to ensure transparency.' },
  { q: 'How can I ensure my project stays on schedule?', a: 'Our project managers create detailed timelines and provide regular progress updates so your project stays on track from start to finish.' },
  { q: 'How is the quality of materials ensured?', a: 'We source materials from trusted suppliers and conduct quality checks at every stage to guarantee durability and excellence.' },
  { q: 'What should I do if there are issues after completion?', a: 'We offer post-completion support and warranties. Simply contact our team and we will resolve any issues promptly.' },
  { q: 'What permits are required for my project?', a: 'Required permits vary based on location and project type. Our team handles all permit applications and approvals on your behalf.' },
  { q: 'What is the typical timeline for a construction project?', a: 'Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure.' },
];

export default function Privacy() {
  const [open, setOpen] = useState(5);

  return (
    <div className="pv-page">
      <section className="ct-hero">
        <div className="ss-container">
          <div className="ss-pill">Privacy Policy</div>
        </div>
      </section>

      <section className="pv-hero-img-section">
        <div className="ss-container">
          <div className="pv-hero-img">
            <img src={termsImg} alt="Privacy policy interior" />
          </div>
        </div>
      </section>

      <section className="pv-content-section">
        <div className="ss-container">
          <h2 className="pv-h2">Reasons for Using Website Privacy Policy</h2>
          <p className="pv-p">When you are planning to create a website, it's very easy to overlook creating and adding a website Privacy Policy template. This is because when you are browsing through sites, you may not look at this part unless you really have to — and even then, you might not actually read all the content! However, it's very important to have the terms page on your website, for a number of reasons. Once you've learned all about these reasons, you may realize that adding this part to your website is really essential.</p>
          <p className="pv-p">Even a short Privacy Policy agreement should include several key clauses to safeguard your business. For example, if you're selling online and incorrectly price an item, your Privacy Policy are what will enable you to cancel the order.</p>

          <ul className="pv-list">
            <li>Acceptable use of your website and all of its content.</li>
            <li>Rules on uploading any content in your website.</li>
            <li>Any and all websites which are linked to your own.</li>
            <li>The availability of your website.</li>
            <li>Returns and Guarantees for Customers</li>
          </ul>

          <p className="pv-p">If any estimates of how long it will take the cleaning operatives to complete the job are being provided those are only estimates based on the average time it takes to clean a home or an office of similar size to the Client's, it being difficult to calculate precisely how long such tasks may take and that a degree of flexibility may be required.</p>

          <div className="pv-img-grid">
            <div className="pv-img"><img src={privacy1} alt="Office meeting space" /></div>
            <div className="pv-img"><img src={privacy2} alt="Modern dark interior" /></div>
          </div>

          <p className="pv-p">Post Construction Cleaning (Builders Cleaning), Event Cleaning or badly neglected homes may take up to three times longer than a well maintained home requiring general cleaning. Therefore the Company advises the Client to ask for our specialist cleaning services: Builders Cleaning or Event Cleaning.</p>

          <h2 className="pv-h2 pv-faq-title">Frequently Ask Questions</h2>
          <div className="pv-faq">
            {FAQS.map((item, i) => (
              <div className={`pv-faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button type="button" className="pv-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <span className="pv-faq-icon">{open === i ? '-' : '+'}</span>
                </button>
                {open === i && <div className="pv-faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}