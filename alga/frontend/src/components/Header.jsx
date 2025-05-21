import logo from "../assets/Logo_lauros.webp";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo_lauros" />
      </div>
    </header>
  );
};

export default Header;