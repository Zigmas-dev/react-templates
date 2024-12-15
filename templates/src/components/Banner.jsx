import PropTypes from "prop-types";
import "./banner.scss";

const Banner = ({ text, speed = "10s", backgroundColor = "#f4f4f4", textColor = "#333", fontSize = "18px" }) => {
  return (
    <div className="banner" style={{ backgroundColor }}>
      <div
        className="banner-text"
        style={{
          animationDuration: speed,
          color: textColor,
          fontSize,
        }}
      >
        {text}
      </div>
    </div>
  );
};

// PropTypes patvirtinimai
Banner.propTypes = {
  text: PropTypes.string.isRequired, // Privalomas tekstas
  speed: PropTypes.string,          // Teksto judėjimo greitis
  backgroundColor: PropTypes.string, // Banerio fono spalva
  textColor: PropTypes.string,       // Teksto spalva
  fontSize: PropTypes.string,        // Šrifto dydis
};

export default Banner;
