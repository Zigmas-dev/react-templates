import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BulletinProvider } from "./components/BulletinContext"; // pritaikyk kelią jei reikia
import "./index.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BulletinProvider>
        <App />
      </BulletinProvider>
    </BrowserRouter>
  </StrictMode>
);
