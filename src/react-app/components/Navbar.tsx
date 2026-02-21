import { profile } from "../data/resume";

const TABS = [
  { id: "about",        label: "About" },
  { id: "projects",     label: "Projects" },
  { id: "experience",   label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "awards",       label: "Awards" },
];

interface Props { active: string; setActive: (s: string) => void; }

export default function Navbar({ active, setActive }: Props) {
  return (
    <nav className="card-nav">
      <button className="nav-brand" onClick={() => setActive("about")}>
        <img src="/signature.png" alt={profile.name} className="nav-signature" />
      </button>
      <div className="nav-pills">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`nav-pill${active === t.id ? " active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
