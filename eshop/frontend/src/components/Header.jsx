import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.scss";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

   return (
     <header className="header">
      <div className="logo">E-SHOP</div>
      <button className="menu-toggle" onClick={toggleMenu}>
       {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`nav &{isMenuOpen ? 'open' : ''}`}>
       <a href="#e-shop">E-Parduotuvė</a>
      </nav>
     </header>
   );
};

export default Header;
