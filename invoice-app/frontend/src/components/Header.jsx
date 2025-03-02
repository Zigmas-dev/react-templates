import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-bar-container">
        <NavBar />
      </div>  
      <div className="logout-button-container">
        <Buttons />
      </div>
    </header>
  )
};

export default Header;