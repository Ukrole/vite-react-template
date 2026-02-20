import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e8e8e8", padding: "1.5rem 0", marginTop: "0" }}>
      <div className="page-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontSize: "0.8rem", color: "#aaa" }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#ccc" }}>
          Built with React · Deployed on Cloudflare
        </p>
      </div>
    </footer>
  );
}
