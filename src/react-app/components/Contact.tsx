import { motion } from "framer-motion";
import { profile } from "../data/resume";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "✉️",
    color: "#818cf8",
  },
  {
    label: "GitHub",
    value: "github.com/zikangwen",
    href: profile.github,
    icon: "⌨️",
    color: "#a78bfa",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zikangwen",
    href: profile.linkedin,
    icon: "💼",
    color: "#38bdf8",
  },
  {
    label: "Google Scholar",
    value: "Scholar Profile",
    href: profile.googleScholar,
    icon: "📖",
    color: "#4ade80",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0 4rem", position: "relative" }}>
      {/* Top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: "#6366f1",
              fontWeight: 600,
              marginBottom: "0.6rem",
              textTransform: "uppercase",
            }}
          >
            Get in Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
              marginBottom: "1.2rem",
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "1rem",
              color: "#64748b",
              lineHeight: 1.75,
            }}
          >
            I'm always open to research collaborations, interesting projects,
            and conversations about AI, distributed systems, or anything in between.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              whileHover={{ y: -5 }}
              style={{
                padding: "1.75rem",
                borderRadius: "0.875rem",
                border: "1px solid rgba(30,45,74,0.8)",
                background: "rgba(13,17,23,0.8)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${link.color}50`;
                el.style.boxShadow = `0 0 25px ${link.color}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(30,45,74,0.8)";
                el.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{link.icon}</span>
              <div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: link.color,
                    fontWeight: 500,
                  }}
                >
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Email button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ marginTop: "3rem" }}
        >
          <a
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            Say Hello ✉️
          </a>
        </motion.div>
      </div>
    </section>
  );
}
