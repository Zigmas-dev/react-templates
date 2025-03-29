import { useContext } from "react";
import PropTypes from "prop-types";
import { FaShoppingBasket } from "react-icons/fa";
import { CartContext } from "./CartContext";
import "./productPreview.scss";

const ProductPreview = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return null;
  }

  const handleBuyClick = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("€", "")),
      quantity: 1,
      totalPrice: parseFloat(product.price.replace("€", "")),
    });
    onClose();
  };

  return (
    <div className="product-preview-modal-overlay">
      <div className="product-preview-modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={product.imageUrl} alt={product.name} className="preview-image" />
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        <h3>Specifikacijos</h3>
        <ul>
          <li>Ekranas: {product.specifications?.screen || "N/A"}</li>
          <li>Procesorius: {product.specifications?.processor || "N/A"}</li>
          <li>Atmintis: {product.specifications?.memory || "N/A"}</li>
          <li>Baterija: {product.specifications?.battery || "N/A"}</li>
        </ul>
        <button className="buy-button" onClick={handleBuyClick}>
          <FaShoppingBasket /> Pirkti
        </button>
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProductPreview;