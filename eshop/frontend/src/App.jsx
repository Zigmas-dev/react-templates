import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Eshop from "./e-pages/Eshop";
import "./index.scss";

const App = () => {
  const location = useLocation();
  const isEshopPage = location.pathname === "/eshop";

  return (
    <div>
      {!isEshopPage && <Header />} {/* Rodome Header tik tada, kai ne eshop puslapis */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eshop" element={<Eshop />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;