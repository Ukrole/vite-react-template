import { publications } from "../data/resume";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
            Publications
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {publications.map((pub) => (
              <div
                key={pub.id}
                style={{ display: "flex", gap: "1.25rem" }}
              >
                <span style={{ fontSize: "0.8rem", color: "#aaa", minWidth: "1.25rem", paddingTop: "0.15rem", fontVariantNumeric: "tabular-nums" }}>
                  [{pub.id}]
                </span>
                <div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#333", marginBottom: "0.3rem" }}>
                    {/* Highlight author Z. Wen */}
                    {pub.authors.split(/(Z\. Wen)/).map((part, j) =>
                      part === "Z. Wen"
                        ? <strong key={j} style={{ color: "#111" }}>Z. Wen</strong>
                        : <span key={j}>{part}</span>
                    )},&nbsp;
                    "<span style={{ fontWeight: 500, color: "#111" }}>{pub.title}</span>,"&nbsp;
                    <em style={{ color: "#555" }}>{pub.venue}</em>,&nbsp;
                    {pub.year}{pub.pages ? `, ${pub.pages}` : ""}.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.4rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, color: "#0066aa", background: "#f0f5ff", border: "1px solid #dce8fa", borderRadius: "3px", padding: "0.1rem 0.4rem" }}>
                      {pub.type}
                    </span>
                    {pub.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
