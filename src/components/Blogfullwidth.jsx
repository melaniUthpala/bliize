import { useState } from 'react';
import './Sections.css';
import top from "../assets/blog/top.webp";
import top2 from "../assets/blog/top2.webp";
import top3 from "../assets/blog/top3.webp";

const YT_EMBED = 'https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1';

const POSTS = [
  { img: top,  title: 'Personalized Interiors, Endless Possibilities.', date: '25 Sep 2025', type: 'image' },
  { img: top2, title: 'Bringing Style to Life, One Room at a Time.',   date: '25 Sep 2025', type: 'video' },
  { img: top3, title: 'Designing Spaces Youll Love Coming Home To.',   date: '25 Sep 2025', type: 'image' },
];

export default function BlogFullWidth() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <article className="brs-wrap">
      <div className="brs-hero">
        <span className="brs-pill">Blog</span>
        <h1 className="brs-title">Latest News Update</h1>
      </div>

      <div className="bfw-main">
        {POSTS.map((p, i) => (
          <div key={i} className="brs-post bfw-post">
            <div className="brs-post-img">
              <img src={p.img} alt={p.title} loading="lazy" />
              {p.type === 'video' && (
                <button className="brs-play" onClick={() => setOpen(true)} aria-label="Play video">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
              )}
            </div>
            <div className="brs-meta">
              <span><strong>By:</strong>admin</span>
              <span className="brs-dot">•</span>
              <span>Date: {p.date}</span>
            </div>
            <h2 className="brs-post-title">{p.title}</h2>
            <p className="brs-post-desc">
              Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
            </p>
            <a href="#" className="brs-readmore">Read More..</a>
          </div>
        ))}

        <div className="brs-pagination">
          <button onClick={() => setPage(Math.max(1, page - 1))} className="brs-page-btn" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {[1, 2, 3].map((n) => (
            <button key={n} onClick={() => setPage(n)} className={`brs-page-btn ${page === n ? 'active' : ''}`}>{n}</button>
          ))}
          <button onClick={() => setPage(Math.min(3, page + 1))} className="brs-page-btn" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="brs-modal" onClick={() => setOpen(false)}>
          <div className="brs-modal-frame" onClick={(e) => e.stopPropagation()}>
            <button className="brs-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <iframe src={YT_EMBED} title="YouTube video" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </article>
  );
}
