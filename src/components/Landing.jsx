import React from "react";
import "./Landing.css";
import Navbar from "./Navbar";

const Landing = () => {
    const contactMethods = [
        {
            link: "https://www.linkedin.com/in/dillon-s-williams/",
            image: "https://simpleicons.org/icons/linkedin.svg",
            alt: "LinkedIn Image",
            class: "social-linkedin",
        },
        {
            link: "https://twitter.com/itsssdillon",
            image: "https://simpleicons.org/icons/twitter.svg",
            alt: "Twitter Image",
            class: "social-twitter",
        },
        {
            link: "https://github.com/DillonRmD",
            image: "https://simpleicons.org/icons/github.svg",
            alt: "Github Image",
            class: "social-github",
        },
        {
            link: "mailto: dillon.williams.dev@gmail.com",
            image: "https://simpleicons.org/icons/microsoftoutlook.svg",
            alt: "Email Image",
            class: "social-email",
        },
    ];

    return (
        <div className="landing-container">
            <div>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;1,200&family=Raleway:wght@675&display=swap');
                </style>
                <div className="landing-cube">
                    <div className="landing-front">Dillon Williams</div>
                    <div className="landing-bottom">Software Developer</div>
                </div>
                <div className="landing-socialsRow">
                    {contactMethods.map((contact, contactIndex) => (
                        <div key={contactIndex} className="landing-social-item">
                            <a
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    alt={contact.alt}
                                    src={contact.image}
                                    width="40"
                                ></img>
                            </a>
                        </div>
                    ))}
                </div>


                <div className="landing-nav">
                    <div className="landing-nav-fade-in">
                        <Navbar pageValue="Home" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
