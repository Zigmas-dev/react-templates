import { useState } from "react";
import PropTypes from "prop-types";
import { FaGlobe } from "react-icons/fa";
import "./languageselector.scss";

const LanguageSelector = ({ initialLanguage = "lt", onLanguageChange = () => {} }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

    const languages = [
      { code: "lt", label: "Lietuvių" },
      { code: "en", label: "English" },
      { code: "ru", label: "Русский" },
    ];

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      onLanguageChange(language);
      console.log(`Pasirinkta kalba: ${language}`);
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
  initialLanguage: PropTypes.string,
  onLanguageChange: PropTypes.func,
};

export default LanguageSelector;
