import "./About.css";
import Navbar from "./Navbar";
import profilePic from "../images/profile.png";

const About = () => {
    const experiences = [
        {
            title: "Software Developer",
            date: "Dec. 2022 - Present",
            company: "Paycom",
            descriptions: [
                "Developed and contributed to fullstack outward-facing web applications",
                "Worked on client facing benefits and insurance software systems for +8,000 clients",
                "Implemented robust, elegant, and intricate software utilizing agile methodologies",
            ],
            background: "https://www.paycom.com/cms-content/2018/05/Paycom-Generic.png",
        },
        {
            title: "Experimental Software Engineering Intern",
            date: "May 2022 - Dec. 2022",
            company: "Textron Aviation",
            descriptions: [
                "Developed effective and performance-sensitive ( < 5ms response time) software that interfaced with onboard flight instrumentation hardware.",
                "Collaborated across departments to design a full-stack ASP.NET web application and a scalable SQL database to streamline and process Flightline processes and data (> 5TB).",
                "Created a robust feature/bug tracking and reporting library that is implemented and utilized in all internal desktop applications",
            ],
            background: "https://mms.businesswire.com/media/20210224005830/en/861190/5/Hero2.jpg",
        },
        {
            title: "Undergraduate Particle Physics Software Developer",
            date: "Oct. 2020 - Dec. 2022",
            company: "Oklahoma State Univ. - Dr. Joseph Haley",
            descriptions: [
                "Developed general and robust machine learning algorithms to classify, categorize and identify massive amounts of particle collision data (>1000TB).",
                "Collaborated with and learned from individuals from multiple different countries, cultures, and backgrounds in order to explore and discover new physics.",
            ],
            background: "https://physicsmasterclasses.org/img/institutes/us_okstate.jpg",
        },
    ];

    return (
        <div className="about-page-container">
            <Navbar pageValue="About" />
            <div className="about-page-content-container">
                <div className="about-bio-container">
                    <div className="about-bio-profile-pic-container">
                        <img alt="profile-pic" src={profilePic}></img>
                    </div>
                    <div className="about-bio-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque sed diam rhoncus, hendrerit felis ut,
                            finibus urna. Fusce efficitur sem id urna tincidunt,
                            id porta elit lobortis. Vestibulum nec ligula erat.
                            Cras ultricies massa at lacus pretium, at pharetra
                            augue elementum. Duis vel orci nec erat venenatis
                            laoreet. Fusce porta lorem faucibus lorem ultricies,
                            et tincidunt mauris cursus. Vestibulum et tellus
                            est. In lorem nisl, gravida id sollicitudin sed,
                            eleifend vitae erat. Etiam efficitur lacus ut ex
                            placerat, id semper ipsum luctus. Quisque imperdiet
                            elementum velit, sit amet porttitor turpis sagittis
                            quis. Vestibulum porttitor commodo risus, consequat
                            gravida purus convallis semper. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos.
                        </p>
                    </div>
                    <div className="about-bio-knowledge"></div>
                </div>
                <div className="about-experience-container">
                    {experiences.map((exp, expIndex) => (
                        <div key={expIndex} className="about-experience-card">
                            <img class="about-experience-background" src={exp.background} alt={exp.title + ' background'}></img>
                            <div className="about-experience-title">
                                {exp.title}
                            </div>
                            <div className="about-experience-company">
                                {exp.company}
                            </div>
                            <div className="about-experience-date">
                                {exp.date}
                            </div>
                            <div className="about-experience-description-container">
                                <ul>
                                    {exp.descriptions.map((desc, descIndex) => (
                                        <li key={descIndex}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
