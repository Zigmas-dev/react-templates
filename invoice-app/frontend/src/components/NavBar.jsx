
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <a href="#pridėti">Naujas klientas</a>
        <a href="#invoice">Sąskaita faktūra</a>
        <a href="contract">Sutartis</a>
      </nav>
    </div>
  )
};

export default NavBar;