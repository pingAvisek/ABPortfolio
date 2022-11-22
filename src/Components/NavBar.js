import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navigation">
          <nav id="logo">
            <h1>AB GHIMIRE</h1>
          </nav>
          <nav className="nav-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
