import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Eshop from "./pages/Eshop";
import "./index.scss";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ape mus" element={<About />} />
        <Route path="/e-parduotuvė" element={<Eshop />} /> 
      </Routes>

      Sveiki atvykę į Mano El. Svetainę!
    </div>
  );
};

export default App;