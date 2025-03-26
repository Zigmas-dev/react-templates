import { useContext } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser, FaSearch, FaQuestionCircle } from "react-icons/fa";
import { CartContext } from "./CartContext";
import "./navbar.scss";

const Navbar = () => {
  const { cartItems } = useContext(CartContext); 
  // Paieškos užklausos apdorojimas su DOMPurify, kad būtų užtikrintas saugumas
  const handleSearchSubmit = (values, { resetForm }) => {
    const sanitizedQuery = DOMPurify.sanitize(values.searchQuery); // Sanitizuojame paieškos užklausą
    console.log("Ieškoma:", sanitizedQuery);
    resetForm(); // Išvalome formą po pateikimo
  };

  return (
    <nav className="navbar">
      {/* Prekių kategorijos */}
      <ul className="categories">
        <li><Link to="/shop/faq">DUK</Link></li>
      </ul>

      {/* Paieškos forma su Formik */}
      <Formik
        initialValues={{ searchQuery: "" }} // Inicialūs formos laukai
        onSubmit={handleSearchSubmit} // Paieškos užklausos pateikimas
      >
        {() => (
          <Form className="search-bar">
            <Field
              type="text"
              name="searchQuery"
              placeholder="Ieškoti prekių..."
            />
            <button type="submit"><FaSearch /></button>
          </Form>
        )}
      </Formik>

      {/* Ikonos: krepšelis, vartotojas, DUK */}
      <div className="icons">
        <Link to="/shop/cart" className="cart-icon">
          <FaShoppingBasket />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
        <Link to="/shop/account" className="user-icon">
          <FaUser />
        </Link>
        <Link to="/shop/faq" className="faq-icon">
          <FaQuestionCircle />
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired, //Nurodome, kad cartItems yra mastvas ir yra privalomas
};

export default Navbar;
