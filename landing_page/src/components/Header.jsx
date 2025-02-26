import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Web Programavimas</h1>
      <nav>
        <ul>
          <li><a href="#services">Paslaugos</a></li>
          <li><a href="#contact">Kontaktai</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;