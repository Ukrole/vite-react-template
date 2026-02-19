import { motion } from "framer-motion";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", position: "relative" }}>
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
            Career
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
            Work Experience
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.04))",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingBottom: "2.5rem",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 41,
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "0.35rem",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: i === 0 ? "#6366f1" : "#e5e5ea",
                      border: `2px solid ${i === 0 ? "#6366f1" : "#c7c7cc"}`,
                      boxShadow: i === 0 ? "0 0 10px rgba(99,102,241,0.5)" : "none",
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    flex: 1,
                    padding: "1.5rem 1.75rem",
                    borderRadius: "0.875rem",
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: 600,
                          color: "#1d1d1f",
                          marginBottom: "0.2rem",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "#6366f1", fontWeight: 500, letterSpacing: "-0.005em" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                      padding: "0.25rem 0.875rem",
                      borderRadius: "9999px",
                      background: "rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.12)",
                      fontSize: "0.8125rem",
                      color: "#6e6e73",
                      whiteSpace: "nowrap",
                      letterSpacing: "-0.005em",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                    fontSize: "0.9375rem",
                    color: "#6e6e73",
                    lineHeight: 1.72,
                    marginTop: "0.875rem",
                    marginBottom: "1.125rem",
                    letterSpacing: "-0.008em",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "0.18rem 0.6rem",
                          borderRadius: "0.375rem",
                          background: "rgba(99,102,241,0.07)",
                          border: "1px solid rgba(99,102,241,0.15)",
                          fontSize: "0.72rem",
                          color: "#6366f1",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
