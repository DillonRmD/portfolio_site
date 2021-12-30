import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyProfilePic from "./../images/profile.png";
import Grid from "@mui/material/Grid";

const About = () => {
  const skills = [
    {
      name: "C",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/c/c-original.svg",
    },
    {
      name: "C++",
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
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/java/java-plain.svg",
    },
    {
      name: "C#",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/csharp/csharp-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-plain.svg",
    },
    {
      name: "HTML",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-original.svg",
    },
    {
      name: "Visual Studio",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/visualstudio/visualstudio-plain.svg",
    },
    {
      name: "VS Code",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/vscode/vscode-original.svg"
    },
    {
      name: "Tensorflow",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "SQL",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mysql/mysql-original.svg"
    },
    
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundImage: "url(https://i.gifer.com/Ozp.gif)",
        backgroundSize: "100% 100%",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Nunito",
            }}
          >
            Try Clicking My Headshot!
          </p>

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

        <div
          style={{
            fontFamily: "Nunito",
            color: "white",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Hey, my name is Dillon!</p>
          <p>
            I am a senior at Oklahoma State University studying computer
            science. I am super interested in computers, software, physics and
            math! I enjoy work and research in big data, application
            performance, backend development, and graphics programming!
          </p>
          <p style={{ fontWeight: "bold" }}>Expected graduation date:</p>
          <p>December 2022!</p>

          <p style={{color:"white", fontWeight:"bold", textAlign:"center", fontSize:"22px", fontFamily:"Nunito"}}>Skills</p>
        </div>
        <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="center">

          {skills.map((skill) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt="image" src={skill.image} width="40" height="40" />
              <p>{skill.name}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
