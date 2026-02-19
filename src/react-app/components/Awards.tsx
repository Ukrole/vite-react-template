import { motion } from "framer-motion";
import { awards } from "../data/resume";

const EMOJI = ["🏆", "🥇", "🎖️", "📋", "💻", "🔬", "🔬", "🌏"];

export default function Awards() {
  return (
    <section
      id="awards"
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
            Recognition
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
            }}
          >
            Honors & Awards
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -3 }}
              style={{
                padding: "1.35rem 1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(30,45,74,0.7)",
                background: "rgba(13,17,23,0.8)",
                display: "flex",
                alignItems: "start",
                gap: "0.875rem",
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
              <span
                style={{
                  fontSize: "1.25rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                {EMOJI[i % EMOJI.length]}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#e2e8f0",
                    lineHeight: 1.4,
                    marginBottom: "0.25rem",
                  }}
                >
                  {award.title}
                </p>
                <p style={{ fontSize: "0.77rem", color: "#6366f1", marginBottom: "0.2rem" }}>
                  {award.org}
                </p>
                <p
                  style={{
                    fontSize: "0.73rem",
                    color: "#475569",
                    fontFamily: "monospace",
                    letterSpacing: "0.04em",
                  }}
                >
                  {award.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
