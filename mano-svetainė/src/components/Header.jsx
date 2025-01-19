// components/Header.jsx
import React from 'react';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <h1>Mano React Svetainė</h1>
      <nav>
        <a href="/"><FaHome /> Pradžia</a>
      </nav>
    </header>
  );
};

export default Header;
