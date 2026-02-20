import { motion } from "framer-motion";
import { awards } from "../data/resume";

export default function Awards() {
  return (
    <section
      id="awards"
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
            Recognition
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
                border: "1px solid rgba(0,0,0,0.08)",
                background: "#ffffff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "start",
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
              <div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#1d1d1f",
                    lineHeight: 1.4,
                    marginBottom: "0.25rem",
                  }}
                >
                  {award.title}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#6366f1", marginBottom: "0.2rem", letterSpacing: "-0.005em" }}>
                  {award.org}
                </p>
                <p
                  style={{
                  fontSize: "0.8125rem",
                  color: "#6e6e73",
                  letterSpacing: "0.02em",
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
