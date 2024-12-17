import PropTypes from "prop-types";
import "./profilecard.scss";

// Duomenys, kurie bus naudojami komponento viduje
const profileData = { 
  name: "Jonas Jonaitis",
  role: "Web Developer", 
  image: "https://via.placeholder.com/150",
  description: "Patyręs programuotojas, dirbantis su React ir Node.js.",
};

// ProfileCard komponentas, kuris naudoja profileData tiesiogiai
const ProfileCard = () => (
  <div className="profile-card">
    <img 
      src={profileData.image} 
      alt={`${profileData.name} profile`} 
      className="profile-card__image" 
    />
    <h3 className="profile-card__name">{profileData.name}</h3>
    <p className="profile-card__role">{profileData.role}</p>
  </div>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
};

export default ProfileCard;
