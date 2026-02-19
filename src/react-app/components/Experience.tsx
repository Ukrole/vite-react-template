import { motion } from "framer-motion";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 0", position: "relative" }}>
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
            Career
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
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
                "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.05))",
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
                      background: i === 0 ? "#818cf8" : "#1e2d4a",
                      border: `2px solid ${i === 0 ? "#6366f1" : "#2d3e5b"}`,
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
                    border: "1px solid rgba(30,45,74,0.7)",
                    background: "rgba(13,17,23,0.7)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(30,45,74,0.7)";
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
                          fontSize: "0.97rem",
                          fontWeight: 700,
                          color: "#e2e8f0",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: "0.83rem", color: "#6366f1", fontWeight: 500 }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        padding: "0.2rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(30,45,74,0.8)",
                        border: "1px solid rgba(30,45,74,1)",
                        fontSize: "0.75rem",
                        color: "#64748b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#94a3b8",
                      lineHeight: 1.72,
                      marginTop: "0.75rem",
                      marginBottom: "1rem",
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
                          color: "#818cf8",
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
