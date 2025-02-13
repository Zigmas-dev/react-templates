import photo from "../assets/photo.webp";
import "./image.scss";

const Image = () => {
   return (
     <div className="image-container">
      <img src={photo} alt="profile-photo" className="profile-photo" />
     </div>
   )
};

export default Image;