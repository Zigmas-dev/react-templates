import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";
import "./header.scss";

const Header = ({ setShowClientForm }) => {
  return (
    <header className="header">
      <div className="nav-bar-container">
        <NavBar setShowClientForm={setShowClientForm} /> {/* Perduodam į NavBar */}
      </div>  
      <div className="logout-button-container">
        <Buttons />
      </div>
    </header>
  );
};

Header.propTypes = {
  setShowClientForm: PropTypes.func.isRequired, // Aprašome perduodamą funkciją
};

export default Header;
