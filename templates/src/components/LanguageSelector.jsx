import { useState } from "react";
import PropTypes from "prop-types";
import { FaGlobe } from "react-icons/fa";
import "./languageselector.scss";

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("lt");
  
    const languages = [
      { code: "lt", label: "Lietuvių" },
      { code: "en", label: "English" },
      { code: "ru", label: "Русский" },
    ];
  
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      console.log(`Pasirinkta kalba: ${language}`);
      // Čia galite pridėti papildomą logiką, pvz., lokalizacijos keitimą
    };
  
    return (
      <div className="language-selector">
        <FaGlobe className="icon" />
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          aria-label="Pasirinkti kalbą"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LanguageSelector;