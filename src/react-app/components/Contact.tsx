import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-wrap">
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>
            Contact
          </p>
          <p style={{ fontSize: "0.9375rem", color: "#333", lineHeight: 1.7, maxWidth: "480px", marginBottom: "1.25rem" }}>
            I'm open to research collaborations, internship enquiries, and conversations about AI and distributed systems. Feel free to reach out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
              { label: "GitHub", href: profile.github, text: "github.com/zikangwen" },
              { label: "LinkedIn", href: profile.linkedin, text: "linkedin.com/in/zikangwen" },
              { label: "Scholar", href: profile.googleScholar, text: "Google Scholar" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", minWidth: 52 }}>{l.label}</span>
                <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="ext-link" style={{ fontSize: "0.875rem" }}>
                  {l.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
