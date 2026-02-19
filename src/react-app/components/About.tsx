import { motion, type Variants } from "framer-motion";
import { profile, education } from "../data/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

const sectionStyle = {
  padding: "6rem 1.5rem",
  maxWidth: "1100px",
  margin: "0 auto",
};

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", position: "relative" }}>
      {/* Divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "6rem",
          background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3))",
        }}
      />
      <div style={sectionStyle}>
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
            About
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e7edf8",
              letterSpacing: "-0.02em",
            }}
          >
            About Me
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "#94a3b8",
                marginBottom: "2rem",
              }}
            >
              {profile.about}
            </p>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Publications", value: "2+" },
                { label: "Projects", value: "4+" },
                { label: "WAM", value: "95" },
                { label: "Year", value: "PhD '26" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontSize: "1.9rem",
                      fontWeight: 700,
                      color: "#818cf8",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#475569" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: "#475569",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              Education
            </p>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  padding: "1.25rem 1.4rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(30,45,74,0.7)",
                  background: "rgba(13,17,23,0.7)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(30,45,74,0.7)";
                }}
              >
                <div style={{ display: "flex", alignItems: "start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{edu.icon}</span>
                  <div>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "#e2e8f0",
                        marginBottom: "0.2rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#6366f1",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {edu.institution}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#475569" }}>
                      {edu.period}
                    </p>
                    <p
                      style={{
                        fontSize: "0.76rem",
                        color: "#64748b",
                        marginTop: "0.25rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {edu.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
