import React from 'react';
import './style.scss';

const InterviewSection = ({ title, subtitle, image, fullWidth }) => {
  return (
    <div className={`InterviewSection__hero${fullWidth ? ' InterviewSection__hero__full-width' : ''}`}>
      <h1 className="InterviewSection__hero__title">
        <img className="InterviewSection__hero__image" src={image} alt="" />
        {title}
      </h1>
      <h2
        className={`InterviewSection__hero__subtitle${
          fullWidth ? ' InterviewSection__hero__subtitle__full-width' : ''
        }`}
      >
        {subtitle}
      </h2>
    </div>
  );
};

export default InterviewSection;
