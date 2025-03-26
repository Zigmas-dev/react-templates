import "./electronicsList.scss";

const ElectronicsList = () => {
  const products = [
    { 
      id: 1, 
      name: "Nešiojamas kompiuteris", 
      price: "999€", 
      imageUrl: "https://picsum.photos/200/150?random=1", // Atsitiktinė nuotrauka
      description: "Galingas kompiuteris su ilgu baterijos veikimo laiku ir dideliu ekranu." // Lorem aprašymas
    },
    { 
      id: 2, 
      name: "Išmanusis telefonas", 
      price: "799€", 
      imageUrl: "https://picsum.photos/200/150?random=2", 
      description: "Išmanusis telefonas su dideliu ekranu ir pažangiu kameru." 
    },
    { 
      id: 3, 
      name: "Belaidės ausinės", 
      price: "199€", 
      imageUrl: "https://picsum.photos/200/150?random=3", 
      description: "Belaidės ausinės su puikiu garso kokybės ir patogiu dėvėjimu." 
    },
  ];

  return (
    <div className="electronics-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ElectronicsList;
