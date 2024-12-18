import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./alert.scss";

const Alert = ({ defaultMessage, defaultType }) => {
  const [alertMessage, setAlertMessage] = useState({
    message: defaultMessage || "Sveiki atvykę į mūsų svetainę!",
    type: defaultType || "success",
    visible: true,
  });

  useEffect(() => {
    // Nustatome laikmačius pranešimų valdymui
    const timer = setTimeout(() => {
      setAlertMessage({
        message: "Krovimas baigtas!",
        type: "info",
        visible: true,
      });
    }, 3000);

    const alertTimer = setTimeout(() => {
      setAlertMessage((prev) => ({ ...prev, visible: false }));
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(alertTimer);
    };
  }, []);

  // Funkcija pranešimui uždaryti
  const closeAlert = () => {
    setAlertMessage((prev) => ({ ...prev, visible: false }));
  };

  // Jei pranešimas nėra matomas, nieko nerodome
  if (!alertMessage.visible) return null;

  return (
    <div className={`alert alert-${alertMessage.type}`}>
      <span>{alertMessage.message}</span>
      <button className="alert-close" onClick={closeAlert}>
        ✖
      </button>
    </div>
  );
};

Alert.propTypes = {
  defaultMessage: PropTypes.string,
  defaultType: PropTypes.oneOf(["success", "info", "warning", "error"]),
};

export default Alert;
