import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      company: "ARAGORN AI (Dallas, TX)",
      dateRange: "Oct 2025 – Present",
      title: "Lead Frontend Engineer",
      responsibilities: [
        "Lead frontend architecture and development using React, TypeScript, GraphQL, REST APIs",
        "Mentor engineers through code reviews and technical guidance",
        "Define frontend standards that improved code consistency and reduced defects",
        "Collaborated with product and backend teams to deliver scalable UI solutions",
        "Tech stack: React, JavaScript, TypeScript, GraphQL, Jest, HTML, CSS, Sass",
      ],
    },
    {
      company: "SINGLESTONE CONSULTING (Richmond, VA)",
      dateRange: "Nov 2024 – Aug 2025",
      title: "Lead Frontend Engineer",
      responsibilities: [
        "Led frontend development across multiple client projects using React and Angular",
        "Established development workflows and coding standards across teams",
        "Tech stack: JavaScript, TypeScript, React, Angular, GraphQL, HTML, CSS, Sass",
      ],
    },
    {
      company: "CISCO (Denver, CO)",
      dateRange: "Feb 2022 – May 2024",
      title: "Principal Frontend Engineer",
      responsibilities: [
        "Led architectural discussions and design reviews for enterprise applications",
        "Mentored engineers and drove adoption of modern frontend patterns",
        "Designed and developed scalable user interface for internal and external users",
        "Tech stack: React, TypeScript, Ruby on Rails, JavaScript, Jest, HTML, CSS, Sass",
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
        "Tech stack: JavaScript, TypeScript, React, Angular, Redux, Jasmine, Jest, Cypress, HTML, CSS, Sass",
      ],
    },
    {
      company: "AXION HEALTH (Broomfield, CO)",
      dateRange: "Sept 2017 – April 2020",
      title: "Senior Full Stack Software Engineer",
      responsibilities: [
        "Developed full-stack applications supporting employee health programs",
        "Improved enrollment and participation workflow for large enterprise customers",
        "Tech stack: Java EE, Angular, TypeScript, Redux, ExtJS, Oracle DB, HTML, CSS, Sass",
      ],
    },
    {
      company: "CLICKFOX (Denver, CO)",
      dateRange: "Aug 2016 – Sept 2017",
      title: "Software Engineer",
      responsibilities: [
        "Built web applications for generating custom MapReduce jobs on Hadoop",
        "Developed RESTful services for cloud and distributed systems",
        "Tech stack: Java, Groovy, Angular, TypeScript, Redux, HTML, CSS, Sass",
      ],
    },
    {
      company: "COMCAST BUSINESS (Lakewood, CO)",
      dateRange: "Feb 2016 – Aug 2016",
      title: "Software Engineer",
      responsibilities: [
        "Developed user interface and integrated REST and SOAP services",
        "Supported UI design and application maintenance",
        "Tech stack: Java EE, PHP, Laravel, React, Angular JavaScript, NodeJS, and HTML/CSS/Sass",
      ],
    },
    {
      company: "U.S GEOLOGICAL SURVEY (Denver, CO)",
      dateRange: "Sept 2015 – Feb 2016",
      title: "Software Engineer - Contractor",
      responsibilities: [
        "Provided technical guidance on GIS and web application development",
        "Built mapping applications using ESRI and Leaflet technologies",
        "Tech and stack: C#, ASP.NET, ArcGIS, Leaflet, JavaScript, REST APIs",
      ],
    },
    {
      company: "TIME WARNER CABLE (Broomfield, CO)",
      dateRange: "Sept 2014 – Sept 2015",
      title: "Software Engineer",
      responsibilities: [
        "Developed automated testing framework for cloud services",
        "Created Java-based test suites validating APIs and system integrations",
        "Java, Selenium WebDriver, Maven, TestNG and Jenkins",
      ],
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
                <h2 className="company-name">{exp.company}</h2>
                <p className="date-range">{exp.dateRange}</p>
              </div>
              <h3 className="job-title">{exp.title}</h3>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
