import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "2.5rem clamp(1.25rem, 5vw, 2.5rem)",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: "0.875rem", color: "#3a3a3c", letterSpacing: "-0.005em" }}>
        © {year}{" "}
        <span className="gradient-text" style={{ fontWeight: 600 }}>
          {profile.name}
        </span>
        . Built with React + Vite + Cloudflare.
      </p>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        {[
          { label: "GitHub", href: profile.github },
          { label: "LinkedIn", href: profile.linkedin },
          { label: "Email", href: `mailto:${profile.email}` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              fontSize: "0.875rem",
              color: "#6e6e73",
              transition: "color 0.2s",
              textDecoration: "none",
              letterSpacing: "-0.005em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#0066cc";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#48484a";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
