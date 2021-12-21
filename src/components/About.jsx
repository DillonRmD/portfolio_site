import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyProfilePic from "./../images/profile.png";
import "./About.css"

function About() {

    return(
        <section id="About">
            <div class="About">
                
                <div class="About-profile">    
                <a href="https://www.linkedin.com/in/dillon-williams-273000220">
                        <ReactRoundedImage image = {MyProfilePic} 
                        roundedColor= "white"
                        roundedSize="5"
                        borderRadius="500"
                        hoverColor="#DD1144"
                        />
                </a>
                </div>
                
                <div class="About-bio">
                    <p>About Me!</p>
                    <p>I am a senior at  Oklahoma State University studying computer science with a vast interest in big data, application performance, and backend development</p>
                    <p>Expected graduation date: December 2022</p>
                </div>

                <div class="About-skills">
                    <p>Skills</p>
                    <p>C/C++, Java, C#, Python2, Python3, SQL, Bash, Javascript, HTML, CSS, </p>
                </div>
            </div>
        </section>
    );
}

export default About;