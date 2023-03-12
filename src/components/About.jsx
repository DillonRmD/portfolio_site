import "./About.css";
import Navbar from "./Navbar";
import profilePic from "../images/profile.png";

const About = () => {
    //#23d5ab, #23a6d5, #e73c7e, #795b52
    return (
        <div className="about-page-container">
            <Navbar pageValue="About" />
            <div className="about-page-content-container">
                <div className="about-bio-container">
                    <div className="about-bio-profile-pic-container">
                        <img
                            className="about-bio-profile-pic-img"
                            alt="profile-pic"
                            src={profilePic}
                        ></img>
                    </div>

                    <div className="about-bio-description">
                        <p>
                            <p>Hey there! I'm Dillon Williams</p>
                            <p>I am a software engineer with professional experience in:</p>
                            <ul className="about-bio-description-content-experiences">
                                <li>Low-level development</li>
                                <li>Full-stack Web Development</li>
                                <li>Full-stack Web Design</li>
                                <li>3D Graphics Development</li>
                            </ul>
                            <p>I have a passion for learning and understanding how things work under the hood</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
