import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkMode.scss';

const DarkMode = ({ defaultMode }) => {
  const [darkMode, setDarkMode] = useState(defaultMode === 'dark');

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <button 
      className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} 
      onClick={toggleDarkMode} 
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </button>
  );
};

DarkMode.propTypes = {
  defaultMode: PropTypes.oneOf(['light', 'dark']),
};

DarkMode.defaultProps = {
  defaultMode: 'light',
};

export default DarkMode;
