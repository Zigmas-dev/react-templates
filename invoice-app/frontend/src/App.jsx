import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import "./index.scss";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    
  )
};

export default App;