import img1 from '../assets/works/1.webp';
import img2 from '../assets/works/2.webp';
import img3 from '../assets/works/3.webp';
import img4 from '../assets/works/4.webp';
import './Works.css';

const projects = [
  { title: 'Modern House In UK',  cat: 'Building, Apartment', img: img1, cls: 'wc-row1' },
  { title: 'Art Museum In Dubai', cat: 'Building, Apartment', img: img2, cls: 'wc-row1' },
  { title: 'Alexa Complex',       cat: 'Building, Apartment', img: img3, cls: 'wc-row2 wc-wide'   },
  { title: 'Bentila Palace',      cat: 'Building, Apartment', img: img4, cls: 'wc-row2 wc-narrow' },
];

export default function Works() {
  return (
    <section className="works-sec" id="works">
      <header className="works-head">
        <h2>Our Works</h2>
      </header>

      <div className="works-grid">
        {projects.map((p, i) => (
          <div key={i} className={`wc-card ${p.cls}`}>
            <img src={p.img} alt={p.title} />
            <div className="wc-info">
              <h3>{p.title}</h3>
              <p>{p.cat}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="works-foot">
        <a href="#" className="btn-see-all">
          See All Projects <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
