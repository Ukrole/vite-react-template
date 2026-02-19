import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 11, 20, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,45,74,0.6)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold tracking-tight"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="gradient-text">ZW</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm px-3 py-1.5 rounded-md transition-all duration-200"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isActive ? "#818cf8" : "#94a3b8",
                  fontWeight: isActive ? 500 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#e7edf8";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
          }}
          aria-label="menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className="block h-0.5 rounded transition-all duration-300 origin-center"
              style={{
                background: "#94a3b8",
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <span
              className="block h-0.5 rounded transition-all duration-300"
              style={{
                background: "#94a3b8",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 rounded transition-all duration-300 origin-center"
              style={{
                background: "#94a3b8",
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(8, 11, 20, 0.97)",
              borderBottom: "1px solid rgba(30,45,74,0.6)",
            }}
          >
            <div className="px-6 pb-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm py-2.5 text-left"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#94a3b8",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
