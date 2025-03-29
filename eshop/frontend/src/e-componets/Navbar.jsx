import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser, FaSearch, FaQuestionCircle } from "react-icons/fa";
import { CartContext } from "./CartContext";
import "./navbar.scss";

const Navbar = () => {
  const { totalItems } = useContext(CartContext); // Naudojame totalItems iš CartContext

  const handleSearchSubmit = (values, { resetForm }) => {
    const sanitizedQuery = DOMPurify.sanitize(values.searchQuery);
    console.log("Ieškoma:", sanitizedQuery);
    resetForm();
  };

  return (
    <nav className="navbar">
      <ul className="categories">
        <li><Link to="/shop/faq">DUK</Link></li>
      </ul>

      <Formik
        initialValues={{ searchQuery: "" }}
        onSubmit={handleSearchSubmit}
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

      <div className="icons">
        <Link to="/shop/cart" className="cart-icon">
          <FaShoppingBasket />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>} {/* Rodome totalItems */}
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

export default Navbar;