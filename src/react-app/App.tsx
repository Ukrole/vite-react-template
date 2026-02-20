import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SectionAbout from "./components/SectionAbout";
import SectionPublications from "./components/SectionPublications";
import SectionProjects from "./components/SectionProjects";
import SectionExperience from "./components/SectionExperience";
import SectionAwards from "./components/SectionAwards";

const SECTIONS: Record<string, React.ReactNode> = {
  about: <SectionAbout />,
  publications: <SectionPublications />,
  projects: <SectionProjects />,
  experience: <SectionExperience />,
  awards: <SectionAwards />,
};

export default function App() {
  const [active, setActive] = useState("about");
  return (
    <div className="app-card">
      <Navbar active={active} setActive={setActive} />
      <div className="card-body">
        <Sidebar />
        <main className="main-content">
          <div key={active} className="section-fade">
            {SECTIONS[active]}
          </div>
        </main>
      </div>
    </div>
  );
}
