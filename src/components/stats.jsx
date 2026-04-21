import { useEffect, useRef, useState } from 'react';
import './Sections.css';

/* ══════════════════════════════════════════
   STATS — White bg, giant serif numbers
   Count-up animation on scroll
   ══════════════════════════════════════════ */
const STATS_DATA = [
  { num: 215, label: 'CURRENT CLIENTS' },
  { num: 550, label: 'PROJECTS COMPLETE' },
  { num: 21,  label: 'YEARS OF EXPERIENCE' },
  { num: 25,  label: 'OFFICES WORLDWIDE' },
];

function Counter({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 2000;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            setVal(Math.round(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref} className="stat-n">{val}+</div>;
}

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="stats-grid">
        {STATS_DATA.map((s, i) => (
          <div key={i} className="stat-item">
            <Counter target={s.num} />
            <div className="stat-l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}