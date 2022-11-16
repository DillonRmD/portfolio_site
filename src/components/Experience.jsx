import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Experimental Software Engineering Intern",
      date: "May 2022 - Aug. 2022",
      company: "Textron Aviation",
      description:
        "Developed effective and performance-sensitive ( < 5ms response time) software that interfaced with onboard flight instrumentation hardware.",
      description2:
        "Worked with different departments to design a full-stack ASP.NET web application and a scalable SQL database to streamline and process Flightline processes and data (> 5TB).",
    },
    {
      title: "Undergraduate Particle Physics Software Developer",
      date: "Oct. 2020 - Present",
      company: "Oklahoma State University - Dr. Joseph Haley",
      description:
        "Developed general and robust machine learning algorithms to classify, categorize and identify massive amounts of particle collision data (>1000TB).",
      description2:
        "Collaborated with and learned from individuals from multiple different countries, cultures, and backgrounds in order to explore and discover new physics."
    },
  ];

  return (
    <div>
      <div className="header">
        {" "}
        <h1>Relavent Experience</h1>{" "}
      </div>
      <div className="row">
        {experiences.map((experience, experienceIndex) => (
          <div key={experienceIndex} 
            className="column">
            <div className="Experience-card">
              <div className="Experience-title">
                <h1> {experience.title}</h1>
                <h2>
                  {experience.company}, {experience.date}
                </h2>
              </div>
              <div className="Experience-desc">
                <p>{experience.description}</p>
                <p>{experience.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
