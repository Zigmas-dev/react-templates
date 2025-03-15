import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>E-SHOP</div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMenuOpen && ( // Rodom navContainer tik kai menu atidarytas
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>Grįžti</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;