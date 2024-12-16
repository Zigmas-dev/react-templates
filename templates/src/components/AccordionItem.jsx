import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AccordionItem;
