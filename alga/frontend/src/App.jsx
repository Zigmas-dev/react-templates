import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
//import Main from "./pages/Main";
import "./index.scss";

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
       
      </Routes>
    <Footer />
    </>
  )
};

export default App;