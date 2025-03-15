import React from 'react';
import Header from '../e-components/Header'; // Importuojame Header iš e-components
import styles from './Eshop.module.scss';

const Eshop = () => {
  return (
    <div className={styles.eshop}>
      <Header /> {/* Naudojame Header iš e-components */}
      {/* Likęs Eshop turinys */}
    </div>
  );
};

export default Eshop;