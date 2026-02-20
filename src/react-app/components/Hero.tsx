import { profile, education } from "../data/resume";

const LINKS = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: profile.github, value: "github.com/zikangwen" },
  { label: "LinkedIn", href: profile.linkedin, value: "LinkedIn" },
  { label: "Scholar", href: profile.googleScholar, value: "Google Scholar" },
];

export default function Hero() {
  return (
    <section style={{ paddingTop: "5.5rem", paddingBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
      <div className="page-wrap">
        <div
          className="hero-grid"
          style={{ display: "flex", alignItems: "flex-start", gap: "3rem", justifyContent: "space-between" }}
        >
          {/* Left: bio block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#111", lineHeight: 1.2, marginBottom: "0.4rem" }}>
              {profile.name}
            </h1>
            <p style={{ fontSize: "0.9375rem", color: "#555", marginBottom: "0.25rem" }}>
              PhD Researcher in Artificial Intelligence
            </p>
            <p style={{ fontSize: "0.875rem", color: "#888", marginBottom: "1.5rem" }}>
              School of Computer Science · The University of Sydney
            </p>

            <p style={{ fontSize: "0.9375rem", color: "#333", lineHeight: 1.72, maxWidth: "520px", marginBottom: "1.75rem" }}>
              {profile.about}
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.25rem" }}>
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="ext-link"
                  style={{ fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.3rem" }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Education summary */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e8e8e8" }}>
              {education.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: i < education.length - 1 ? "0.85rem" : 0 }}>
                  <div style={{ paddingTop: "0.2rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: i === 0 ? "#111" : "#ccc", marginTop: "0.35rem" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{e.degree}</p>
                    <p style={{ fontSize: "0.8125rem", color: "#555" }}>{e.institution} · {e.period}</p>
                    <p style={{ fontSize: "0.8125rem", color: "#888" }}>{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="hero-photo"
            style={{ flexShrink: 0, width: 168, height: 168, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8e8e8", background: "#f5f5f5" }}
          >
            <img
              src="/profile.jpg"
              alt={profile.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
