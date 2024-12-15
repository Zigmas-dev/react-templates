import PropTypes from "prop-types";
import "./notificationbar.scss";

const NotificationBar = ({ message, link, linkText, type }) => {
  return (
    <div className={`notification-bar ${type}`}>
      <span>{message}</span>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};

NotificationBar.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
};

NotificationBar.defaultProps = {
  link: null,
  linkText: "Sužinokite daugiau",
  type: "info",
};

export default NotificationBar;
