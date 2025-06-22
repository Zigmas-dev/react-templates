import Image from "../components/Image";
// import ContactForm from "../components/ContactForm";
import "./contactMe.scss";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <Image />
      <div className="contact-message">
        <p>Susisiekti su manim galite info@zigmaswebdev.lt</p> 
      </div>
      {/* <ContactForm /> */}
    </div>
  );
};

export default ContactMe;
