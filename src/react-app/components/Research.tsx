import { motion } from "framer-motion";
import { researchInterests } from "../data/resume";

const COLORS = [
  { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.25)", text: "#818cf8" },
  { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", text: "#a78bfa" },
  { bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.25)", text: "#38bdf8" },
  { bg: "rgba(34,197,94,0.07)", border: "rgba(34,197,94,0.2)", text: "#4ade80" },
  { bg: "rgba(249,115,22,0.07)", border: "rgba(249,115,22,0.2)", text: "#fb923c" },
  { bg: "rgba(236,72,153,0.07)", border: "rgba(236,72,153,0.2)", text: "#f472b6" },
];

export default function Research() {
  return (
    <section
      id="research"
      style={{
        padding: "6rem 0",
        background: "rgba(13,17,23,0.6)",
        position: "relative",
      }}
    >
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
            Focus Areas
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
            }}
          >
            Research Interests
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {researchInterests.map((item, i) => {
            const color = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{
                  padding: "1.5rem 1.75rem",
                  borderRadius: "0.75rem",
                  background: color.bg,
                  border: `1px solid ${color.border}`,
                  cursor: "default",
                  transition: "box-shadow 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: color.text,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
