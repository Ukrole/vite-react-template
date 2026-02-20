import { experience } from "../data/resume";

export default function SectionExperience() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>
      {experience.map((e, i) => (
        <div key={i} className="exp-item">
          <div className="exp-header">
            <span className="exp-role">{e.role}</span>
            <span className="exp-period">{e.period}</span>
          </div>
          <p className="exp-company">{e.company}</p>
          <p className="exp-desc">{e.description}</p>
          <div className="tags">{e.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </div>
      ))}
    </div>
  );
}
