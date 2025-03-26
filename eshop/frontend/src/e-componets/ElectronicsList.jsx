import { useState } from 'react';
import './electronicsList.scss';
import ProductPreview from './ProductPreview';

const ElectronicsList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Nešiojamas kompiuteris',
      price: '999€',
      imageUrl: 'https://picsum.photos/200/150?random=1',
      description:
        'Galingas kompiuteris su ilgu baterijos veikimo laiku ir dideliu ekranu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      specifications: {
        screen: '15.6 colių',
        processor: 'Intel Core i7',
        memory: '16GB RAM',
        battery: '8 valandos',
      },
    },
    {
      id: 2,
      name: 'Išmanusis telefonas',
      price: '799€',
      imageUrl: 'https://picsum.photos/200/150?random=2',
      description:
        'Išmanusis telefonas su dideliu ekranu ir pažangiu kameru. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      specifications: {
        screen: '6.5 colių',
        processor: 'Snapdragon 888',
        memory: '8GB RAM',
        battery: '4500mAh',
      },
    },
    {
      id: 3,
      name: 'Belaidės ausinės',
      price: '199€',
      imageUrl: 'https://picsum.photos/200/150?random=3',
      description:
        'Belaidės ausinės su puikiu garso kokybės ir patogiu dėvėjimu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      specifications: {
        connectivity: 'Bluetooth 5.0',
        battery: '20 valandų',
        noiseCancelling: 'Taip',
      },
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="electronics-list">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
      {selectedProduct && <ProductPreview product={selectedProduct} onClose={handleClosePreview} />}
    </div>
  );
};

export default ElectronicsList;