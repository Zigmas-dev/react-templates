import React from "react";
import PropTypes from "prop-types";
import "./categorylink.scss";

const CategoryLink = () => {
  // Duomenų masyvas apibrėžiamas čia
  const categories = [
    {
      category: "Batai",
      imageUrl: "https://via.placeholder.com/300x200?text=Batai",
      link: "/katalogas/batai",
    },
    {
      category: "Krepšiai",
      imageUrl: "https://via.placeholder.com/300x200?text=Krepšiai",
      link: "/katalogas/krepsiai",
    },
    {
      category: "Apranga",
      imageUrl: "https://via.placeholder.com/300x200?text=Apranga",
      link: "/katalogas/apranga",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((item, index) => (
        <div className="category-link" key={index}>
          <img
            src={item.imageUrl}
            alt={item.category}
            className="category-link__image"
          />
          <div className="category-link__overlay">
            <h3 className="category-link__title">{item.category}</h3>
            <a href={item.link} className="category-link__button">
              Peržiūrėti
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryLink;
