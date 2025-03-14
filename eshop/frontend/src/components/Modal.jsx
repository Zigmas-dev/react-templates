import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import "./modal.scss";

const Modal = ({ isOpen = false, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <ContactForm />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;