import PropTypes from "prop-types";
import "./alert.scss";

const Alert = ({ message, type = "info", onClose }) => (
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
    {onClose && (
      <button className="alert-close" onClick={onClose}>
        ✖
      </button>
    )}
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  onClose: PropTypes.func,
};

export default Alert;