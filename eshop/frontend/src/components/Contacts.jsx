import { FaBuilding, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import PropTypes from 'prop-types'; // Importuojame prop-types
import "./contacts.scss";

const Contacts = ({ onButtonClick }) => { // Priimame funkciją kaip savybę
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
      <button className="contact-button" onClick={onButtonClick}> {/* Iškviesti funkciją */}
        Pateikti užklausą
      </button>
    </div>
  );
};

Contacts.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Apibrėžiame savybę
};

export default Contacts;