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
  padding: "clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 2.5rem)",
  maxWidth: "1120px",
  margin: "0 auto",
};

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", position: "relative" }}>
      {/* Divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "6rem",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.04))",
        }}
      />
      <div style={sectionStyle}>
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
            About
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
                fontSize: "1.0625rem",
                lineHeight: 1.82,
                color: "#6e6e73",
                marginBottom: "2.25rem",
                letterSpacing: "-0.008em",
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
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      color: "#6366f1",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                      letterSpacing: "-0.03em",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#6e6e73", letterSpacing: "-0.005em" }}>
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
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                color: "#6e6e73",
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
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#ffffff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ display: "flex", alignItems: "start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{edu.icon}</span>
                  <div>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#1d1d1f",
                        marginBottom: "0.2rem",
                        lineHeight: 1.35,
                        letterSpacing: "-0.012em",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "#6366f1",
                        marginBottom: "0.25rem",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {edu.institution}
                    </p>
                    <p style={{ fontSize: "0.8125rem", color: "#6e6e73" }}>
                      {edu.period}
                    </p>
                    <p
                      style={{
                      fontSize: "0.8125rem",
                        color: "#6e6e73",
                        marginTop: "0.3rem",
                        lineHeight: 1.5,
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
