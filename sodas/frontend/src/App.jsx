import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import "./index.scss";

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>

     </>
  );
};

export default App;