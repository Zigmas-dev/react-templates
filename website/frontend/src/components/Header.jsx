import { useState } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo_1.webp";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
     <div className="logo">
      <img src={logo} alt="Zigmaswebdev logo" />
      <div className="logo-text">Zigmas Web Dev</div>
    </div>
    <nav className={isMenuOpen ? "open" : ""} aria-label="Main Navigation">
     <ul>
      <li>
       <Link to="/" onClick={closeMenu}>Pagrindinis</Link>
      </li>
      <li>
       <Link to="/paslaugos" onClick={closeMenu}>Paslaugos</Link>
      </li>
      <li>
       <Link to="/kontaktai" onClick={closeMenu}>Kontaktai</Link>
      </li>
     </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;