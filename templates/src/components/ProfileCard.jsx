import PropTypes from "prop-types";
import "./profilecard.scss";

const ProfileCard = ({ name, role, image }) => (
  <div className="profile-card">
    <img src={image} alt={`${name} profile`} className="profile-card__image" />
    <h3 className="profile-card__name">{name}</h3>
    <p className="profile-card__role">{role}</p>
  </div>
);

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfileCard;
