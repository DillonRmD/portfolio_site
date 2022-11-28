import {
    Card,
    CardContent,
    Grid,
} from "@mui/material";
import React from "react";
import "./Experience.css";

function Experience() {
    const experiences = [
        {
            title: "Experimental Software Engineering Intern",
            date: "May 2022 - Nov. 2022",
            company: "Textron Aviation",
            descriptions:[
                "Developed effective and performance-sensitive ( < 5ms response time) software that interfaced with onboard flight instrumentation hardware.",
                "Collaborated across departments to design a full-stack ASP.NET web application and a scalable SQL database to streamline and process Flightline processes and data (> 5TB).",
                "Created a robust feature/bug tracking and reporting library that is implemented and utilized in all internal desktop applications",
            ],
        },
        {
            title: "Undergraduate Particle Physics Software Developer",
            date: "Oct. 2020 - Nov. 2022",
            company: "Oklahoma State Univ. - Dr. Joseph Haley",
            descriptions:[
                "Developed general and robust machine learning algorithms to classify, categorize and identify massive amounts of particle collision data (>1000TB).",
                "Collaborated with and learned from individuals from multiple different countries, cultures, and backgrounds in order to explore and discover new physics.",
            ],
        },
    ];

    return (
        <div>
            <div className="header">
                {" "}
                <h1>Relavent Experience</h1>
            </div>

            <Grid container spacing={2} direction="row" justifyContent="center">
                {experiences.map((experience, experienceIndex) => (
                    <Grid item>
                        <Card variant="outlined" className="Experience-card">
                            <CardContent>
                                <div className="Experience-title">
                                    <h1> {experience.title}</h1>
                                    <h2>
                                        {experience.company}
                                    </h2>
                                    <h2>
                                        {experience.date}
                                    </h2>
                                </div>
                                <div className="Experience-desc">
                                    {experience.descriptions.map((desc, descIndex) => (
                                        <p>{desc}</p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Experience;
