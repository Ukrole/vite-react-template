import { awards } from "../data/resume";

export default function SectionAwards() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Honors & Awards</h2>
      </div>
      {awards.map((a, i) => (
        <div key={i} className="award-item">
          <div>
            <p className="award-title">{a.title}</p>
            <p className="award-org">{a.org}</p>
          </div>
          <span className="award-year">{a.year}</span>
        </div>
      ))}
    </div>
  );
}
