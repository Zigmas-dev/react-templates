import PropTypes from "prop-types";
import "./navBar.scss";

const NavBar = ({ setShowClientForm }) => {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowClientForm((prev) => !prev); // Perjungia formos rodymą
          }}
        >
          Naujas klientas
        </a>
        <a href="#invoice">Sąskaita faktūra</a>
        <a href="#contract">Sutartis</a>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  setShowClientForm: PropTypes.func.isRequired, // Užtikrinam, kad gaunam funkciją
};

export default NavBar;
