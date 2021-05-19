import React, { useEffect, useState }  from 'react';

import EmptyIcon from '../../../assets/svg/empty-avatar.svg';
import Jsgenesis from '../../../assets/svg/jsgenesis.svg';

import employees from '../employee-data';

import shuffleArray from '../../../utils/shuffleArray';

import './style.scss';

const IconBackground = () => {
  const [employeesToShow, setEmployeesToShow] = useState([]);
  
  useEffect(() => {
    setEmployeesToShow(shuffleArray(employees).slice(0,5));
  },[])

  return (
    <div className="AboutPage__hero__background">
      {[...Array(5)].map((_, index) => (
        <img
          key={`empty-icon${index}`}
          src={EmptyIcon}
          className={`AboutPage__hero__background__empty-icon${index + 1}`}
          alt=''
        />
      ))}
      <img src={Jsgenesis} className='AboutPage__hero__background__jsgenesis' alt=''/>
      {employeesToShow.map(({ Icon }, index) => {
        return (
          <Icon
            key={`employee-icon${index}`}
            className={`AboutPage__hero__background__employee-icon${index + 1}`}
          />
        );
      })}
    </div>
  );
};

const Hero = ({ title, subtitle }) => {
  return (
    <div className="AboutPage__hero-wrapper">
      <div className="AboutPage__hero">
        <div className="AboutPage__hero__content">
          <h1 className="AboutPage__hero__title">
            {title}
          </h1>
          <h2 className="AboutPage__hero__subtitle">
            {subtitle}
          </h2>
        </div>
        <IconBackground />
      </div>
    </div>
  );
};

export default Hero;
