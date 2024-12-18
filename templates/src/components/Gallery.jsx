import { useState } from "react";
import PropTypes from "prop-types";
import "./gallery.scss";

const Gallery = () => {
  const [images] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ]);

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
