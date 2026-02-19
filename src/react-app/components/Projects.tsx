import { motion } from "framer-motion";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 0",
        background: "rgba(13,17,23,0.5)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
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
            What I've Built
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
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
                  : "1px solid rgba(30,45,74,0.7)",
                background: proj.highlight
                  ? "rgba(99,102,241,0.05)"
                  : "rgba(13,17,23,0.8)",
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
                    color: "#818cf8",
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
                    background: "rgba(30,45,74,0.5)",
                  }}
                >
                  {proj.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginBottom: "0.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "#6366f1", fontWeight: 500 }}>
                    {proj.org}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  flex: 1,
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
                      background: "rgba(30,45,74,0.8)",
                      border: "1px solid rgba(30,45,74,1)",
                      fontSize: "0.72rem",
                      color: "#64748b",
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
