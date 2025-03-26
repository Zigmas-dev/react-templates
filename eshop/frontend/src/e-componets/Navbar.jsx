import { Formik, Form, Field } from "formik";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser, FaSearch, FaQuestionCircle } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
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
