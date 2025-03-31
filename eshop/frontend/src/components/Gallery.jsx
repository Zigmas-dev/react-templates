import React from "react";
import Carousel from "./Carousel";
import "./gallery.scss";

const Gallery = () => {
  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",
  ];

  return (
    <div className="gallery">
      <Carousel images={images} />
      
        {images.map((_, index) => (
          <span key={index} className="dot" onClick={() => setCurrentIndex(index + 1)}></span>
        ))}
      
    </div>
  );
};

export default Gallery;