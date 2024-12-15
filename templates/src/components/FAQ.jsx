import { useState } from "react";
import PropTypes from "prop-types";
import "./faq.scss";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <h4 onClick={() => setIsOpen(!isOpen)} className="faq-question">
        {question}
      </h4>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
