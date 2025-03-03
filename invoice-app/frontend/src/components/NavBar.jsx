import "./navBar.scss";

const NavBar = ({ onToggleClientForm }) => {
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <a href="#" onClick={(e) => { 
          e.preventDefault(); 
          onToggleClientForm(); // Perjungiame formos rodymą
        }}>
          Naujas klientas
        </a>
        <a href="#invoice">Sąskaita faktūra</a>
        <a href="#contract">Sutartis</a>
      </nav>
    </div>
  );
};

export default NavBar;
