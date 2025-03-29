import { Link } from "react-router-dom";
import "./categorylink.scss";

const CategoryLink = () => {
  const categories = [
    {
      category: "Elektronika",
      imageUrl: "https://picsum.photos/300/200?category=electronics",
      link: "/shop/category/electronics",
    },
    {
      category: "Drabužiai",
      imageUrl: "https://picsum.photos/300/200?category=clothing",
      link: "/shop/category/clothing",
    },
    {
      category: "Namams",
      imageUrl: "https://picsum.photos/300/200?category=home",
      link: "/shop/category/home",
    },
    {
      category: "Žaislai",
      imageUrl: "https://picsum.photos/300/200?category=toys",
      link: "/shop/category/toys",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((item, index) => (
        <div className="category-link" key={index}>
          <img src={item.imageUrl} alt={item.category} className="category-link__image" />
          <div className="category-link__overlay">
            <h3 className="category-link__title">{item.category}</h3>
            <Link to={item.link} className="category-link__button">
              Peržiūrėti
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryLink;