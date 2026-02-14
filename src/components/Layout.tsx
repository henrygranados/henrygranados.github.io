import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "./Footer";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="layout">
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-container">
          <NavLink to="/" className="nav-brand">
            <Logo /> <span className="brand-text">Henry Granados</span>
          </NavLink>
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
              Experience
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </NavLink>
            <a
              href="https://www.linkedin.com/in/henrygranados/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon mobile-only"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" /> LinkedIn
            </a>
            <a
              href="https://github.com/henrygranados"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon mobile-only"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faGithub} size="xl" /> GitHub
            </a>
          </div>
          <div className="nav-icons">
            <a
              href="https://www.linkedin.com/in/henrygranados/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href="https://github.com/henrygranados"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </nav>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
