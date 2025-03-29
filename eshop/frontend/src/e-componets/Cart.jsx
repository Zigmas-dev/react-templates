import { useContext } from "react";
import { CartContext } from "./CartContext";
import { calculateCartTotals } from "./cartUtils"; // Importuojame skaičiavimo funkciją
import "./cart.scss";

const Cart = () => {
  const { cartItems: cart } = useContext(CartContext);

  const { subtotal, vat, total } = calculateCartTotals(cart); // Naudojame skaičiavimo funkciją

  return (
    <div className="cart">
      <h2>Krepšelis</h2>
      {cart.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Prekė</th>
                <th>Kiekis</th>
                <th>Vnt. Kaina</th>
                <th>Kaina</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price.toFixed(2)}€</td>
                  <td>{(item.price * item.quantity).toFixed(2)}€</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-totals">
            <p>Suma be PVM: {subtotal.toFixed(2)}€</p>
            <p>PVM (21%): {vat.toFixed(2)}€</p>
            <p>Suma su PVM: {total.toFixed(2)}€</p>
            <button className="buy-button">Pirkti</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;