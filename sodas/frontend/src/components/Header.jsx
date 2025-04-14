import { useState } from "react";
import PropTypes from "prop-types";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import "./header.scss";

const Header = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="header-logo">
       <FaLeaf className="logo-icon" />
       <span>PAKRUOJO S/B &quot;VASARA&quot; {title}</span>
      </div>
       <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <a href="#apie" onClick={() => setMenuOpen(false)}>Apie</a>
        <a href="#nariai" onClick={() => setMenuOpen(false)}>Nariai</a>
        <a href="#kontaktai" onClick={() => setMenuOpen(false)}>Kontaktai</a>
      </nav>
       <button className="header-menu" onClick={toggleMenu} aria-label="Meniu">
       {menuOpen ? <FaTimes /> : <FaBars />}
     </button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;