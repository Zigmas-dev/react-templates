import PropTypes from "prop-types"; // Importuojame PropTypes
import "./alert.scss";

const Alert = ({ message, type = "info" }) => (
  <div className={`alert alert-${type}`}>
    {message}
  </div>
);

// Pridedame prop-types validaciją
Alert.propTypes = {
  message: PropTypes.string.isRequired, // `message` yra privalomas string
  type: PropTypes.oneOf(["info", "success", "warning", "error"]), // `type` yra vienas iš išvardintų tipų
};

// Numatytasis `type` jau apibrėžtas funkcijoje, bet galima palikti dar kartą čia, jei reikia:
Alert.defaultProps = {
  type: "info",
};

export default Alert;
