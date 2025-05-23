import logo from "../assets/Logo_lauros.webp";
import "./header.scss";

const Header = ({ onLogoClick }) => {
  return (
    <header className="header">
      <div className="logo" onClick={onLogoClick}>
        <img src={logo} alt="Logo_lauros" />
      </div>
    </header>
  );
};

export default Header;
