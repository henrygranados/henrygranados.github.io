import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "./Footer";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Layout() {
  return (
    <div className="layout">
      <nav>
        <div className="nav-container">
          <NavLink to="/" className="nav-brand">
            <Logo /> Henry Granados
          </NavLink>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
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
