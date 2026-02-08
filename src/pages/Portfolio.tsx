//import spaceShipVideo from "../assets/space-ship.m4v";
import spaceShipVideo from "../assets/nave.mov";
import { Chip } from "../components/SkillTag";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-layout">
        <div className="portfolio-content">
          <video autoPlay loop muted>
            {/* <source src={spaceShipVideo} type="video/mp4" /> */}
            <source src={spaceShipVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-description">
          <h2>Spaceship Video Game</h2>
          <p>
            This video game was built in vanilla JavaScript. The game features
            real-time player controls, dynamic movement, and interactive
            gameplay mechanics.
          </p>
          <div className="skills">
            {["JavaScript", "HTML", "CSS"].map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
