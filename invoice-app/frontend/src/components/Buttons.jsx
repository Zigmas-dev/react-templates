import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Importuojame useNavigate
import "./buttons.scss";

const Buttons = ({ onLogout }) => {
  const navigate = useNavigate(); // Sukuriame navigacijos funkciją

  const handleLogout = () => {
    if (onLogout) onLogout(); // Iškviečiame papildomą logout funkciją, jei ji perduota
    navigate("/login"); // Nukreipiame vartotoją į login puslapį
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      <FaSignOutAlt className="icon" /> Atsijungti
    </button>
  );
};

export default Buttons;
