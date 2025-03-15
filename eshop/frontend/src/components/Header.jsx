import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importuojame Link iš react-router-dom
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">E-SHOP</div>
      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav">
          <Link to="/eshop" className="link">E-Parduotuvė</Link> {/* Naudojame Link */}
        </nav>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;