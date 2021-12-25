import React from "react";
import "./Project.css";

function Project() {
    
  const projects = [
    {
      name: "Dillon's Tool Box (dtb)",
      description:
        "A collection of single C/C++ header files to simplify different functionality in the C/C++ language",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg",
      link: "https://github.com/DillonRmD/dtb",
    },
    {
      name: "Elusive Rabbit",
      description:
        "A simulation and algorithm application to find an elusive rabbit that hops from hole to hole.",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg",
      link: "https://github.com/DillonRmD/ElusiveRabbit",
    },
    {
      name: "Ray Tracer",
      description:
        "Ray tracer technology written in C/C++ derived from the well-known book: RayTracing In One Weekend by Peter Shirley",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg",
      link: "https://github.com/DillonRmD/RayTracer",
    },
    {
        name: "Visual Algorithms",
        description: "Web based ReactJS application that dynamically visualizes a variety of sorting algorithms",
        image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg",
        link: "https://github.com/DillonRmD/Visual-Algorithms"
    },
    {
      name: "Software Renderer",
      description: "Basic 2D software renderer written for the win32 platform layer in C/C++",
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg",
      link: "https://github.com/DillonRmD/SoftwareRenderer",
    },
    {
        name: "Literally Just A Space Game With Cards",
        description: "A Unity 2D, group, game project that features dynamic card playing in a vast universe just waiting to be conquered!",
        image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/unity/unity-original.svg",
        link: "https://github.com/aking618/LJSGC",
    },

  ];

  return (
    <secton id="Project">
      <div class="Project">
        <div class="header">
          <h1>My Projects</h1>
        </div>

        <div class = "Project-disclaimer">
          <h1> Below are just some of my highlighted projects! </h1>
          <h1> Feel free to to check out the rest of my projects by clicking below!</h1>
          <h1><a href="https://github.com/DillonRmD/"> My super epic github profile</a></h1>
        </div>

        <div class="Project-entry">
          {projects.map((project) => (
            <div>
              <a href={project.link} key={project.image}>
                <div class="Project-title">
                  <h1>
                    {project.name}
                    <img
                      alt="image"
                      src={project.image}
                      width="40"
                      height="40"
                    />
                  </h1>
                </div>
              </a>

              <div class="Project-desc">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </secton>
  );
}

export default Project;
