import './Sections.css';
import blog1 from '../../assets/bloginbt/blog-1.jpg';
import blog2 from '../../assets/bloginbt/blog-2.jpg';
import blog3 from '../../assets/bloginbt/blog-3.jpg';

/* ══════════════════════════════════════════
   BLOG — 3 column card grid
   ══════════════════════════════════════════ */
const BLOGS = [
  {
    img: blog1,
    cat: 'Architecture',
    date: 'Mar 15, 2025',
    title: 'The Future of Sustainable Urban Design',
    desc: 'Exploring how modern architecture embraces sustainability without compromising aesthetic vision or functional excellence.',
  },
  {
    img: blog2,
    cat: 'Interior',
    date: 'Feb 28, 2025',
    title: 'Biophilic Design: Bringing Nature Indoors',
    desc: 'How natural elements and organic materials are reshaping the way we think about interior spaces and well-being.',
  },
  {
    img: blog3,
    cat: 'Construction',
    date: 'Jan 20, 2025',
    title: 'Modern Construction Technologies in 2025',
    desc: 'From 3D printing to modular construction — the innovations transforming how we build the structures of tomorrow.',
  },
];

export default function Blog() {
  return (
    <section className="blog-sec" id="blog">
      <div className="blog-head">
        <span className="sec-tag">Latest News</span>
        <div className="sec-big">Our Blog</div>
      </div>
      <div className="blog-grid">
        {BLOGS.map((b, i) => (
          <div key={i} className="bc">
            <div className="bc-img"><img src={b.img} alt={b.title} loading="lazy" /></div>
            <div className="bc-cat">{b.cat} • {b.date}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <a href="#" className="bc-link">
              Read More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}