import { useState, useEffect } from 'react';
import './Sections.css';
import member1 from '../assets/teaminbt/member-1.jpg';
import member2 from '../assets/teaminbt/member-2.jpg';
import member3 from '../assets/teaminbt/member-3.jpg';

const TEAM = [
  { name: 'Benzamin Simon', role: 'Interior Designer', img: member1, bw: false, size: 'sm' },
  { name: 'Harvard Bunion', role: 'Partner & CEO',     img: member2, bw: true,  size: 'lg' },
  { name: 'Robert Fox',     role: 'Senior Architect',  img: member3, bw: false, size: 'sm' },
  { name: 'Benzamin Simon', role: 'Interior Designer', img: member1, bw: false, size: 'sm' },
  { name: 'Harvard Bunion', role: 'Partner & CEO',     img: member2, bw: true,  size: 'lg' },
  { name: 'Robert Fox',     role: 'Senior Architect',  img: member3, bw: false, size: 'sm' },
];

export default function Team() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i >= TEAM.length - 3 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="team-sec" id="team">
      <div className="team-title-wrap">
        <div className="team-big-title">Our Team</div>
      </div>
      <div className="team-slider-wrap">
        <div
          className="team-slider-track"
          style={{ transform: `translateX(${-idx * 33.333}%)` }}
        >
          {TEAM.map((m, i) => (
            <div key={i} className={`tc tc-${m.size}`}>
              <div className="tc-img">
                <img
                  src={m.img}
                  alt={m.name}
                  style={{ filter: m.bw ? 'grayscale(100%)' : 'none' }}
                  loading="lazy"
                />
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}