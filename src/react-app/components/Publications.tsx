import { motion } from "framer-motion";
import { publications } from "../data/resume";

export default function Publications() {
  return (
    <section id="publications" style={{ padding: "6rem 0", position: "relative" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
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
            Research Output
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
            }}
          >
            Publications
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              style={{
                padding: "1.75rem 2rem",
                borderRadius: "0.875rem",
                border: "1px solid rgba(30,45,74,0.7)",
                background: "rgba(13,17,23,0.7)",
                display: "flex",
                gap: "1.5rem",
                transition: "border-color 0.25s, box-shadow 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                borderColor: "rgba(99,102,241,0.4)",
                boxShadow: "0 0 30px rgba(99,102,241,0.07)",
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  flexShrink: 0,
                  width: 36,
                  height: 36,
                  borderRadius: "0.5rem",
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#818cf8",
                  fontFamily: "monospace",
                }}
              >
                [{pub.id}]
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title */}
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#e2e8f0",
                    lineHeight: 1.45,
                    marginBottom: "0.5rem",
                  }}
                >
                  {pub.title}
                </p>

                {/* Authors */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748b",
                    marginBottom: "0.4rem",
                    lineHeight: 1.5,
                  }}
                >
                  {pub.authors}
                </p>

                {/* Venue */}
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#818cf8",
                    fontStyle: "italic",
                    marginBottom: "0.75rem",
                  }}
                >
                  {pub.venue}
                  {pub.pages ? `, ${pub.pages}` : ""} · {pub.year}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.65rem",
                      borderRadius: "9999px",
                      background: "rgba(56,189,248,0.08)",
                      border: "1px solid rgba(56,189,248,0.2)",
                      fontSize: "0.72rem",
                      color: "#38bdf8",
                      fontWeight: 500,
                    }}
                  >
                    {pub.type}
                  </span>
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        background: "rgba(30,45,74,0.8)",
                        border: "1px solid rgba(30,45,74,1)",
                        fontSize: "0.72rem",
                        color: "#64748b",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
