import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>E-SHOP</div>
      <div className={`${styles['nav-links']} ${isMenuOpen ? styles.open : ''}`}>
        <Link to="/main-page" className={styles.link}>Pagrindinis</Link>
        <Link to="/products" className={styles.link}>Produktai</Link>
        <Link to="/faq" className={styles.link}>D.U.K</Link>
        <Link to="/cart" className={styles.link}>Krepšelis</Link>
        <Link to="/contact" className={styles.link}>Kontaktai</Link>
      </div>
      <button className={styles['menu-toggle']} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;