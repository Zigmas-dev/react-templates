// src/App.js
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import ProtectedRoute from "./components/ProtectedRoute"; // Importuojame ProtectedRoute
import "./index.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Pagrindinis kelias, kuris rodo LoginPage */}
        <Route path="/" element={<LoginPage />} />
        {/* Galite palikti ir /login, kuris nukreips į tą patį LoginPage */}
        <Route path="/login" element={<LoginPage />} />

        {/* Apsaugotas kelias: /main bus pasiekiamas tik prisijungusiems vartotojams */}
        <Route 
          path="/main" 
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          } 
        />

        {/* Galite pridėti ir 404 puslapį, jei reikia */}
        <Route path="*" element={<h2>Puslapis nerastas!</h2>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;