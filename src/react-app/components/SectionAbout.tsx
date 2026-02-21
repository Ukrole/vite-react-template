import { profile, education } from "../data/resume";
import ChatBot from "./ChatBot";

export default function SectionAbout() {
  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>

      <div className="about-text">
        <p>{profile.about}</p>
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
