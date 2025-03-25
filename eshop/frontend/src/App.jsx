import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./e-pages/Shop";

import "./index.scss";

const App = () => {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;