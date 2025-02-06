import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import "./index.scss";

const App = () => {
  return (
    <>
     <Header />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paslaugos" element={<Services />} />
     </Routes>

     <Footer /> 
    </>
  );
};

export default App;
