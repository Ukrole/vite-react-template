import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { profile } from "../data/resume";

const TYPING_STRINGS = [
  "PhD Researcher",
  "AI Software Engineer",
  "Federated Learning",
  "Embodied Intelligence",
];

function useTypingEffect(strings: string[]) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    const delay = deleting ? 40 : charIdx === current.length ? 1800 : 70;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % strings.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, strings]);

  return display;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "20%",
          right: "5%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.9rem",
                borderRadius: "9999px",
                border: "1px solid rgba(99,102,241,0.35)",
                background: "rgba(99,102,241,0.08)",
                fontSize: "0.78rem",
                color: "#818cf8",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#818cf8",
                  animation: "pulse 2s infinite",
                  display: "inline-block",
                }}
              />
              OPEN TO RESEARCH COLLABORATIONS
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              color: "#e7edf8",
            }}
          >
            {profile.name}
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 500,
              marginBottom: "1.5rem",
              color: "#64748b",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span className="gradient-text" style={{ minWidth: 0 }}>
              {typed}
            </span>
            <span
              style={{
                width: 2,
                height: "1.2em",
                background: "#818cf8",
                display: "inline-block",
                animation: "blink 1s step-end infinite",
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: "620px",
              marginBottom: "2.5rem",
            }}
          >
            Building statistically efficient and system-aware AI for distributed
            environments — from federated learning to embodied intelligence and
            wireless digital twins.
          </motion.p>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3.5}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.88rem",
              color: "#64748b",
              marginBottom: "2.5rem",
            }}
          >
            <span>📍</span>
            <span>{profile.location}</span>
            <span style={{ margin: "0 0.4rem", opacity: 0.4 }}>·</span>
            <span>The University of Sydney</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#publications")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.92rem",
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              View Publications
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "#94a3b8",
                fontWeight: 500,
                fontSize: "0.92rem",
                cursor: "pointer",
                border: "1px solid rgba(30,45,74,0.9)",
                transition: "color 0.2s, border-color 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#e7edf8";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(99,102,241,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(30,45,74,0.9)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              Get In Touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "#64748b",
                fontWeight: 500,
                fontSize: "0.92rem",
                cursor: "pointer",
                border: "1px solid rgba(30,45,74,0.9)",
                transition: "color 0.2s, border-color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#e7edf8";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#64748b";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(30,45,74,0.9)";
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.72rem", color: "#475569", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(99,102,241,0.6), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
