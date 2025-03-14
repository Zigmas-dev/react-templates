import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
//import Eshop from "./pages/Eshop";
import "./index.scss";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-shop" element={<Eshop />} />
        
      </Routes>
      <Footer />

      
    </div>
  );
};

export default App;