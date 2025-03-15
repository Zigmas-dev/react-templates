import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MainPage from "./e-pages/MainPage"; // Teisingas importas
import "./index.scss";

const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/main-page"; // Pataisytas kelias

  return (
    <div>
      {!isMainPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;