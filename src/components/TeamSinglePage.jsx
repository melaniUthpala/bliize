import './Sections.css';
import robbert from "../assets/teamsingle/robbert.webp";
import contactBg from "../assets/teamsingle/contact-bg-2.jpg";
import BrandSection from './BrandSection';
const SKILLS = [
  { name: 'Construction Design', val: 85 },
  { name: 'Architecture Design', val: 80 },
  { name: 'Interior Design',     val: 95 },
  { name: 'Furniture & Decor',   val: 70 },
];

const EDU = [
  'Master of Landscape Architecture',
  'Architecture and Sustainable Heritage MA',
  'Landscape architecture',
  'Master of Architecture (M.Arch or MArch).',
];

export default function TeamSinglePage() {
  return (
    <>
      {/* Hero */}
      <section className="tsp-hero">
        <div className="tsp-hero-inner">
          <span className="about-pill">Team Single</span>
          <h1 className="tsp-name-big">Robert Fox</h1>
        </div>
      </section>

      {/* Image + Personal Info */}
      <section className="tsp-info-sec">
        <div className="tsp-info-grid">
          <div className="tsp-photo">
            <img src={robbert} alt="Robert Fox" loading="lazy" />
          </div>
          <div className="tsp-info">
            <h2 className="tsp-h2">Personal Info</h2>
            <ul className="tsp-info-list">
              <li><span>Positon:</span><b>Senior Interior Designer</b></li>
              <li><span>Practice Area:</span><b>Interior &amp; Architecture</b></li>
              <li><span>Experience:</span><b>10 years, Bliize Architecture Agency.</b></li>
              <li><span>Address:</span><b>6391 Elgin St. Celina, Delaware 10299</b></li>
              <li><span>Phone:</span><b>(603) 555-0123</b></li>
              <li><span>Email:</span><b>youremail@gmail.com.</b></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="tsp-edu-sec">
        <div className="tsp-edu-grid">
          <div></div>
          <div>
            <h2 className="tsp-h2">Education</h2>
            <ul className="tsp-edu-list">
              {EDU.map((e, i) => (
                <li key={i}><span className="tsp-arrows">»</span> {e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Info + Skills */}
      <section className="tsp-pro-sec">
        <div className="tsp-pro-grid">
          <div>
            <h2 className="tsp-h2">Professional Info.</h2>
            <p className="tsp-p tsp-drop">
              <span className="tsp-drop-cap">M</span>odern Buildings Ipsum is simply dummy text of the best printing and typesetting industry. Lorem Ipsum has beening the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a good type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
            <p className="tsp-p">
              Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium. Nulla thurg varius purus bibendum pellentesque eu sit nascetur good vitae. Nibh tortor etrutnibh tincidunt tempor proin. Est placerat felis pellentesque temupus condimentum.
            </p>
          </div>
          <div>
            <h2 className="tsp-h2">Professional Skills</h2>
            <div className="tsp-skills">
              {SKILLS.map((s, i) => (
                <div key={i} className="tsp-skill">
                  <div className="tsp-skill-top">
                    <span>{s.name}</span><b>{s.val}%</b>
                  </div>
                  <div className="tsp-bar"><div className="tsp-bar-fill" style={{ width: `${s.val}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get a Free Consultation */}
      <section className="tsp-contact-sec" style={{ backgroundImage: `url(${contactBg})` }}>
        <div className="tsp-contact-card">
          <h2 className="tsp-h2 tsp-contact-h">Get A Free Consultation</h2>
          <form className="tsp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="tsp-field"><label>Name*</label><input type="text" /></div>
            <div className="tsp-field"><label>Email*</label><input type="email" /></div>
            <div className="tsp-field"><label>Phone</label><input type="tel" /></div>
            <div className="tsp-field"><label>Subject*</label><select defaultValue=""><option value="" disabled>Select</option><option>Architecture</option><option>Interior</option><option>Construction</option></select></div>
            <div className="tsp-field"><label>Message</label><textarea rows={4}></textarea></div>
            <button type="submit" className="tsp-send">Send Message</button>
          </form>
        </div>

        
      <BrandSection />
      </section>
    </>
  );
}
