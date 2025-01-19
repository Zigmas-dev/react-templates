// components/Content.jsx
import React from 'react';

const Content = () => {
    const handleClick = () => {
      alert('Mygtukas paspaustas!');
    };
  
    return (
      <div className="container">
        <h2>Pasveikinimas</h2>
        <p>Ši svetainė sukurta naudojant React, SCSS ir Bootstrap!</p>
        <button className="btn btn-primary" onClick={handleClick}>Spauskite mane</button>
      </div>
    );
  };
  

export default Content;
