import logo from "../assets/Logo_1.webp";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Zigmaswebdev logo" />
    </div>
  );
};

export default Logo;