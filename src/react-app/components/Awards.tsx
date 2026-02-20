import { awards } from "../data/resume";

export default function Awards() {
  return (
    <section id="awards" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
            Honors & Awards
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {awards.map((a, i) => (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.25rem",
                  paddingTop: "0.75rem", paddingBottom: "0.75rem",
                  borderBottom: i < awards.length - 1 ? "1px solid #f0f0f0" : "none" }}
              >
                <div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111" }}>{a.title}</span>
                  <span style={{ fontSize: "0.8rem", color: "#888", marginLeft: "0.6rem" }}>{a.org}</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "#aaa", flexShrink: 0 }}>{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
