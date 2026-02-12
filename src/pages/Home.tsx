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
import upArrowImage from "../assets/images/up-arrow.svg";
import { getStackOverflowData } from "../utils/stackOverflowCache";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faCode,
  faGear,
  faWrench,
  faList,
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

let hasAnimatedGlobal = false;

export default function Home() {
  const [soData, setSoData] = useState<StackOverflowData | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [iconsAnimated, setIconsAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const profileRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedGlobal) {
            setIconsAnimated(true);
            hasAnimatedGlobal = true;
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => {
      if (iconsRef.current) {
        observer.unobserve(iconsRef.current);
      }
    };
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
    "Ruby on Rails",
    "Python",
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
          {!imageLoaded && <div className="profile-image-skeleton" />}
          <img
            src={profileImage}
            alt="Henry Granados"
            className="profile-image"
            onLoad={() => setImageLoaded(true)}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
          <div className="profile-info" ref={profileRef}>
            <p className="intro-text">
              Hi, my name is <span className="name-highlight">Henry</span>
            </p>
            <p className="bio">
              I'm a Lead Software Engineer with{" "}
              <strong>11+ years of experience</strong> designing, building, and
              scaling frontend and full-stack web applications. Expert in React,
              Angular, JavaScript, TypeScript, Java, and modern cloud based
              architectures. Proven leader with experience mentoring engineers,
              improving delivery processes, and building high-impact products
              used by thousands of users.
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
            , where <strong>I’ve taught thousands of students</strong> and{" "}
            <strong>maintain a 4.8/5 instructor rating</strong>.
          </p>
          <CoursesSection>
            <CoursesHeader>
              My <img src={udemyImage} alt="" width={91} height={34} />
              Courses
            </CoursesHeader>
            <div className="skills">
              {skills.map((skill) => (
                <Chip key={skill} outline>
                  {skill}
                </Chip>
              ))}
            </div>
          </CoursesSection>
        </div>

        <div className="skills-icons-banner">
          <div className="skills-columns" ref={iconsRef}>
            <div className="skills-column">
              <div
                className={`icon-wrapper ${iconsAnimated ? "animated" : ""}`}
              >
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faCode} size="3x" color="#000" />
                </div>
                <p className="icon-label">WEB DEVELOPMENT</p>
              </div>
            </div>
            <div className="skills-column">
              <div
                className={`icon-wrapper ${iconsAnimated ? "animated" : ""}`}
              >
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faGear} size="3x" color="#000" />
                </div>
                <p className="icon-label">SOFTWARE DEVELOPMENT</p>
              </div>
            </div>
            <div className="skills-column">
              <div
                className={`icon-wrapper ${iconsAnimated ? "animated" : ""}`}
              >
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faWrench} size="3x" color="#000" />
                </div>
                <p className="icon-label">TEST AUTOMATION</p>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="section">
          <h2>
            <FontAwesomeIcon icon={faList} color={"#eea236"} /> Skills
          </h2>
          <div className="skills-columns">
            <div className="skills-column">
              <ul className="skills-list">
                {skillsList.map((skill) => (
                  <li key={skill}>
                    <FontAwesomeIcon icon={faCheck} color={"#4cae4c"} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <ul className="skills-list">
                {softwareSkillsList.map((skill) => (
                  <li key={skill}>
                    <FontAwesomeIcon icon={faCheck} color={"#4cae4c"} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <ul className="skills-list">
                {["Selenium WebDriver", "SOAP UI"].map((skill) => (
                  <li key={skill}>
                    <FontAwesomeIcon icon={faCheck} color={"#4cae4c"} /> {skill}
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
          <div style={{ paddingBottom: "1.25rem" }}>
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
          <br /> <br />
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
          <img src={upArrowImage} alt="Scroll to top" width={60} height={60} />
        </button>
      )}
    </div>
  );
}
