import { FaBuilding, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Mūsų Kontaktai</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaBuilding className="icon" />
          <p>Įmonė: "Lorem Ipsum" Įmonė</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p>Adresas: Lorem g. 123, Lorem miestas, LT-12345</p>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <p>Telefonas: +370 612 34567</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>El. paštas: info@loremipsum.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;