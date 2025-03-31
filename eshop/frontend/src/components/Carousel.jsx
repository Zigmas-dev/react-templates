import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./carousel.scss";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const trackRef = useRef(null);

  const infiniteImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex === infiniteImages.length) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(-${1 * 100}%)`;
        setTimeout(() => {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
          setCurrentIndex(1);
        }, 0);
        return 1;
      }
      return newIndex;
    });
  }, [infiniteImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex === 0) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(-${(infiniteImages.length - 2) * 100}%)`;
        setTimeout(() => {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
          setCurrentIndex(infiniteImages.length - 2);
        }, 0);
        return infiniteImages.length - 2;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, interval);
    return () => clearInterval(autoSlide);
  }, [nextSlide, interval]);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-track-container">
        <div className="carousel-track" ref={trackRef}>
          {infiniteImages.map((img, index) => (
            <div key={index} className="slide">
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default Carousel;