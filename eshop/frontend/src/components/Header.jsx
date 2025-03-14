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
            <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
                <nav className="nav">
                    <a href="#e-shop">E-Parduotuvė</a>
                </nav>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
};

export default Header;