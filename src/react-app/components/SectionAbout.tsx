import { profile, education } from "../data/resume";
import ChatBot from "./ChatBot";

const FACTS = [
  { label: "PhD Candidate", sub: "2026 – Present" },
  { label: "WAM 95", sub: "First Class Honours" },
  { label: "University Medal", sub: "USyd" },
  { label: "Sydney, AU", sub: "Location" },
];

export default function SectionAbout() {
  const sentences = profile.about.match(/[^.!?]+[.!?]+/g) ?? [profile.about];
  const mid = Math.ceil(sentences.length / 3);
  const paras = [
    sentences.slice(0, mid).join(" "),
    sentences.slice(mid, mid * 2).join(" "),
    sentences.slice(mid * 2).join(" "),
  ].filter(Boolean);

  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>

      {/* Key facts row */}
      <div className="facts-row">
        {FACTS.map((f) => (
          <div key={f.label} className="fact-chip">
            <span className="fact-label">{f.label}</span>
            <span className="fact-sub">{f.sub}</span>
          </div>
        ))}
      </div>

      <div className="about-text">
        {paras.map((p, i) => <p key={i}>{p.trim()}</p>)}
      </div>

      <div className="edu-section">
        <h3>Education</h3>
        {education.map((e, i) => (
          <div key={i} className="edu-item">
            <div className="edu-left">
              <div className="edu-icon">{i === 0 ? "PhD" : "BSc"}</div>
              <div>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-detail">{e.institution} · {e.detail}</p>
              </div>
            </div>
            <span className="edu-period">{e.period}</span>
          </div>
        ))}
      </div>

      <ChatBot />
    </div>
  );
}
