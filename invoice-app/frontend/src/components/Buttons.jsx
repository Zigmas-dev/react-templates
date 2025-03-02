import { FaSignOutAlt } from "react-icons/fa";
import "./buttons.scss";

const Buttons = ({ onLogout }) => {
  return (
    <button className="logout-button" onClick={onLogout}>
      <FaSignOutAlt className="icon" /> Atsijungti
    </button>
  );
};

export default Buttons;