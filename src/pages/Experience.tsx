import "./Experience.css";
import { Chip } from "../components/SkillTag";

export default function Experience() {
  const experiences = [
    {
      company: "Aragorn AI (Dallas, TX)",
      dateRange: "Oct 2025 – Present",
      title: "Lead Frontend Engineer",
      responsibilities: [
        "Lead frontend architecture and development using React, TypeScript, GraphQL, REST APIs",
        "Mentor engineers through code reviews and technical guidance",
        "Define frontend standards that improved code consistency and reduced defects",
        "Collaborated with product and backend teams to deliver scalable UI solutions",
      ],
      techStack: [
        "React",
        "JavaScript",
        "TypeScript",
        "GraphQL",
        "Jest",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "SingleStone Consulting (Richmond, VA)",
      dateRange: "Nov 2024 – Aug 2025",
      title: "Lead Frontend Engineer",
      responsibilities: [
        "Led frontend development across multiple client projects using React and Angular",
        "Established development workflows and coding standards across teams",
      ],
      techStack: [
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "GraphQL",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "Cisco (Denver, CO)",
      dateRange: "Feb 2022 – May 2024",
      title: "Principal Frontend Engineer",
      responsibilities: [
        "Led architectural discussions and design reviews for enterprise applications",
        "Mentored engineers and drove adoption of modern frontend patterns",
        "Designed and developed scalable user interface for internal and external users",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Ruby on Rails",
        "JavaScript",
        "Jest",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "DaVita (Denver, CO)",
      dateRange: "Apr 2020 – Feb 2022",
      title: "Software Engineering Technical Leader",
      responsibilities: [
        "Led cross-functional teams including developers, QA, and database engineers",
        "Built enterprise web applications used daily across the organization",
        "Delivered end-to-end UI solutions improving usability and performance",
      ],
      techStack: [
        "Java",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Redux",
        "Jasmine",
        "Jest",
        "Cypress",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "Axion Health (Broomfield, CO)",
      dateRange: "Sept 2017 – April 2020",
      title: "Senior Full Stack Software Engineer",
      responsibilities: [
        "Developed full-stack applications supporting employee health programs",
        "Improved enrollment and participation workflow for large enterprise customers",
      ],
      techStack: [
        "React",
        "Java EE",
        "TypeScript",
        "Angular",
        "Redux",
        "ExtJS",
        "Oracle DB",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "ClickFox (Denver, CO)",
      dateRange: "Aug 2016 – Sept 2017",
      title: "Software Engineer",
      responsibilities: [
        "Built web applications for generating custom MapReduce jobs on Hadoop",
        "Developed RESTful services for cloud and distributed systems",
      ],
      techStack: [
        "Java",
        "Groovy",
        "Angular",
        "TypeScript",
        "Redux",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "Comcast Business (Lakewood, CO)",
      dateRange: "Feb 2016 – Aug 2016",
      title: "Software Engineer",
      responsibilities: [
        "Developed user interface and integrated REST and SOAP services",
        "Supported UI design and application maintenance",
      ],
      techStack: [
        "Java EE",
        "PHP",
        "Laravel",
        "React",
        "Angular",
        "JavaScript",
        "NodeJS",
        "HTML",
        "CSS",
        "Sass",
      ],
    },
    {
      company: "U.S Geological Survey (Denver, CO)",
      dateRange: "Sept 2015 – Feb 2016",
      title: "Software Engineer - Contractor",
      responsibilities: [
        "Provided technical guidance on GIS and web application development",
        "Built mapping applications using ESRI and Leaflet technologies",
      ],
      techStack: [
        "C#",
        "ASP.NET",
        "ArcGIS",
        "Leaflet",
        "JavaScript",
        "REST APIs",
      ],
    },
    {
      company: "Time Warner Cable (Broomfield, CO)",
      dateRange: "Sept 2014 – Sept 2015",
      title: "Software Engineer",
      responsibilities: [
        "Developed automated testing framework for cloud services",
        "Created Java-based test suites validating APIs and system integrations",
      ],
      techStack: ["Java", "Selenium WebDriver", "Maven", "TestNG", "Jenkins"],
    },
  ];

  return (
    <div className="experience">
      <div className="experience-content">
        <h1>Professional Experience</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <h2 className="job-title">{exp.title}</h2>
                <span className="separator">@</span>
                <h2 className="company-name">{exp.company}</h2>
              </div>
              <p className="date-range">{exp.dateRange}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {exp.techStack.map((tech, idx) => {
                  return (
                    <Chip key={idx} outline>
                      {tech}
                    </Chip>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
