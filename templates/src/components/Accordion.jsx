import AccordionItem from "./AccordionItem";
import "./accordion.scss";

const Accordion = () => {
  const accordionItems = [
    { title: "Klausimas 1", content: "Tai yra atsakymas į pirmą klausimą." },
    { title: "Klausimas 2", content: "Tai yra atsakymas į antrą klausimą." },
    { title: "Klausimas 3", content: "Tai yra atsakymas į trečią klausimą." },
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
