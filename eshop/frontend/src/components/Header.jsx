import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Gauti dabartinį maršrutą

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">E-SHOP</div>
      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav">
          {location.pathname === "/shop" ? (
            <Link to="/" className="link">Grįžti į svetainę</Link>
          ) : (
            <Link to="/shop" className="link">E-Parduotuvė</Link>
          )}
        </nav>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
