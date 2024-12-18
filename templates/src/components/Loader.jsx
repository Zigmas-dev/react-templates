import { useState, useEffect } from "react";
import "./loader.scss";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Kraunama...");

  useEffect(() => {
    // Pakeičia tekstą po 3 sekundžių
    const loadingTimer = setTimeout(() => {
      setMessage("Krovimas baigtas!");
    }, 3000);

    // Išjungia krovimo indikatorių po 5 sekundžių
    const hideLoaderTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  // Jei krovimas baigtas, nerodyti nieko
  if (!loading) return null;

  return (
    <div className="loader">
      <div className="loader-circle"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;
