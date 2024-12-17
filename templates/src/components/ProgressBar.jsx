import { useState } from "react";
import PropTypes from "prop-types";
import "./progressbar.scss";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Pradinis progreso lygis
  const max = 100; // Maksimali reikšmė

  const handleProgressChange = () => {
    // Atnaujinamas progresas iki atsitiktinės reikšmės
    const newProgress = Math.min(progress + Math.floor(Math.random() * 20), max);
    setProgress(newProgress);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${(progress / max) * 100}%` }}
        ></div>
      </div>
      <button onClick={handleProgressChange}>Atnaujinti progresą</button>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
};

export default ProgressBar;
