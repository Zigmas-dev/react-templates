import Logo from "./Logo";
import Banner from "./Banner";
import "./logoBanner.scss";

const Header = () => {
  return (
    <div className="logo-banner-container">
      <Logo />
      <Banner />
    </div>
  );
};

export default Header;
