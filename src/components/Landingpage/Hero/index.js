import React from 'react';

import heroImg from '../../../assets/images/landingpage/hero.png';

import './style.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h2>Everything you ever wanted to know in one place</h2>
        <p>A dynamic and comprehensive dashboard with an up to date view on Joystream.</p>
      </div>
      <div>
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
