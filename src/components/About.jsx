import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyProfilePic from "./../images/profile.png";
import Grid from "@mui/material/Grid";
import { languages, APIs, tools } from "./Skills";

const About = () => {
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
        padding={5}
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

          <a href="https://www.linkedin.com/in/dillon-s-williams/" target="_blank" rel="noreferrer">
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
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Hey, my name is Dillon!</p>
          <p style={{ fontSize: "20px" }}>
            Fullstack Software Engineer 
          </p>
          <p style={{ fontSize: "20px" }}>
            Life-long dedication to learning!
          </p>
          <p style={{ fontSize: "20px" }}>
            Specialization in web development, low-level systems, and graphics programming!
          </p>
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>
            Education:
          </p>
          <p style={{ fontSize: "20px", color:"orange"}}>BS in Computer Science from Oklahoma State University!</p>
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "24px",
              fontFamily: "Nunito",
              marginTop: "5%",
            }}
          >
            Skill Set
          </p>
        </div>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Nunito",
          }}
        >
          Languages
        </p>
        <Grid
          container
          spacing={0}
          padding={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {languages.map((lang, langIndex) => (
            <div
              key={langIndex}
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt={lang.name} src={lang.image} width="40" height="40" />
              <p>{lang.name}</p>
            </div>
          ))}
        </Grid>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Nunito",
          }}
        >
          Frameworks
        </p>
        <Grid
          container
          spacing={0}
          padding={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {APIs.map((api, apiIndex) => (
            <div
              key={apiIndex}
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt={api.name} src={api.image} width="40" height="40" />
              <p>{api.name}</p>
            </div>
          ))}
        </Grid>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Nunito",
          }}
        >
          Tools
        </p>
        <Grid
          container
          spacing={0}
          padding={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {tools.map((tool, toolIndex) => (
            <div
              key={toolIndex}
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt={tool.name} src={tool.image} width="40" height="40" />
              <p>{tool.name}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
