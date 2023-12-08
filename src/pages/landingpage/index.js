import React from 'react';

//componets
import Header from '../../components/header/Header';
import Hero from '../../components/Landingpage/Hero';
import Token from '../../components/Landingpage/Token';
import Backers from '../../components/Landingpage/Backers';
import Traction from '../../components/Landingpage/Traction';
import RoadMap from '../../components/Landingpage/RoadMap';
import Community from '../../components/Landingpage/Community';

import './style.scss';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Header />
      <div className="container-wrapper">
        <Hero />
        <Token />
        <Backers />
        <Traction />
        <Community />
        <RoadMap />
      </div>
    </div>
  );
};

export default LandingPage;
