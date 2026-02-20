import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
            Experience
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem", borderBottom: i < experience.length - 1 ? "1px solid #f0f0f0" : "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.2rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111" }}>{exp.role}</span>
                  <span style={{ fontSize: "0.8rem", color: "#888", flexShrink: 0 }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "#0066aa", marginBottom: "0.5rem" }}>{exp.company}</p>
                <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.5rem" }}>{exp.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
