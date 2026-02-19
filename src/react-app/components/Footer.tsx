import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "2rem 1.5rem",
        borderTop: "1px solid rgba(30,45,74,0.4)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: "0.82rem", color: "#334155" }}>
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
              fontSize: "0.8rem",
              color: "#475569",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#818cf8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#475569";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
