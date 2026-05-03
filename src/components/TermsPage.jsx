import { useState } from 'react';
import './Sections.css';
import termsmain from '../assets/terms/termsmain.webp';
import terms1 from '../assets/terms/terms1.webp';
import terms2 from '../assets/terms/terms2.webp';

const FAQS = [
  { q: 'What is the cost of a construction project?', a: 'Construction costs vary depending on the scope, materials, and timeline of the project. We provide detailed quotes after an initial consultation.' },
  { q: 'How can I ensure my project stays on schedule?', a: 'We use project management tools and regular check-ins to keep everything on track. Clear milestones and communication are key.' },
  { q: 'How is the quality of materials ensured?', a: 'We work only with trusted suppliers and conduct quality checks at every stage of the construction process.' },
  { q: 'What should I do if there are issues after completion?', a: 'We offer post-completion support and warranty services. Simply contact us and we will address any concerns promptly.' },
  { q: 'What permits are required for my project?', a: 'Required permits depend on the project type and location. Our team handles all permit applications on your behalf.' },
  { q: 'What is the typical timeline for a construction project?', a: 'Timelines vary by project size. Small renovations may take weeks while large builds can take several months.' },
];

export default function TermsPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="terms-page">
      {/* Hero */}
      <div className="terms-hero">
        <span className="about-pill">Terms</span>
      </div>

      {/* Main image */}
      <div className="terms-main-img">
        <img src={termsmain} alt="Terms" />
      </div>

      {/* Content */}
      <div className="terms-content">
        <h2 className="terms-heading">Reasons for Using Website Privacy Policy</h2>
        <p className="terms-para">When you are planning to create a website, it's very easy to overlook creating and adding a website Privacy Policy template. This is because when you are browsing through sites, you may not look at this part unless you really have to — and even then, you might not actually read all the content! However, it's very important to have the terms page on your website, for a number of reasons. Once you've learned all about these reasons, you may realize that adding this part to your website is really essential.</p>
        <p className="terms-para">Even a short Privacy Policy agreement should include several key clauses to safeguard your business. For example, if you're selling online and incorrectly price an item, your Privacy Policy are what will enable you to cancel the order.</p>

        <ul className="terms-list">
          <li>Acceptable use of your website and all of its content.</li>
          <li>Rules on uploading any content in your website.</li>
          <li>Any and all websites which are linked to your own.</li>
          <li>The availability of your website.</li>
          <li>Returns and Guarantees for Customers</li>
        </ul>

        <p className="terms-para">If any estimates of how long it will take the cleaning operatives to complete the job are being provided those are only estimates based on the average time it takes to clean a home or an office of similar size to the Client's, it being difficult to calculate precisely how long such tasks may take and that a degree of flexibility may be required. Please note that one off cleans may take longer to complete due to longer intervals between cleaning sessions, number and type of cleaning tasks required, when compared to the regular maintenance cleaning of the same property.</p>

        {/* Two images */}
        <div className="terms-imgs">
          <img src={terms1} alt="Terms 1" />
          <img src={terms2} alt="Terms 2" />
        </div>

        <p className="terms-para">Post Construction Cleaning (Builders Cleaning), Event Cleaning or badly neglected homes may take up to three times longer than a well maintained home requiring general cleaning. Therefore the Company advises the Client to ask for our specialist cleaning services: Builders Cleaning or Event Cleaning.</p>

        {/* FAQ */}
        <h2 className="terms-heading">Frequently Ask Questions</h2>
        <div className="terms-faq">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {faq.q}
                <span className="faq-icon">{openIdx === i ? '×' : '+'}</span>
              </button>
              {openIdx === i && (
                <div className="faq-a">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}