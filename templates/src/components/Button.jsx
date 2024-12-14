import PropTypes from 'prop-types';
import "./button.scss";

const Button = ({ text, onClick, type = 'button', variant = 'primary' }) => (
  <button className={`button button-${variant}`} onClick={onClick} type={type}>
    {text}
  </button>
);

// PropTypes deklaracijos
Button.propTypes = {
  text: PropTypes.string.isRequired, // `text` yra būtinas ir turi būti string
  onClick: PropTypes.func.isRequired, // `onClick` yra būtinas ir turi būti funkcija
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // `type` yra pasirinkimas iš trijų
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']), // `variant` yra pasirinkimas iš trijų
};

// Numatytosios reikšmės (jei props nėra perduodami)
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
