import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Patikriname, ar vartotojas prisijungęs (pvz., ar yra tokenas localStorage)
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  if (isAuthenticated()) {
    return children; // Jei prisijungęs, leidžiame atvaizduoti vaikinius komponentus
  } else {
    return <Navigate to="/" />; // Jei neprisijungęs, nukreipiame į pagrindinį (LoginPage)
  }
};

export default ProtectedRoute;