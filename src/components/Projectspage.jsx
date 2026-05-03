import { Link } from "@tanstack/react-router";
import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/project-2.jpg";
import img3 from "@/assets/project-3.jpg";
import img4 from "@/assets/project-4.jpg";
import "./Sections.css";

const PROJECTS = [
  { title: "Modern House In UK", cat: "Building, Apartment", img: img1, cls: "pp-row1" },
  { title: "Art Museum In Dubai", cat: "Building, Apartment", img: img2, cls: "pp-row1" },
  { title: "Alexa Complex", cat: "Building, Apartment", img: img3, cls: "pp-row2 pp-wide" },
  { title: "Bentila Palace", cat: "Building, Apartment", img: img4, cls: "pp-row2 pp-narrow" },
];

export default function ProjectsPage() {
  return (
    <section className="pp-sec">
      <div className="pp-container">
        <div className="pp-head">
          <span className="pp-pill">Projects</span>
          <h1 className="pp-title">Dream House Residentials</h1>
        </div>

        <div className="pp-grid">
          {PROJECTS.map((p, i) => (
            <Link
              key={i}
              to="/projects"
              className={`pp-card ${p.cls}`}
            >
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="pp-info">
                <h3>{p.title}</h3>
                <p>{p.cat}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}