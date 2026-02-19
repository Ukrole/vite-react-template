import { motion } from "framer-motion";
import { publications } from "../data/resume";

export default function Publications() {
  return (
    <section id="publications" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", position: "relative" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 2.5rem)",
        }}
      >
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
            Research Output
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
                border: "1px solid rgba(0,0,0,0.08)",
                background: "#ffffff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
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
                  color: "#6366f1",
                  fontFamily: "monospace",
                }}
              >
                [{pub.id}]
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title */}
                <p
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "#1d1d1f",
                    lineHeight: 1.42,
                    marginBottom: "0.55rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {pub.title}
                </p>

                {/* Authors */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6e6e73",
                    marginBottom: "0.45rem",
                    lineHeight: 1.55,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {pub.authors}
                </p>

                {/* Venue */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6366f1",
                    fontStyle: "italic",
                    marginBottom: "0.875rem",
                    letterSpacing: "-0.005em",
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
                      color: "#0284c7",
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
                        background: "rgba(0,0,0,0.1)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        fontSize: "0.72rem",
                        color: "#6e6e73",
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
