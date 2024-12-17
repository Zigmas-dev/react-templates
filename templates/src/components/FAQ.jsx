import { useState } from "react";
import "./faq.scss";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Kaip veikia svetainė?",
      answer: "Mūsų svetainė suteikia vartotojams patogią prieigą prie svarbios informacijos.",
    },
    {
      question: "Kaip galiu susisiekti?",
      answer: "Galite susisiekti naudodamiesi mūsų kontaktine forma arba el. paštu.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div key={index} className="faq">
          <h4 onClick={() => toggleFAQ(index)} className="faq-question">
            {item.question}
          </h4>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
