import PropTypes from "prop-types";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./cart.scss";

const Cart = ({ items = [], onRemoveItem = () => {} }) => {
  const [notification, setNotification] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false); // Būsenos kintamasis krepšelio matomumui

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
    setNotification("Item removed from cart!");
    setTimeout(() => setNotification(""), 3000); // Pranešimo uždarymas po 3 sekundžių
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Keičiam krepšelio matomumą
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart__header">
        <FaShoppingCart className="cart__icon" onClick={toggleCartVisibility} />
      </div>
      {isCartVisible && ( // Jei krepšelis matomas, rodome prekes ir pranešimus
        <>
          {items.length === 0 ? (
            <p className="cart__empty">Your cart is empty.</p>
          ) : (
            <ul className="cart__list">
              {items.map((item) => (
                <li key={item.id} className="cart__item">
                  <span className="cart__item-name">{item.name}</span>
                  <span className="cart__item-price">${item.price.toFixed(2)}</span>
                  <button
                    className="cart__remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaTrashAlt className="cart__icon" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {notification && <p className="cart__notification">{notification}</p>}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  onRemoveItem: PropTypes.func,
};

export default Cart;
