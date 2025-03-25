
import "./categorylink.scss";

const CategoryLink = () => {
  const categories = [
    {
      category: "Elektronika",
      imageUrl: "https://picsum.photos/300/200?category=electronics",
      link: "/katalogas/elektronika",
    },
    {
      category: "Drabužiai",
      imageUrl: "https://picsum.photos/300/200?category=clothing",
      link: "/katalogas/drabužiai",
    },
    {
      category: "Namams",
      imageUrl: "https://picsum.photos/300/200?category=home",
      link: "/katalogas/namams",
    },
    {
      category: "Žaislai",
      imageUrl: "https://picsum.photos/300/200?category=toys",
      link: "/katalogas/žaislai",
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