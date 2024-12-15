import PropTypes from "prop-types";
import "./gallery.scss";

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((img, index) => (
      <img key={index} src={img} alt={`Gallery ${index}`} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Pridedama PropTypes validacija
};

export default Gallery;
