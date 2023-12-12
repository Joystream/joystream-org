import React from 'react';

//componets
import Header from '../../components/header/Header';
import Hero from '../../components/Landingpage/Hero';
import Token from '../../components/Landingpage/Token';
import Backers from '../../components/Landingpage/Backers';
import Traction from '../../components/Landingpage/Traction';
import RoadMap from '../../components/Landingpage/RoadMap';
import Team from '../../components/Landingpage/Team';

import Community from '../../components/Landingpage/Community';
import Enginerring from '../../components/Landingpage/Engineering';
import Comparison from '../../components/Landingpage/Comparison';
import History from '../../components/Landingpage/History';
import './style.scss';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Header />
      <div className="container-wrapper">
        {/* <Hero /> */}
        {/* <Token /> */}
        {/* <Backers /> */}
        <History />
        {/* <Traction /> */}
        {/* <Enginerring /> */}
        <Community />
        <Team/>
        <RoadMap />
      </div>
    </div>
  );
};

export default LandingPage;
