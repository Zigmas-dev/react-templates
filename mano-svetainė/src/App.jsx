import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import ContactForm from './components/ContactForm';
import './styles.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <ContactForm />
    </div>
  );
};

export default App;
