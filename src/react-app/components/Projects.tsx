import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
            Projects
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {projects.map((proj, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 0",
                  borderBottom: i < projects.length - 1 ? "1px solid #f0f0f0" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.375rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#111" }}>{proj.title}</span>
                  <span style={{ fontSize: "0.8rem", color: "#888" }}>{proj.org}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.6rem" }}>
                  {proj.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
