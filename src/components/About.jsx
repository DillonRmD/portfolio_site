import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyProfilePic from "./../images/profile.png";
import Grid from "@mui/material/Grid";
import { languages, databases, APIs, tools } from "./Skills";

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
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Hey, my name is Dillon!</p>
          <p style={{ fontSize: "20px" }}>
            I am a senior at Oklahoma State University studying computer
            science.
          </p>
          <p style={{ fontSize: "20px" }}>
            I am super interested in computer hardware and software, physics,
            and math!
          </p>
          <p style={{ fontSize: "20px" }}>
            I enjoy doing work and research in big data, application
            performance, backend development, and graphics programming!
          </p>
          <p style={{ fontSize: "20px" }}>
            I currently work in a particle physics research laboratory,
            utilizing my skills in software to *hopefully* find the existence of
            new fundamental particles (super exciting and rewarding position) !
          </p>
          <p style={{ fontSize: "20px" }}>
            Right now, in the lab, I am actively working on creating a neural
            network (with Python3 and Tensorflow) that can use machine-learning
            to classify different types of particles!
          </p>
          <p style={{ marginTop: "5%", fontWeight: "bold" }}>
            Expected graduation date:
          </p>
          <p style={{ fontSize: "20px" }}>December 2022!</p>

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
            My Skill Set
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
          {languages.map((lang) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt="image" src={lang.image} width="40" height="40" />
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
          {APIs.map((api) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt="image" src={api.image} width="40" height="40" />
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
          {tools.map((tool) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
              }}
            >
              <img alt="image" src={tool.image} width="40" height="40" />
              <p>{tool.name}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
