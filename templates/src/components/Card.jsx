import "./card.scss";

const Card = () => {
  const sampleCardData = {
    title: "Pavyzdinis pavadinimas",
    description: "Tai yra pavyzdinis kortelės aprašymas.",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="card">
      {sampleCardData.image && (
        <img
          src={sampleCardData.image}
          alt={sampleCardData.title}
          className="card-image"
        />
      )}
      <h3 className="card-title">{sampleCardData.title}</h3>
      <p className="card-description">{sampleCardData.description}</p>
    </div>
  );
};

export default Card;
