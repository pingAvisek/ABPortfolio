import "./NavBar.css";
import NavLogo from "../images/ab-ghimire-pingAvisek.png";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className="navigation">
                    <nav id="logo">
                        <a style={{ textDecoration: "none" }} href="#">
                            <img src={NavLogo} className="navLogo" alt="ab-logo-not-found" />
                        </a>
                    </nav>
                    <nav className="nav-links">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>


    )
}

export default NavBar