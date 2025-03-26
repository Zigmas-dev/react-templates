import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../e-componets/Navbar";
import CategoryLink from "../e-componets/CategoryLink";
import Cart from "../e-componets/Cart";
import Electronics from "./Electronics";
import { CartProvider } from "../e-componets/CartContext";
import "./shop.scss";

const Shop = () => {
  const location = useLocation(); // Gauname dabartinį maršrutą

  return (
    <CartProvider>
      <Navbar /> {/* Jei esame e-parduotuvės puslapyje, rodyti Navbar */}
      
      {/* Rodyti CategoryLink tik jei esame pagrindiniame /shop puslapyje */}
      {location.pathname === "/shop" && <CategoryLink />}
      
      <Routes>
        <Route path="/category/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default Shop;
