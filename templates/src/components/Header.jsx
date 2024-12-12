import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <header className="header">
    <div className="logo">ManoLOGO</div>
    <button className="menu-toggle" onClick={toogleMenu}>
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
    <nav className={`nav &{isMenuOpen ? 'open' : ''}`}>
      <a href="#home">Pagrindinis</a>
      <a href="#about">Apie</a>
      <a href="#services">Paslaugos</a>
    </nav>
   </header>
  );
};

export default Header;