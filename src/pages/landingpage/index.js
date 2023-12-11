import React from 'react';

//componets
import Header from '../../components/header/Header';
import Hero from '../../components/Landingpage/Hero';
import Token from '../../components/Landingpage/Token';
import Backers from '../../components/Landingpage/Backers';
import Traction from '../../components/Landingpage/Traction';
import RoadMap from '../../components/Landingpage/RoadMap';
import Community from '../../components/Landingpage/Community';

import Community1 from '../../components/Landingpage/Community1';
import Enginerring from '../../components/Landingpage/Engineering';
import History from '../../components/Landingpage/History';
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
        <History />
        <Enginerring />
        <Community1 />
        <Community/>
        <RoadMap />
        <RoadMap />
      </div>
    </div>
  );
};

export default LandingPage;
