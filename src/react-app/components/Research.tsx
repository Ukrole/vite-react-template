import { researchInterests } from "../data/resume";

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "0.75rem" }}>
            Research Interests
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.5rem 2rem" }}>
            {researchInterests.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid #f0f0f0" }}
              >
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#111" }}>{item.label}</span>
                <span style={{ fontSize: "0.75rem", color: "#888" }}>— {item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
