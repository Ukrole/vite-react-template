import { projects } from "../data/resume";

export default function SectionProjects() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      {projects.map((p, i) => (
        <div key={i} className="proj-card">
          <p className="proj-title">{p.title}</p>
          <p className="proj-org">{p.org}</p>
          <p className="proj-desc">{p.description}</p>
          <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </div>
      ))}
    </div>
  );
}
