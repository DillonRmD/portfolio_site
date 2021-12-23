import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyProfilePic from "./../images/profile.png";
import "./About.css";

function About() {
  const skills = [
    {
      name: "C",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/c/c-original.svg"
    },
    {
      name: "CPlusPlus",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg",
    },
    {
      name: "ROOT",
      image:
        "https://root.cern/img/logos/ROOT_Logo/misc/generic-logo-cyan-512.png",
    },
    {
      name: "ReactJS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg",
    },
    {
      name: "Java",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/java/java-plain.svg"
    },
    {
      name: "CSharp",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/csharp/csharp-original.svg"
    },
    {
      name: "Javascript",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg"
    },
    {
      name: "HTML",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-original.svg"
    },
  ];

  return (
    <section id="About">
      <div class="About">
        <div class="About-profile">
          <p class = "About-bold"> Try Clicking My Headshot! </p>
          <a href="https://www.linkedin.com/in/dillon-williams-273000220">
            <ReactRoundedImage
              image={MyProfilePic}
              roundedColor="white"
              roundedSize="5"
              borderRadius="500"
              hoverColor="#DD1144"
            />
          </a>
        </div>

        <div class="About-info">
          <div class="About-bio">
            <p class="About-bold">Hey, my name is Dillon!</p>
            <p>
              I am a senior at Oklahoma State University studying computer
              science. I have vast interests in big data, application
              performance, backend development, and graphics programming!
            </p>
            <p class="About-bold">Expected graduation date:</p>
            <p>December 2022!</p>
          </div>
          <div class="About-skills">
            <p class="About-bold">Skills</p>
            {skills.map((skill) => (
              <div class="About-skills-image">
                <img alt="image" src={skill.image} width="40" height="40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
