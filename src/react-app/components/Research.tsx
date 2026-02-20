import { motion } from "framer-motion";
import { researchInterests } from "../data/resume";

export default function Research() {
  return (
    <section
      id="research"
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 0",
        background: "#f5f5f7",
        position: "relative",
      }}
    >
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
              color: "#6e6e73",
              fontWeight: 600,
              marginBottom: "0.6rem",
              textTransform: "uppercase",
            }}
          >
            Focus Areas
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
            Research Interests
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "1rem",
            overflow: "hidden",
            background: "rgba(0,0,0,0.08)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          {researchInterests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              style={{
                padding: "1.75rem 2rem",
                background: "#ffffff",
                cursor: "default",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#f9f9fb";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#aeaeb2",
                  letterSpacing: "0.04em",
                  marginBottom: "0.6rem",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  marginBottom: "0.3rem",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.35,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#6e6e73",
                  letterSpacing: "-0.005em",
                  lineHeight: 1.5,
                }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
