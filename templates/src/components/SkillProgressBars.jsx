import PropTypes from "prop-types";
import "./skillprogressbars.scss";

const SkillProgressBars = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Nustatomi komponento prop tipai
SkillProgressBars.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SkillProgressBars;
