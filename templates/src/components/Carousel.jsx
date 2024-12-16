import { useState } from "react";
import PropTypes from "prop-types";
import "./carousel.scss"; // Stilių failas, kurį reikia pridėti

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
        &#8249; {/* Kairės rodyklė */}
      </button>
      <div className="carousel__slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel__image" />
      </div>
      <button className="carousel__button carousel__button--next" onClick={nextSlide}>
        &#8250; {/* Dešinės rodyklė */}
      </button>
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
