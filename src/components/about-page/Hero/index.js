import React, { useEffect, useState } from 'react';

import EmptyIcon from '../../../assets/svg/empty-avatar.svg';

import employees from '../employee-data.json';
import foundingMembers from '../founding-members.json';

import shuffleArray from '../../../utils/shuffleArray';

import './style.scss';

const NUMBER_OF_EMPTY_ICONS = 4;
const NUMBER_OF_COLORED_ICONS = 12;

const Icon = ({ avatarSrc, iconIndex }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = avatarSrc;

    img.onload = () => {
      setShowPlaceholder(false);
    };
  }, [avatarSrc]);

  if (showPlaceholder) {
    return <img src={EmptyIcon} className={`AboutPage__hero__background__employee-icon${iconIndex + 1}`} alt="" />;
  }

  return <img src={avatarSrc} className={`AboutPage__hero__background__employee-icon${iconIndex + 1}`} alt="" />;
};

const IconBackground = () => {
  const [employeesToShow, setEmployeesToShow] = useState([]);

  useEffect(() => {
    setEmployeesToShow(shuffleArray([...employees, ...foundingMembers]).slice(0, NUMBER_OF_COLORED_ICONS));
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
      {employeesToShow.map(({ avatarId }, index) => (
        <Icon avatarSrc={avatarId} iconIndex={index} />
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
