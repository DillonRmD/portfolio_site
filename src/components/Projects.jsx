import Navbar from "./Navbar";
import "./Projects.css";


const Projects = () => {

    const projects = [
        {
            name: "Dillon's Tool Box (dtb)",
            description:
                "A collection of single C/C++ header files to simplify different functionality in the C/C++ language",
            image: [
                "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg",
            ],
            link: "https://github.com/DillonRmD/dtb",
        },
        {
            name: "Conway's Game Of Life",
            description:
                "A implementation of Conway's Game Of Life Featuring React and Typescript",
            image: [
                "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
            ],
            link: "https://dw-game-of-life.netlify.app/",
        },
        {
            name: "Elusive Rabbit",
            description:
                "A simulation and algorithm application to find an elusive rabbit that hops from hole to hole.",
            image: ["https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg"],
            link: "https://github.com/DillonRmD/ElusiveRabbit",
        },
        {
            name: "Movie Catalog",
            description:
                "A WPF and C# desktop application that utilizes a T-SQL database to catalog and rate watched movies",
            image: [
              "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/csharp/csharp-original.svg",
              "https://spin.atomicobject.com/wp-content/uploads/Microsoft_WPF.png"
            ],
            link: "https://github.com/DillonRmD/Visual-Algorithms",
        },
        {
            name: "Software Renderer",
            description:
                "Basic 2D software renderer written for the win32 platform layer in C/C++",
            image: ["https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/cplusplus/cplusplus-original.svg"],
            link: "https://github.com/DillonRmD/SoftwareRenderer",
        },
        {
            name: "Literally Just A Space Game With Cards",
            description:
                "A Collaborative Unity 2D, game project that features dynamic card playing in a vast universe just waiting to be conquered!",
            image: ["https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/unity/unity-original.svg"],
            link: "https://github.com/aking618/LJSGC",
        },
    ];


    return(
        <div className="projects-container">
            <Navbar pageValue="Projects"/>
        </div>
    );
};

export default Projects;