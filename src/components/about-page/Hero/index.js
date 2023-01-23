import React, { useEffect, useState } from 'react';

import EmptyIcon from '../../../assets/svg/empty-avatar.svg';

import employees from '../employee-data.json';
import foundingMembers from '../founding-members.json';

import shuffleArray from '../../../utils/shuffleArray';

import './style.scss';

const NUMBER_OF_EMPTY_ICONS = 4;
const NUMBER_OF_COLORED_ICONS = 12;

// TODO: Make sure to delete the icons folder if it is decided that we don't need them anymore!

const IconBackground = () => {
  const [employeesToShow, setEmployeesToShow] = useState([]);

  useEffect(() => {
    setEmployeesToShow(shuffleArray([...employees,...foundingMembers]).slice(0, NUMBER_OF_COLORED_ICONS));
  }, []);

  return (
    <div className="AboutPage__hero__background">
      {[...Array(NUMBER_OF_EMPTY_ICONS)].map((_, index) => (
        <img
          key={`empty-icon${index}`}
          src={EmptyIcon}
          className={`AboutPage__hero__background__empty-icon${index + 1}`}
          alt=""
        />
      ))}
      {/* TODO: Add placeholders while loading the image. */}
      {employeesToShow.map(({ avatarId }, index) => (
        <img
          key={`employee-icon${index}`}
          src={avatarId}
          className={`AboutPage__hero__background__employee-icon${index + 1}`}
          alt=""
        />
      ))}
    </div>
  );
};

const Hero = ({ title, subtitle }) => {
  return (
    <div className="AboutPage__hero-wrapper">
      <div className="AboutPage__hero">
        <div className="AboutPage__hero__content">
          <h1 className="AboutPage__hero__title">{title}</h1>
          <h2 className="AboutPage__hero__subtitle">{subtitle}</h2>
        </div>
        <IconBackground />
      </div>
    </div>
  );
};

export default Hero;
