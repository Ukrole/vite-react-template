import { motion } from "framer-motion";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "#f5f5f7",
        position: "relative",
      }}
    >
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 2.5rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
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
            What I've Built
          </p>
          <h2
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.032em",
              lineHeight: 1.08,
            }}
          >
            Projects
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
            gap: "1.25rem",
          }}
          className="projects-grid"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -5 }}
              style={{
                padding: "1.75rem",
                borderRadius: "0.875rem",
                border: proj.highlight
                  ? "1px solid rgba(99,102,241,0.3)"
                  : "1px solid rgba(0,0,0,0.08)",
                background: proj.highlight
                  ? "rgba(99,102,241,0.06)"
                  : "#ffffff",
                boxShadow: proj.highlight
                  ? "none"
                  : "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                cursor: "default",
                transition: "box-shadow 0.25s",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {proj.highlight && (
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    padding: "0.18rem 0.6rem",
                    borderRadius: "9999px",
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    fontSize: "0.68rem",
                    color: "#6366f1",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  }}
                >
                  FEATURED
                </span>
              )}

              <div style={{ display: "flex", alignItems: "start", gap: "1rem", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontSize: "1.8rem",
                    flexShrink: 0,
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    background: "rgba(0,0,0,0.06)",
                  }}
                >
                  {proj.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: "0.25rem",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "#6366f1", fontWeight: 500, letterSpacing: "-0.005em" }}>
                    {proj.org}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#6e6e73",
                  lineHeight: 1.72,
                  marginBottom: "1.375rem",
                  flex: 1,
                  letterSpacing: "-0.008em",
                }}
              >
                {proj.description}
              </p>

              <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.22rem 0.65rem",
                      borderRadius: "0.375rem",
                      background: "rgba(0,0,0,0.1)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      fontSize: "0.72rem",
                      color: "#6e6e73",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
