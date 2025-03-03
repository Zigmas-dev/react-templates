
import { FaSignOutAlt, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import "./buttons.scss";

const Buttons = ({ type, onClick, children }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const getButtonContent = () => {
    switch (type) {
      case "logout":
        return (
          <>
            <FaSignOutAlt className="icon" /> Atsijungti
          </>
        );
      case "add":
        return (
          <>
            <FaPlus className="icon" /> Pridėti
          </>
        );
      case "edit":
        return (
          <>
            <FaEdit className="icon" /> Redaguoti
          </>
        );
      case "delete":
        return (
          <>
            <FaTrash className="icon" /> Ištrinti
          </>
        );
      default:
        return children;
    }
  };

  return (
    <button className={`button ${type}-button`} onClick={handleClick}>
      {getButtonContent()}
    </button>
  );
};

Buttons.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Buttons;