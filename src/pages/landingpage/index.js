import React from 'react';

//componets
import Header from '../../components/header/Header';
import Hero from '../../components/Landingpage/Hero';
import Token from '../../components/Landingpage/Token';
import './style.scss';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Header />
      <div className="container-wrapper">
        <Hero />
        <Token />
      </div>
    </div>
  );
};

export default LandingPage;
