import { publications } from "../data/resume";

export default function SectionPublications() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Publications</h2>
        <span className="section-count">{publications.length} papers</span>
      </div>
      {publications.map((pub) => (
        <div key={pub.id} className="pub-card">
          <div className="pub-num">[{pub.id}]</div>
          <div className="pub-body">
            <p className="pub-title">{pub.title}</p>
            <p className="pub-authors">
              {pub.authors.split(/(Z\.\s*Wen)/).map((part, j) =>
                /Z\.?\s*Wen/.test(part)
                  ? <strong key={j} className="pub-me">Z. Wen</strong>
                  : <span key={j} className="other">{part}</span>
              )}
            </p>
            <p className="pub-venue">
              <em>{pub.venue}</em> &middot; {pub.year}{pub.pages ? ` · ${pub.pages}` : ""}
            </p>
            <div className="tags">
              <span className="tag tag-blue">{pub.type}</span>
              {pub.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
