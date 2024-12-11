import "./header.scss";

const Header = () => {
  return (
   <header className="header">
    <div className="logo">ManoLOGO</div>
    <nav className="nav">
      <a href="#about">Apie</a>
      <a href="#services">Paslaugos</a>
    </nav>
   </header>
  );
};

export default Header;