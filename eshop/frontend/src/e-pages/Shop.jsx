import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../e-componets/Navbar";
import CategoryLink from "../e-componets/CategoryLink";
import Electronics from "./Electronics";
import "./shop.scss";

const Shop = () => {
  const location = useLocation(); // Gauname dabartinį maršrutą

  return (
    <div>
      <Navbar /> {/* Jei esame e-parduotuvės puslapyje, rodyti Navbar */}
      
      {/* Rodyti CategoryLink tik jei esame pagrindiniame /shop puslapyje */}
      {location.pathname === "/shop" && <CategoryLink />}
      
      <Routes>
        <Route path="/category/electronics" element={<Electronics />} />
      </Routes>
    </div>
  );
};

export default Shop;
