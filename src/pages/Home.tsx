import { useEffect, useState, useRef } from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";
import "./Home.css";
import { Chip } from "../components/SkillTag";
import Medals from "../components/Medals";
import Divider from "../components/Divider";
import profileImage from "../assets/images/linkedIn-pic.jpeg";
import medalsImage from "../assets/images/medals.png";
import udemyImage from "../assets/images/logo-udemy.svg";
import { getStackOverflowData } from "../utils/stackOverflowCache";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareCaretUp,
  faBook,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const CoursesSection = styled.div({
  paddingTop: "1rem",
  marginLeft: "3rem",
});

const CoursesHeader = styled.h3({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.8rem",
});

interface StackOverflowData {
  reputation: number;
  badge_counts: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

export default function Home() {
  const [soData, setSoData] = useState<StackOverflowData | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStackOverflowData();
      if (data) {
        setSoData(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    "React",
    "Angular",
    "Redux",
    "PHP",
    "NodeJS",
    "JQuery",
    "more...",
  ];

  const skillsList = [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "React Native",
    "Angular",
    "NodeJS",
    "GraphQL",
    "HTML / CSS",
  ];

  const softwareSkillsList = [
    "Java SE/EE Development",
    "Python",
    "Selenium WebDriver",
    "RESTful Web Services",
    "Data-Driven Test Automation",
    "C#",
    "C/C++",
    "PHP",
  ];

  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-header">
          <img
            src={profileImage}
            alt="Henry Granados"
            className="profile-image"
          />
          <div className="profile-info" ref={profileRef}>
            <p className="intro-text">
              Hi, my name is <span className="name-highlight">Henry</span>
            </p>
            <p className="bio">
              I'm a Lead Software Engineer with{" "}
              <strong>11+ years of experience</strong> designing, building, and
              scaling frontend and full-stack web applications. Expert in React,
              Angular, JavaScript, TypeScript, Java, and modern cloud-based
              architectures. Proven leader with experience mentoring engineers,
              defining best practices, improving delivery processes, and
              building high- impact products used by thousands of users. Strong
              background in Agile/Scrum, CI/CD and enterprise-scale systems.
            </p>
          </div>
        </div>
        <Divider />
        <div className="section">
          <h2>Certifications and Awards</h2>
          <p>
            I hold a degree in <strong>Computer Science and Engineering</strong>{" "}
            and specialize in building modern web applications. I focus on
            creating efficient, scalable, and user-friendly solutions, and I’m
            passionate about sharing knowledge and helping others grow. This led
            me to become a <strong>Certified Mentor</strong> and{" "}
            <a
              target="_blank"
              href="https://www.udemy.com/user/henrygranados/"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Udemy Instructor
            </a>
            , where I’ve taught thousands of students and{" "}
            <strong>maintain a 4.6/5 instructor rating</strong>.
          </p>
          <CoursesSection>
            <CoursesHeader>
              My <img src={udemyImage} alt="" width={91} height={34} />
              Courses <FontAwesomeIcon icon={faBook} color={"#A435F0"} />
            </CoursesHeader>
            <div className="skills">
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </CoursesSection>
        </div>
        <Divider />
        <div className="section">
          <h2>Skills</h2>
          <div className="skills-columns">
            <div className="skills-column">
              <h3>Web Development</h3>
              <ul className="skills-list">
                {skillsList.map((skill) => (
                  <li key={skill}>
                    <FontAwesomeIcon icon={faCheck} color={"#4cae4c"} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h3>Software Development</h3>
              <ul className="skills-list">
                {softwareSkillsList.map((skill) => (
                  <li key={skill}>
                    <FontAwesomeIcon icon={faCheck} color={"#5cb85c"} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="section stackoverflow-section">
          <FontAwesomeIcon
            icon={faStackOverflow}
            size="3x"
            color={theme.color.stackOverflow}
          />
          <div style={{ paddingBottom: 20 }}>
            <a
              href="https://stackoverflow.com/users/4084160/henrydev?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="stackoverflow-link"
            >
              Visit my account here
            </a>
          </div>
          <h2>StackOverflow Reputation</h2>
          <div className="reputation-container">
            <p className="reputation-score">
              {soData?.reputation || "Loading..."}
            </p>
            <p className="reputation-label">points</p>
          </div>
          <br />
          <Medals
            image={medalsImage}
            gold={soData?.badge_counts.gold || 0}
            silver={soData?.badge_counts.silver || 0}
            bronze={soData?.badge_counts.bronze || 0}
          />
        </div>
      </div>
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faSquareCaretUp} size="3x" color={"#000"} />
        </button>
      )}
    </div>
  );
}
