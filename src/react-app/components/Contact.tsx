import { motion } from "framer-motion";
import { profile } from "../data/resume";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "✉️",
    color: "#6366f1",
  },
  {
    label: "GitHub",
    value: "github.com/zikangwen",
    href: profile.github,
    icon: "⌨️",
    color: "#7c3aed",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zikangwen",
    href: profile.linkedin,
    icon: "💼",
    color: "#0284c7",
  },
  {
    label: "Google Scholar",
    value: "Scholar Profile",
    href: profile.googleScholar,
    icon: "📖",
    color: "#16a34a",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "clamp(4rem, 8vw, 8rem) 0 clamp(3rem, 6vw, 5rem)", position: "relative" }}>
      {/* Top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 2.5rem)",
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
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
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
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.032em",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "1.0625rem",
              color: "#6e6e73",
              lineHeight: 1.78,
              letterSpacing: "-0.008em",
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
                border: "1px solid rgba(0,0,0,0.1)",
                background: "#ffffff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
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
                el.style.borderColor = "rgba(0,0,0,0.1)";
                el.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{link.icon}</span>
              <div>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    color: "#6e6e73",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.35rem",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: link.color,
                    fontWeight: 500,
                    letterSpacing: "-0.008em",
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
              padding: "0.9375rem 2.75rem",
              borderRadius: "0.625rem",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9375rem",
              letterSpacing: "-0.008em",
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
