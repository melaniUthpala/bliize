import { useState } from 'react';
import './Sections.css';
import top from '../assets/blog/top.webp';
import top2 from '../assets/blog/top2.webp';
import top3 from '../assets/blog/top3.webp';

const POSTS = [
  { type: 'image', img: top, author: 'admin', date: '25 Sep 2025', title: 'Personalized Interiors, Endless Possibilities.', excerpt: 'Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.' },
  { type: 'video', img: top2, videoUrl: 'https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1', author: 'admin', date: '25 Sep 2025', title: 'Bringing Style to Life, One Room at a Time.', excerpt: 'Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.' },
  { type: 'image', img: top3, author: 'admin', date: '25 Sep 2025', title: 'Designing Spaces Youll Love Coming Home To.', excerpt: 'Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.' },
];

const CATEGORIES = [
  { name: 'Architecture', count: '03' },
  { name: 'Construction', count: '02' },
  { name: 'Innovation', count: '04' },
  { name: 'Development', count: '05' },
  { name: 'Interior', count: '05' },
  { name: 'Furniture', count: '05' },
];

const RELATED = [
  { img: top, title: 'Personalized Interiors, Endless Possibilities.', date: '25 Sep 2025' },
  { img: top2, title: 'Bringing Style to Life, One Room at a Time.', date: '25 Sep 2025' },
  { img: top3, title: 'Designing Spaces Youll Love Coming Home To.', date: '25 Sep 2025' },
];

const TAGS = ['Architecture', 'Construction', 'Interior', 'Urban', 'Building', 'Development', 'Furniture', 'Space', 'Room', 'Chair'];

const TOTAL_PAGES = 3;

export default function BlogRightSidebar() {
  const [videoOpen, setVideoOpen] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  return (
    <div className="blg-wrap">
      <div className="blg-hero">
        <span className="about-pill">Blog</span>
        <h1 className="blg-hero-title">Latest News Update</h1>
      </div>

      <div className="blg-layout">
        <main className="blg-main">
          {POSTS.map((post, i) => (
            <article key={i} className="blg-post">
              <div className="blg-post-media">
                <img src={post.img} alt={post.title} loading="lazy" />
                {post.type === 'video' && (
                  <button className="blg-play" aria-label="Play video" onClick={() => setVideoOpen(post.videoUrl)}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                )}
              </div>
              <div className="blg-post-body">
                <p className="blg-meta">
                  <span>By:{post.author}</span>
                  <span className="blg-dot">•</span>
                  <span>Date: {post.date}</span>
                </p>
                <h2 className="blg-post-title">{post.title}</h2>
                <p className="blg-excerpt">{post.excerpt}</p>
                <a href="#" className="blg-read-more">Read More..</a>
              </div>
            </article>
          ))}

          <div className="blg-pagination">
            <button className="blg-page-btn blg-page-arrow" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>←</button>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(n => (
              <button key={n} className={`blg-page-btn${page === n ? ' active' : ''}`} onClick={() => setPage(n)}>{n}</button>
            ))}
            <button className="blg-page-btn blg-page-arrow" onClick={() => setPage(p => Math.min(TOTAL_PAGES, p + 1))} disabled={page === TOTAL_PAGES}>→</button>
          </div>
        </main>

        <aside className="blg-sidebar">
          <div className="blg-widget">
            <h3 className="blg-widget-title">Search here</h3>
            <div className="blg-search-box">
              <input type="text" placeholder="Search Post.." value={search} onChange={e => setSearch(e.target.value)} />
              <button aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="blg-widget">
            <h3 className="blg-widget-title">Categories</h3>
            <ul className="blg-cat-list">
              {CATEGORIES.map((c, i) => (
                <li key={i}><span>{c.name}</span><span className="blg-cat-count">{c.count}</span></li>
              ))}
            </ul>
          </div>

          <div className="blg-widget">
            <h3 className="blg-widget-title">Related Posts</h3>
            <ul className="blg-related-list">
              {RELATED.map((r, i) => (
                <li key={i}>
                  <img src={r.img} alt={r.title} loading="lazy" />
                  <div>
                    <p className="blg-rel-title">{r.title}</p>
                    <span className="blg-rel-date">{r.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="blg-widget">
            <h3 className="blg-widget-title">Populer Tags</h3>
            <div className="blg-tags">
              {TAGS.map((t, i) => (
                <span key={i} className="blg-tag">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {videoOpen && (
        <div className="blg-modal" onClick={() => setVideoOpen(null)}>
          <button className="blg-modal-close" onClick={() => setVideoOpen(null)}>×</button>
          <div className="blg-modal-frame" onClick={e => e.stopPropagation()}>
            <iframe src={videoOpen} title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}