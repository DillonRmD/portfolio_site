import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div className="nav">
            <ul className="nav-list-container">
                <li className={props.pageValue === "Home" ? "current" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={props.pageValue === "About" ? "current" : ""}>
                    <Link to="/about">About</Link>
                </li>
                <li className={props.pageValue === "Projects" ? "current" : ""}>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
