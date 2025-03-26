import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./cart.scss";

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Gauname cartItems iš CartContext

  // Apskaičiuojame bendrą kainą
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('€', ''));
    return total + price * item.quantity;
  }, 0);

  // Jei krepšelis tuščias, nieko nerodome
  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="cart-container">
      <h1>Jūsų krepšelis</h1>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </div>
            <div className="item-quantity">Kiekis: {item.quantity}</div>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Bendra kaina: {totalPrice.toFixed(2)}€
      </div>
      <button className="checkout-button">Atsiskaityti</button>
    </div>
  );
};

export default Cart;