import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactMe from "./pages/ContactMe";
import "./index.scss";

const App = () => {
  return (
    <>
     <Header />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paslaugos" element={<Services />} />
      <Route path="/susisiekim" element={<ContactMe />} />
     </Routes>

     <Footer /> 
    </>
  );
};

export default App;
