import PropTypes from "prop-types";
import "./progressbar.scss";

const ProgressBar = ({ value, max }) => (
  <div className="progress-bar">
    <div
      className="progress-bar__fill"
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default ProgressBar;
