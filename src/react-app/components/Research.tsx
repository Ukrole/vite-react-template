import { motion } from "framer-motion";
import { researchInterests } from "../data/resume";

const COLORS = [
  { bg: "rgba(99,102,241,0.07)", border: "rgba(99,102,241,0.25)", text: "#6366f1" },
  { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", text: "#7c3aed" },
  { bg: "rgba(2,132,199,0.07)", border: "rgba(2,132,199,0.2)", text: "#0284c7" },
  { bg: "rgba(22,163,74,0.07)", border: "rgba(22,163,74,0.2)", text: "#16a34a" },
  { bg: "rgba(234,88,12,0.07)", border: "rgba(234,88,12,0.2)", text: "#ea580c" },
  { bg: "rgba(219,39,119,0.07)", border: "rgba(219,39,119,0.2)", text: "#db2777" },
];

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
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: color.text,
                      marginBottom: "0.2rem",
                      letterSpacing: "-0.012em",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#6e6e73", letterSpacing: "-0.005em" }}>
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
