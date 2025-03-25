import { useLocation } from "react-router-dom"; // Importuojame useLocation
import Navbar from "../e-componets/Navbar";
import CategoryLink from "../e-componets/CategoryLink";
import "./shop.scss";

const Shop = () => {
  const location = useLocation(); // Gauname dabartinę nuorodą

  // Patikriname, ar esame e-parduotuvės puslapyje
  const isShopPage = location.pathname === "/shop";

  return (
    <div>
      {isShopPage && <Navbar />} {/* Jei esame e-parduotuvės puslapyje, rodyti Navbar */}
      <CategoryLink />
      <div className="hello">Sveiki. Čia pagrindinis e-paeduotuvės puslapis</div>
    </div>
  );
};

export default Shop;
